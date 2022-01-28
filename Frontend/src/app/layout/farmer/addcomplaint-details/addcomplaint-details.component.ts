import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AddcomplaintDetailService } from 'src/app/services/addcomplaint-detail.service';
import { AddcomplaintDetail } from 'src/app/shared/models/AddcomplaintDetailVm';

@Component({
  selector: 'app-addcomplaint-details',
  templateUrl: './addcomplaint-details.component.html',
  styleUrls: ['./addcomplaint-details.component.scss']
})
export class AddcomplaintDetailsComponent implements OnInit {

  constructor(public service:AddcomplaintDetailService) { }
  displayedColumns = ['complaintId', 'complaintMessage', 'complaintStatus'];
  ngOnInit(): void {
   this.service.refreshList();
   //this.service.refreshList();
  
  }
  populateForm(selectedRecord: any) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
}
