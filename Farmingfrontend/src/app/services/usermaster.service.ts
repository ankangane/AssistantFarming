import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as glob from '../shared/glob'
import { LoggedUserVm, LoginVm } from '../shared/models/loginvm';
@Injectable({
  providedIn: 'root'
})
export class UsermasterService {

  constructor(private http:HttpClient) { 


  }

  public UserLogin(userDetails:LoginVm):Observable<LoggedUserVm>
  {
    return this.http.post<LoggedUserVm>(glob.rootUrl+"AccountLogin/adminLogin",userDetails)
  }
}
