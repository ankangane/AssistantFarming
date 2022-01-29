import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsermasterService } from '../services/usermaster.service';
import { LoginVm } from '../shared/models/loginvm';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin : any;
  submitted = false;
  userpassword?:string
  username?:string;
  constructor(public usermasterService:UsermasterService,public router:Router,public dialogRef: MatDialogRef<LoginComponent>,private formBuilder: FormBuilder,public dialog: MatDialog) { }
  loginForm : FormGroup | undefined;
  ngOnInit() {
    this.userLogin = this.formBuilder.group({
 
        username: ['', [Validators.required]],//, Validators.email
        userpassword: ['', [Validators.required]]//, Validators.minLength(6)
       
    });
}
get f() { return this.userLogin.controls; }



  login()
  {

    this.submitted = true;
        if (this.userLogin.invalid) {
              return;
          }

   let loginDetails:LoginVm={email:this.username,password:this.userpassword};
    this.usermasterService.UserLogin(loginDetails).subscribe(
      (data)=>{
        localStorage.setItem("token",data.token?data.token:'')
        alert(data.token)
        console.log(data.token)
        alert(data.emailID)
        if(data.role=='FARMER')
        {
          this.router.navigate(['/farmer/farmer-operations']);
        }else if(data.role=='SUPPLIER')
        {
          this.router.navigate(['/supplier/supplier-operations']);
        }
        else
        {
          this.router.navigate(['/login']);
        }
   this.dialogRef.close();
      }
    )
    
  }
  Register(){
    this.dialogRef.close();
   
      //const dialogRef = this.dialog.open(ComposeMailComponent);
      const dialogConfig = new MatDialogConfig;
      dialogConfig.width = '60%';
      dialogConfig.height = '60%';
     
      // tslint:disable-next-line:no-unused-expression
      //dialogConfig.height = '80%';
      const dialogRef1 = this.dialog.open(SignupComponent,dialogConfig);
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
  
}
