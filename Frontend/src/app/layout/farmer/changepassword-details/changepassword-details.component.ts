import { Component, OnInit } from '@angular/core';
import { ChangepasswordDetailService } from 'src/app/services/changepassword-detail.service';

@Component({
  selector: 'app-changepassword-details',
  templateUrl: './changepassword-details.component.html',
  styleUrls: ['./changepassword-details.component.scss']
})
export class ChangepasswordDetailsComponent implements OnInit {

  constructor(public service: ChangepasswordDetailService) { }

  ngOnInit(): void {
   /* this.service.refreshList();*/
  }
  populateForm(selectedRecord: any) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
}
