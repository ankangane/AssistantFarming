import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GetadvertiesmentDetailService } from 'src/app/services/getadvertiesment-detail.service';
import { UpdateaddstatusDetailFormComponent } from '../updateaddstatus-details/updateaddstatus-detail-form/updateaddstatus-detail-form.component';

@Component({
  selector: 'app-getadvertisement-details',
  templateUrl: './getadvertisement-details.component.html',
  styleUrls: ['./getadvertisement-details.component.scss']
})
export class GetadvertisementDetailsComponent implements OnInit {

  constructor(public service: GetadvertiesmentDetailService,private router : Router,public dialog: MatDialog) { }
  populateForm(selectedRecord: any) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  ngOnInit(): void {
    this.service.refreshList();

  }
  onClickChangeStatus(){
    this.router.navigate(['/farmer/updateaddstatus-details']);
  }
  updateStatusDialog(addId:number) {
    //const dialogRef = this.dialog.open(ComposeMailComponent);
    const dialogConfig = new MatDialogConfig;
    dialogConfig.width = '60%';
    dialogConfig.height = '60%';
   
    // tslint:disable-next-line:no-unused-expression
    //dialogConfig.height = '80%';
    const dialogRef = this.dialog.open(UpdateaddstatusDetailFormComponent,dialogConfig);
     dialogRef.componentInstance.addId=addId;
    
  }

}
