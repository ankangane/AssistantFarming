import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsermasterService } from '../services/usermaster.service';
import { LoginVm } from '../shared/models/loginvm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public usermasterService:UsermasterService,public router:Router,public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }


  login()
  {
  let loginDetails:LoginVm={email:"prajaktaw@gmail.com",password:"Prajakta@123"};
   this.usermasterService.UserLogin(loginDetails).subscribe(
     (data)=>{
         console.log(data)
         alert(data.emailID)
       }
    )
   //this.router.navigate(['/farmer/farmer-operations']);
   //this.dialogRef.close();
  }
}
