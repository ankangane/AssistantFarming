import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import * as glob from '../shared/glob'
import { AdvertisementStatus, LoggedUserVm, LoginVm } from '../shared/models/loginvm';
import { postAdvertiesmentVm } from '../shared/models/postAdvertiesmentVm';
import { AdvertiesmentFeedBack, FeedBack, SignUpVm, SupplierVm } from '../shared/models/SignUpVm';
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

export class UsermasterService {

  constructor(private http:HttpClient) { 


  }

  public UserLogin(userDetails:LoginVm):Observable<LoggedUserVm>
  {
    return this.http.post<LoggedUserVm>(glob.rootUrl+"Account/Login",userDetails)
  }

  public UserSignUp(userDetail:SignUpVm):Observable<FeedBack>
  {
    console.log(userDetail)
    return this.http.post<FeedBack>(glob.rootUrl+"Account/SignUp",userDetail)
  }

  public SupplierPostAdvertiesment(userDetail:postAdvertiesmentVm,status:AdvertisementStatus):Observable<AdvertiesmentFeedBack>
  {
    console.log(localStorage.getItem("token"))
    // let params = new HttpParams()
    // .set('advertisement', userDetail)
    // .set('status', status)
    return this.http.post<AdvertiesmentFeedBack>(glob.rootUrl+"Supplier/addAdvertisement?status="+status,userDetail,httpOptions) 
  }

  


}

