import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetfarmingtipsDetail } from '../shared/models/getfarmingtips-detailVm';
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
export class GetfarmingtipsDetailService {

  formData: GetfarmingtipsDetail = new GetfarmingtipsDetail();
  readonly baseURL = glob.rootUrl+'Farmer/getFarmingTips';
  list: GetfarmingtipsDetail[] | undefined;

  constructor(private http: HttpClient) { }
  
  refreshList() {
    this.http.get(this.baseURL,httpOptions)
      .toPromise()
      .then(res => this.list = res as GetfarmingtipsDetail[]);
  }
}

