import { Component , OnInit } from '@angular/core';
import { CompaniesService } from '../shared/companies.service';
import { CardRequestService } from '../shared/card-request.service';
import { CardRequest } from 'src/app/shared/card-request.model';
import { NgForm } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suivi-demande',
  templateUrl: './suivi-demande.component.html',
  styleUrls: ['./suivi-demande.component.css']
})
export class SuiviDemandeComponent implements OnInit{
  constructor(public service : CompaniesService,public servicee: CardRequestService ,private toastr: ToastrService,private router: Router){}
  ngOnInit(): void {
    this.service.refreshList();
    this.servicee.refreshList();

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
          this.toastr.success('Inserted successfully', 'Demande Carte')
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
          this.toastr.info('Updated successfully', 'Demande Carte')
        },
        error: err => { console.log(err) }
      })
   }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?'))
      this.servicee.deletePaymentDetail(id)
        .subscribe({
          next: res => {
            this.servicee.list = res as CardRequest[]

          },
          error: err => { console.log(err) }
        })
  }

   populateForm(selectedDelivrance: CardRequest) {
    this.servicee.formData = Object.assign({}, selectedDelivrance);
  }

  handleClick(status: string) {
    if (status === 'En Attente') {
        this.toastr.error('Access Denied', 'Demande est En Attente')
    } else if (status === 'Acceptée') {
        this.router.navigate(['/delivrance']);
    }
}

}
