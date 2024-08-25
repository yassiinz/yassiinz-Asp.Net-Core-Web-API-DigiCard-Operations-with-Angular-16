import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import * as XLSX from 'xlsx';
import { DelivranceService } from '../shared/delivrance.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delivrance',
  templateUrl: './delivrance.component.html',
  styleUrls: ['./delivrance.component.css']
})
export class DelivranceComponent implements OnInit {
  showForm1 = false;
  showForm2 = false;
  fileData: any[] = [];
  fileHeaders: string[] = [];

  constructor(public service: DelivranceService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.service.refreshList();
  }

  toggleForm(form: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (form === 'form1') {
      this.showForm1 = isChecked;
      this.showForm2 = !isChecked;
    } else if (form === 'form2') {
      this.showForm2 = isChecked;
      this.showForm1 = !isChecked;
    }
  }

  onSubmit(form: NgForm) {
    this.service.formSubmitted = true;
    if (form.valid) {
      if (this.service.formData.id === 0)
        this.insertRecord(form);
      else
        this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail()
      .subscribe({
        next: res => {
          this.service.list = res as any[];
          this.service.resetForm(form);
          this.toastr.success('Inserted successfully', 'Delivrance');
        },
        error: err => { console.log(err); }
      });
  }

  updateRecord(form: NgForm) {
    this.service.putPaymentDetail()
      .subscribe({
        next: res => {
          this.service.list = res as any[];
          this.service.resetForm(form);
          this.toastr.info('Updated successfully', 'Delivrance');
        },
        error: err => { console.log(err); }
      });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const data: string = e.target.result;
        const workbook: XLSX.WorkBook = XLSX.read(data, { type: 'binary' });
        const firstSheet: XLSX.WorkSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData: any[][] = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

        if (jsonData.length > 0) {
          this.fileHeaders = jsonData[0] as string[]; // Explicitly cast to string[]
          this.fileData = jsonData.slice(1).map((row: any[]) => {
            let obj: any = {};
            row.forEach((value, index) => {
              obj[this.fileHeaders[index]] = value;
            });
            return obj;
          });
        }
      };
      reader.readAsBinaryString(file);
    }
  }

  addData() {
    console.log('Uploading data:', this.fileData);
    this.service.uploadData(this.fileData)
      .subscribe({
        next: response => {
          this.toastr.success('Data uploaded successfully', 'Delivrance');
          this.service.refreshList();
        },
        error: error => {
          console.error('Error uploading data', error.error.errors);
          this.toastr.error('Failed to upload data', 'Delivrance');
        }
      });
  }
  
}
