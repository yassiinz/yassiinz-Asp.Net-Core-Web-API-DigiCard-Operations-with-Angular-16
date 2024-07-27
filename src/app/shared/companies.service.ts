import { Injectable } from '@angular/core';
import { Companies } from './companies.model';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { NgForm } from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  url : string = environment.apiBaseURL+'/Companies'
  list: Companies[] = [];
  constructor(private http: HttpClient) { }
  refreshList(){
    this.http.get(this.url)
    .subscribe({
      next : res =>{this.list=res as Companies[]},
      error : err =>{console.log(err)}
    })
  }
}
