import { Component } from '@angular/core';
import { CompaniesService } from '../shared/companies.service';
import { DelivranceService } from '../shared/delivrance.service';
import { CardRequest } from 'src/app/shared/card-request.model';
import { NgForm } from "@angular/forms";
import { Delivrance } from '../shared/delivrance.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-suivi-delivrance',
  templateUrl: './suivi-delivrance.component.html',
  styleUrls: ['./suivi-delivrance.component.css']
})
export class SuiviDelivranceComponent {
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

          },
          error: err => { console.log(err) }
        })
  }
  handleClick(status: string) {
    if (status === 'En Attente') {
        this.toastr.error('Access Denied', 'Demande est En Attente')
    } else if (status === 'Acceptée') {
      this.toastr.info('Access Granted', 'You will be receiving your card soon !')
    }
}
}
