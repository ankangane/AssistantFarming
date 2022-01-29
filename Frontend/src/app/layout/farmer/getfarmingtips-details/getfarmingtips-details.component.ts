import { Component, OnInit } from '@angular/core';
import { GetfarmingtipsDetailService } from 'src/app/services/getfarmingtips-detail.service';

@Component({
  selector: 'app-getfarmingtips-details',
  templateUrl: './getfarmingtips-details.component.html',
  styleUrls: ['./getfarmingtips-details.component.scss']
})
export class GetfarmingtipsDetailsComponent implements OnInit {

  constructor(public service: GetfarmingtipsDetailService) { }
  populateForm(selectedRecord: any) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  ngOnInit(): void {
    this.service.refreshList();
  }

}

