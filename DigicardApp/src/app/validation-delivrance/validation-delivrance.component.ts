import { Component } from '@angular/core';
import { DelivranceService } from '../shared/delivrance.service';
import { Delivrance } from '../shared/delivrance.model';
import { NgForm } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-validation-delivrance',
  templateUrl: './validation-delivrance.component.html',
  styleUrls: ['./validation-delivrance.component.css']
})
export class ValidationDelivranceComponent {
  constructor(public service : DelivranceService,private toastr: ToastrService){}
  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedDelivrance: Delivrance) {
    this.service.formData = Object.assign({}, selectedDelivrance);
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?'))
      this.service.deletePaymentDetail(id)
        .subscribe({
          next: res => {
            this.service.list = res as Delivrance[]
            this.service.refreshList();
            this.toastr.success('Request Deleted successfully', 'Demande Carte');
          },
          error: err => { console.log(err) }
        })
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
          this.toastr.success('Inserted successfully', 'Demande Carte')
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
          this.toastr.info('Updated successfully', 'Demande Carte')
        },
        error: err => { console.log(err) }
      })
   }
   onValidate(request: Delivrance) {
    if (confirm('Are you sure you want to accept this request?')) {
      request.status = 'Acceptée';
      this.service.updateStatus(request)
        .subscribe({
          next: res => {
            this.service.refreshList(); // Refresh the list after updating the status
            this.toastr.success('Request accepted successfully', 'Demande Carte');
          },
          error: err => { console.log(err); }
        });
    }
  }
}
