import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddcropDetailService } from 'src/app/services/addcrop-detail.service';

import { AddcropDetail } from 'src/app/shared/models/addcrop-detailVm';
import { FeedBack } from 'src/app/shared/models/SignUpVm';

@Component({
  selector: 'app-addcrop-detail-form',
  templateUrl: './addcrop-detail-form.component.html',
  styleUrls: ['./addcrop-detail-form.component.scss']
})
export class AddcropDetailFormComponent implements OnInit {

  constructor(public service:AddcropDetailService) { }

  ngOnInit(): void {
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new AddcropDetail();
    debugger;
  }
  onSubmit(form: NgForm) {
    debugger
    if (this.service.formData.cropId == null)
    this.insertRecord(form);
  else
    this.updateRecord(form);
  }
  updateRecord(form: NgForm) {
    this.service.postAddcropDetailsDetail().subscribe(
      res => {
        this.resetForm(form);
      debugger;
      },
      err => {
        console.log(err);
      }
    )
  }
  insertRecord(form: NgForm) {
     this.service.postAddcropDetailsDetail().subscribe(data=>{
       debugger
       console.log(data.message)
       alert(data.message);
       this.resetForm(form);
     })
    //.subscribe(
    //   res => {
    //     this.resetForm(form);
    //     debugger;
    //     console.log(res.Message);
    //   /*  this.toastr.success('Submit Succesfully');*/
    //     /*this.service.refreshList();*/
    //   },
    //   err => { console.log(err); }
    // )
  }

}
