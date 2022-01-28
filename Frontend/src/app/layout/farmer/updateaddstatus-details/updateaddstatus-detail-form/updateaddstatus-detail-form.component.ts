import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UpdateaddstatusDetailService } from 'src/app/services/updateaddstatus-detail.service';
import { UpdateaddstatusDetail } from 'src/app/shared/models/updateaddstatus-detailVm';

@Component({
  selector: 'app-updateaddstatus-detail-form',
  templateUrl: './updateaddstatus-detail-form.component.html',
  styleUrls: ['./updateaddstatus-detail-form.component.scss']
})
export class UpdateaddstatusDetailFormComponent implements OnInit {
  addId:number=0;
  constructor(public service:UpdateaddstatusDetailService) { }

  ngOnInit(): void {
    alert(this.addId)
    this.service.formData.advertisementId=this.addId;
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new UpdateaddstatusDetail();
  }
  onSubmit(form: NgForm) {
    if (this.service.formData.advertisementId == null)
    this.insertRecord(form);
   
  else
    this.updateRecord(form);
  }
  updateRecord(form: NgForm) {
    this.service.putUpdatestatus().subscribe(
      res => {
        this.resetForm(form);
      
      },
      // err => {
      //   console.log(err);
      // }
    )
  }
  insertRecord(form: NgForm) {
    this.service.postUpdatestatus().subscribe(
      res => {
        this.resetForm(form);
      /*  this.toastr.success('Submit Succesfully');*/
        /*this.service.refreshList();*/
      },
   //   err => { console.log(err); }
    )
  }

}

