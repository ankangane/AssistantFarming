import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpdateaddstatusDetail } from '../shared/models/updateaddstatus-detailVm';
import * as glob from '../shared/glob'
const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem("token")}`,
    'Content-Type': 'text/json',
    'responseType':'text' as 'json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UpdateaddstatusDetailService {
  formData: UpdateaddstatusDetail= new UpdateaddstatusDetail();
  readonly baseURL = glob.rootUrl+'Farmer/updateAdvertisementStatus';
  list : UpdateaddstatusDetail[] | undefined;
  constructor(private http:HttpClient) { }
  postUpdatestatus() {
    return this.http.post(this.baseURL, this.formData,httpOptions);
  }
  putUpdatestatus() {
    return this.http.put(`${this.baseURL}?adertisementId=${this.formData.advertisementId}&status=${this.formData.advertisementStatus}`, this.formData,httpOptions);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as UpdateaddstatusDetail[]);
  }

}
