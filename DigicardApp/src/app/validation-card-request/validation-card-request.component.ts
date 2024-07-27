import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../shared/companies.service';
import { CardRequestService } from '../shared/card-request.service';

@Component({
  selector: 'app-validation-card-request',
  templateUrl: './validation-card-request.component.html',
  styleUrls: ['./validation-card-request.component.css']
})
export class ValidationCardRequestComponent implements OnInit{
  constructor(public service : CompaniesService,public servicee : CardRequestService){}
  ngOnInit(): void {
    this.service.refreshList();
    this.servicee.refreshList();
  }
  

}
