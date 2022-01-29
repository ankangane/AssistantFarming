import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddcomplaintDetailService } from 'src/app/services/addcomplaint-detail.service';
import { AddcomplaintDetail } from 'src/app/shared/models/AddcomplaintDetailVm';

@Component({
  selector: 'app-addcomplaint-detail-form',
  templateUrl: './addcomplaint-detail-form.component.html',
  styleUrls: ['./addcomplaint-detail-form.component.scss']
})
export class AddcomplaintDetailFormComponent implements OnInit {

  constructor(public service:AddcomplaintDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new AddcomplaintDetail ();
  }
  onSubmit(form: NgForm) {
    if (this.service.formData.complaintsId == null)
    {
    this.insertRecord(form);

    this.service.refreshList();
    this.resetForm
  }
  else
  {
    this.updateRecord(form);
    this.service.refreshList();
    this.resetForm
  }
  }
  updateRecord(form: NgForm) {
    this.service.postAddCompliantDetail().subscribe(
      res => {
        debugger
        alert(res.message);
        this.service.refreshList();
        this.resetForm(form);
      
      },
      
    )
  }
  insertRecord(form: NgForm) {
    this.service.postAddCompliantDetail().subscribe(
      res => {
        debugger
        alert(res.message);
        this.resetForm(form);
   
       this.service.refreshList();
      },
      
    )
  }
}

