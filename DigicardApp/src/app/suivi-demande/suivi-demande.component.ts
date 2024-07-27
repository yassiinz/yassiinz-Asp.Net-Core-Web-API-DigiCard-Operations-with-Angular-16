import { Component , OnInit } from '@angular/core';
import { CompaniesService } from '../shared/companies.service';
import { CardRequestService } from '../shared/card-request.service';
import { CardRequest } from 'src/app/shared/card-request.model';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-suivi-demande',
  templateUrl: './suivi-demande.component.html',
  styleUrls: ['./suivi-demande.component.css']
})
export class SuiviDemandeComponent implements OnInit{
  constructor(public service : CompaniesService,public servicee: CardRequestService ){}
  ngOnInit(): void {
    this.service.refreshList();
    this.servicee.refreshList();

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
  updateRecord(form: NgForm) {
    this.servicee.putPaymentDetail()
      .subscribe({
        next: res => {
          this.servicee.list = res as CardRequest[]
          this.servicee.resetForm(form)
        },
        error: err => { console.log(err) }
      })
   }

   populateForm(selectedRecord: CardRequest) {
    this.servicee.formData = Object.assign({}, selectedRecord);
  }
  updateStatus(id: number): void {
    const entry = this.servicee.list.find((item: any) => item.id === id);
    if (entry) {
      entry.status = 'Validation Finale';
    }
  }

}
