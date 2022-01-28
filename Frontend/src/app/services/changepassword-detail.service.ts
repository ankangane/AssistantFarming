import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as glob from '../shared/glob'
import { ChangepasswordDetail } from '../shared/models/ChangepasswordDetailVm';
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
export class ChangepasswordDetailService {

  formData: ChangepasswordDetail= new ChangepasswordDetail();
  readonly baseURL = glob.rootUrl+'Farmer/changePassword';
  list : ChangepasswordDetail[] | undefined;
  constructor(private http: HttpClient) { }

  postChangePasswordDetail(): Observable<FeedBack> {
    return this.http.post<FeedBack>(`${this.baseURL}?Email=${this.formData.farmerEmail}`, this.formData,httpOptions);
  }
}