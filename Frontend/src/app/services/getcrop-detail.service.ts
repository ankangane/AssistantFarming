import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetcropDetail } from '../shared/models/getcrop-detailVm';
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
export class GetcropDetailService {

  formData: GetcropDetail = new GetcropDetail();
  readonly baseURL = glob.rootUrl+'Farmer/getCropsDetails';
  list: GetcropDetail[] | undefined;

  constructor(private http: HttpClient) { }

  refreshList() {
    this.http.get(this.baseURL,httpOptions)
      .toPromise()
      .then(res => this.list = res as GetcropDetail[]);
  }
}

