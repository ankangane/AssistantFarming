import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddcomplaintDetail, GetcomplaintDetail } from '../shared/models/AddcomplaintDetailVm';
import * as glob from '../shared/glob'
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { AdvertiesmentFeedBack } from '../shared/models/SignUpVm';
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
export class AddcomplaintDetailService {

  formData: AddcomplaintDetail= new AddcomplaintDetail();
  readonly baseURL = glob.rootUrl+'Farmer/addComplaint';
  list : AddcomplaintDetail[] | undefined;
  datasource:any;
  constructor(private http: HttpClient) { }

  // postAddCompliantDetail() {
  //   return this.http.post(`${this.baseURL}`,this.formData,httpOptions);

  //     }
  postAddCompliantDetail():Observable<AdvertiesmentFeedBack> {
    return this.http.post<AdvertiesmentFeedBack>(`${this.baseURL}?status=${this.formData.complaintStatus}`,this.formData,httpOptions);
  }

  formData1:GetcomplaintDetail=new GetcomplaintDetail();
readonly baseURL1= glob.rootUrl+'Farmer/getComplaints';
list1:GetcomplaintDetail[] | undefined;

  refreshList() {
    this.http.get(this.baseURL1,httpOptions)
      .subscribe(resul=>
        this.list1 = resul as GetcomplaintDetail[])
        this.datasource=new MatTableDataSource(this.list1);
       return this.list1
  }
  
}
