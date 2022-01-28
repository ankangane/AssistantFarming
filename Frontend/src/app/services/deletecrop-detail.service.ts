import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeletecropDetail } from '../shared/models/deletecrop-detailVm';
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
export class DeletecropDetailService {
  formData: DeletecropDetail = new DeletecropDetail();
  readonly baseURL = glob.rootUrl+'Farmer/deleteCropDetails';
  list: DeletecropDetail[] | undefined;
  constructor(private http: HttpClient) { }
  postDeletecropDetail() {
    return this.http.post(this.baseURL, this.formData,httpOptions);
  }
  putDeletecropDetail() {
    return this.http.put(`${glob.rootUrl+'Farmer/getCropsDetails'}/${this.formData.cropId}`, this.formData);
  }
  deleteDeletecropDetail(id: number):Observable<FeedBack> {
    return this.http.delete<FeedBack>(`${this.baseURL}/${id}`,httpOptions);
  }

  refreshList() {
    this.http.get(glob.rootUrl+'Farmer/getCropsDetails',httpOptions)
      .toPromise()
      .then(res => this.list = res as DeletecropDetail[]);
  }
}
