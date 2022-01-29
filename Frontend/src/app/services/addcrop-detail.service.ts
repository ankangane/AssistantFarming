import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddcropDetail } from '../shared/models/addcrop-detailVm';
import * as glob from '../shared/glob'
import { Observable } from 'rxjs';
import { AdvertiesmentFeedBack, FeedBack } from '../shared/models/SignUpVm';
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
export class AddcropDetailService {

  formData: AddcropDetail= new AddcropDetail();
  readonly baseURL = glob.rootUrl+'farmer/addcropdetails';
  list : AddcropDetail[] | undefined;
  constructor(private http: HttpClient) { }

  postAddcropDetailsDetail():Observable<AdvertiesmentFeedBack> {
    return this.http.post<AdvertiesmentFeedBack>(`${this.baseURL}?status=${this.formData.cropStatus}`, this.formData,httpOptions);
  }
 
}
