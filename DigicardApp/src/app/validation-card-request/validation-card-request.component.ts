import { Component, OnInit } from '@angular/core';
import { DelivranceService } from '../shared/delivrance.service';
import { NgForm } from "@angular/forms";
import { Delivrance } from '../shared/delivrance.model';

@Component({
  selector: 'app-validation-card-request',
  templateUrl: './validation-card-request.component.html',
  styleUrls: ['./validation-card-request.component.css']
})
export class ValidationCardRequestComponent implements OnInit{
  constructor(public service : DelivranceService){}
  ngOnInit(): void {
    this.service.refreshList();
  }
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
