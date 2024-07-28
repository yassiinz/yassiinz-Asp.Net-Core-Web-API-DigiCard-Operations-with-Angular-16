import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { Delivrance } from './delivrance.model';
import { NgForm } from "@angular/forms";
@Injectable({
  providedIn: 'root'
})
export class DelivranceService {

  url : string = environment.apiBaseURL+'/Delivrances'
  list: Delivrance[] = [];
  formData : Delivrance = new Delivrance();
  formSubmitted: boolean = false;
  constructor(private http: HttpClient) { }
  refreshList(){
    this.http.get(this.url)
    .subscribe({
      next : res =>{this.list=res as Delivrance[]},
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
    this.formData = new Delivrance()
    this.formSubmitted = false
  }
}
