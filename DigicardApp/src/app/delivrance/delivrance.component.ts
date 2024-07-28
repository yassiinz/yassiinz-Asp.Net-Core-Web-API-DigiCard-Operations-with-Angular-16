import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../shared/companies.service';
import { CardRequestService } from 'src/app/shared/card-request.service';
import { NgForm } from "@angular/forms";
import { Delivrance } from 'src/app/shared/delivrance.model';
import { Router } from '@angular/router';
import { DelivranceService } from '../shared/delivrance.service';

@Component({
  selector: 'app-delivrance',
  templateUrl: './delivrance.component.html',
  styleUrls: ['./delivrance.component.css']
})
export class DelivranceComponent implements OnInit{
  showForm1 = false;
  showForm2 = false;

  toggleForm(form: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (form === 'form1') {
      this.showForm1 = isChecked;
      if (isChecked) this.showForm2 = false;
    } else if (form === 'form2') {
      this.showForm2 = isChecked;
      if (isChecked) this.showForm1 = false;
    }
  }
  constructor(public service : DelivranceService){}
  ngOnInit(): void {
    this.service.refreshList();
  }

  onSubmit(form: NgForm) {
    this.service.formSubmitted = true
    if (form.valid) {
      if (this.service.formData.id == 0)
        this.insertRecord(form)
      else
        this.updateRecord(form)
    }
    /*this.router.navigate(['/validation-card-request']);*/
  }
  insertRecord(form: NgForm) {
    this.service.postPaymentDetail()
      .subscribe({
        next: res => {
          this.service.list = res as Delivrance[]
          this.service.resetForm(form)
        },
        error: err => { console.log(err) }
      })
  }
  updateRecord(form: NgForm) {
    this.service.putPaymentDetail()
      .subscribe({
        next: res => {
          this.service.list = res as Delivrance[]
          this.service.resetForm(form)
        },
        error: err => { console.log(err) }
      })
   }
}
