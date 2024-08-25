import { Component, OnInit  } from '@angular/core';
import { CompaniesService } from '../shared/companies.service';
import { CardRequestService } from '../shared/card-request.service';
import { CardRequest } from 'src/app/shared/card-request.model';
import { NgForm } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-validation-demande',
  templateUrl: './validation-demande.component.html',
  styleUrls: ['./validation-demande.component.css']
})
export class ValidationDemandeComponent implements OnInit {
  constructor(public service : CompaniesService,public servicee: CardRequestService ,private toastr: ToastrService){}
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
            this.servicee.refreshList();
            this.toastr.success('Request Deleted successfully', 'Demande Carte');
          },
          error: err => { console.log(err) }
        })
  }

   populateForm(selectedDelivrance: CardRequest) {
    this.servicee.formData = Object.assign({}, selectedDelivrance);
  }
  onValidate(request: CardRequest) {
    if (confirm('Are you sure you want to accept this request?')) {
      request.status = 'Acceptée';
      this.servicee.updateStatus(request)
        .subscribe({
          next: res => {
            this.servicee.refreshList(); // Refresh the list after updating the status
            this.toastr.success('Request accepted successfully', 'Demande Carte');
          },
          error: err => { console.log(err); }
        });
    }
  }
  
}
