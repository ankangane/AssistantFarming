import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsermasterService } from '../services/usermaster.service';
import { SignUpVm } from '../shared/models/SignUpVm';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userSignUp : any;
  Role?:string;
    Id?:number;
    Name?:string;
    Email?:string;
    securityQuestion?:string;
    securityAnswer?:string;
    Address?:string;
    ContanctNo?:string;
    password?:string;
    submitted = false;

  constructor(public usermasterService:UsermasterService,public router:Router,private formBuilder: FormBuilder,public dialogRef: MatDialogRef<SignupComponent>) { }
  signUpform : FormGroup | undefined
  ngOnInit(): void {
    this.userSignUp = this.formBuilder.group({
 
      Name: ['', [Validators.required]],//, Validators.email
      Email: ['', [Validators.required]],//, Validators.minLength(6)
      Role: ['', [Validators.required]],
      securityQuestion: ['', [Validators.required]],
      securityAnswer: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      ContanctNo: ['', [Validators.required]],
      password: ['',[Validators.required,Validators.minLength(4)]],

     
  });
  }

  get f() { return this.userSignUp.controls; }

  SignUp(){

    this.submitted = true;
        if (this.userSignUp.invalid) {
              return;
          }

  let SignUpDetails:SignUpVm={role:this.Role,
    name:this.Name,
    email:this.Email,
    securityQuestion:this.securityQuestion,
    securityAnswer:this.securityAnswer,
    address:this.Address,
    contanctNo:this.ContanctNo,
    password:this.password
  };
  console.log(SignUpDetails)
  this.usermasterService.UserSignUp(SignUpDetails).subscribe(
    (data)=>{
      debugger
      alert(data)
      console.log(data)
      alert(data)
        this.router.navigate(['/home/home-operations']);
 this.dialogRef.close();
    }
  )
  
  }
}
