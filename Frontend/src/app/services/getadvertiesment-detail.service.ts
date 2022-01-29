import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetadvertisementDetail } from '../shared/models/getadvertisement-detailVm';
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
export class GetadvertiesmentDetailService {

  formData: GetadvertisementDetail = new GetadvertisementDetail();
  readonly baseURL = glob.rootUrl+'Farmer/getAdvertisements';
  list: GetadvertisementDetail[] | undefined;

  constructor(private http: HttpClient) { }
  refreshList() {
    this.http.get(this.baseURL,httpOptions)
      .toPromise()
      .then(res => this.list = res as GetadvertisementDetail[]);
  }
}
