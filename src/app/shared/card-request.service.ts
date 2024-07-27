import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { CardRequest } from './card-request.model';
import { NgForm } from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class CardRequestService {

  url : string = environment.apiBaseURL+'/CardRequests'
  list: CardRequest[] = [];
  formData : CardRequest = new CardRequest();
  formSubmitted: boolean = false;
  constructor(private http: HttpClient) { }
  refreshList(){
    this.http.get(this.url)
    .subscribe({
      next : res =>{this.list=res as CardRequest[]},
      error : err =>{console.log(err)}
    })
  }
  postPaymentDetail() {
    return this.http.post(this.url, this.formData)
  }

  putPaymentDetail() {
    return this.http.put(this.url + '/' + this.formData.id, this.formData)
  }


  deletePaymentDetail(id: number) {
    return this.http.delete(this.url + '/' + id)
  }


  resetForm(form: NgForm) {
    form.form.reset()
    this.formData = new CardRequest()
    this.formSubmitted = false
  }
}
