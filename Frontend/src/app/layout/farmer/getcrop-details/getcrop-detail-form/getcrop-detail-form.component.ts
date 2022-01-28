import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetcropDetailService } from 'src/app/services/getcrop-detail.service';
import { GetcropDetail } from 'src/app/shared/models/getcrop-detailVm';

@Component({
  selector: 'app-getcrop-detail-form',
  templateUrl: './getcrop-detail-form.component.html',
  styleUrls: ['./getcrop-detail-form.component.scss']
})
export class GetcropDetailFormComponent implements OnInit {

  constructor(public service: GetcropDetailService) { }

  ngOnInit(): void {
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new GetcropDetail();
  }
}