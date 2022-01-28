import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetadvertiesmentDetailService } from 'src/app/services/getadvertiesment-detail.service';
import { GetadvertisementDetail } from 'src/app/shared/models/getadvertisement-detailVm';

@Component({
  selector: 'app-getadvertisement-detail-form',
  templateUrl: './getadvertisement-detail-form.component.html',
  styleUrls: ['./getadvertisement-detail-form.component.scss']
})
export class GetadvertisementDetailFormComponent implements OnInit {

  constructor(public service: GetadvertiesmentDetailService) { }

  ngOnInit(): void {
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new GetadvertisementDetail();
  }

}
