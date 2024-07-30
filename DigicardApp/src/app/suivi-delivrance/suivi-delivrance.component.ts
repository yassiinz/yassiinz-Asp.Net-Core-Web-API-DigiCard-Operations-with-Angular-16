import { Component } from '@angular/core';
import { CompaniesService } from '../shared/companies.service';
import { DelivranceService } from '../shared/delivrance.service';
import { CardRequest } from 'src/app/shared/card-request.model';
import { NgForm } from "@angular/forms";
import { Delivrance } from '../shared/delivrance.model';

@Component({
  selector: 'app-suivi-delivrance',
  templateUrl: './suivi-delivrance.component.html',
  styleUrls: ['./suivi-delivrance.component.css']
})
export class SuiviDelivranceComponent {
  constructor(public service : DelivranceService){}
  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedDelivrance: Delivrance) {
    this.service.formData = Object.assign({}, selectedDelivrance);
  }
}
