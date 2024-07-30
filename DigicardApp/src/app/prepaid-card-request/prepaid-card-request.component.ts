import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../shared/companies.service';
import { CardRequestService } from 'src/app/shared/card-request.service';
import { NgForm } from "@angular/forms";
import { CardRequest } from 'src/app/shared/card-request.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-prepaid-card-request',
  templateUrl: './prepaid-card-request.component.html',
  styleUrls: ['./prepaid-card-request.component.css']
})
export class PrepaidCardRequestComponent implements OnInit{
  constructor(public service : CompaniesService,private toastr: ToastrService,public servicee : CardRequestService){}
  ngOnInit(): void {
    this.service.refreshList();
  }

  onSubmit(form: NgForm) {
    this.servicee.formSubmitted = true
    if (form.valid) {
      if (this.servicee.formData.id == 0)
        this.insertRecord(form)
      else
        this.updateRecord(form)
    }
    /*this.router.navigate(['/validation-card-request']);*/
  }
  insertRecord(form: NgForm) {
    this.servicee.postPaymentDetail()
      .subscribe({
        next: res => {
          this.servicee.list = res as CardRequest[]
          this.servicee.resetForm(form)
          this.toastr.success('Inserted successfully', 'Payment Detail Register')
        },
        error: err => { console.log(err) }
      })
  }
  updateRecord(form: NgForm) {
    this.servicee.putPaymentDetail()
      .subscribe({
        next: res => {
          this.servicee.list = res as CardRequest[]
          this.servicee.resetForm(form)
          this.toastr.info('Updated successfully', 'Payment Detail Register')
        },
        error: err => { console.log(err) }
      })
   }
}
