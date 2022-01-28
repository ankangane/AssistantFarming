import { Component, OnInit ,ElementRef} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { LoginComponent } from 'src/app/login/login.component';
import { SignupComponent } from 'src/app/signup/signup.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openReviewDialog() {
    //const dialogRef = this.dialog.open(ComposeMailComponent);
    const dialogConfig = new MatDialogConfig;
    dialogConfig.width = '60%';
    dialogConfig.height = '60%';
   
    // tslint:disable-next-line:no-unused-expression
    //dialogConfig.height = '80%';
    const dialogRef = this.dialog.open(LoginComponent,dialogConfig);
    // dialogRef.componentInstance.headerId=this.headerIdToEdit;
    // dialogRef.componentInstance.journalId=this.journalIdToEdit;
    // dialogRef.componentInstance.pDNameID=+this.editorialDirectorID;
    // dialogRef.afterClosed().subscribe(result => {
    //   if(result === 6){
             
    //   }
    //   else if(result === 5){
    //     this.router.navigate(['/journal-development/report-maker-users-dashboard']);
    //   }
    // });
  }

  openReviewDialog1() {
    
    const dialogConfig = new MatDialogConfig;
    dialogConfig.width = '60%';
    dialogConfig.height = '90%';
   
   
    const dialogRef = this.dialog.open(SignupComponent,dialogConfig);

  }

}
