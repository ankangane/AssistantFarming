import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChangepasswordDetailService } from 'src/app/services/changepassword-detail.service';
import { ChangepasswordDetail } from 'src/app/shared/models/ChangepasswordDetailVm';

@Component({
  selector: 'app-changepassword-detail-form',
  templateUrl: './changepassword-detail-form.component.html',
  styleUrls: ['./changepassword-detail-form.component.scss']
})
export class ChangepasswordDetailFormComponent implements OnInit {

  constructor(public service: ChangepasswordDetailService
    ) { }

  ngOnInit(): void {
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new ChangepasswordDetail();
  }
  onSubmit(form: NgForm) {
    if (this.service.formData.farmerEmail == null)
    this.insertRecord(form);
   
  else
    this.updateRecord(form);
  }
  updateRecord(form: NgForm) {
    this.service.postChangePasswordDetail().subscribe(
      res => {
        console.log(res.Message)
        this.resetForm(form);
      
      },
      err => {
        console.log(err);
      }
    )
  }
  insertRecord(form: NgForm) {
    this.service.postChangePasswordDetail().subscribe(
      res => {
        this.resetForm(form);
      /*  this.toastr.success('Submit Succesfully');*/
        /*this.service.refreshList();*/
      },
      err => { console.log(err); }
    )
  }
  
}
