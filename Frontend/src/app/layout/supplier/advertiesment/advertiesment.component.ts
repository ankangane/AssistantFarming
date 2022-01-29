import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsermasterService } from 'src/app/services/usermaster.service';
import { AdvertisementStatus } from 'src/app/shared/models/loginvm';
import { postAdvertiesmentVm } from 'src/app/shared/models/postAdvertiesmentVm';

@Component({
  selector: 'app-advertiesment',
  templateUrl: './advertiesment.component.html',
  styleUrls: ['./advertiesment.component.scss']
})
export class AdvertiesmentComponent implements OnInit {
  postAdvertiesment : any;
  advertisementMessage?:string;
  advertisementStatus?:string;
  status?:number;
   
    submitted = false;
  constructor(public usermasterService:UsermasterService,public router:Router,private formBuilder: FormBuilder) { }
  advertiesmentform : FormGroup | undefined
  ngOnInit(): void {
    this.postAdvertiesment = this.formBuilder.group({
 
      advertisementMessage: ['', [Validators.required]],//, Validators.email
      advertisementStatus: ['', [Validators.required]],//, Validators.minLength(6)
     

     
  });
  }

  get f() { return this.postAdvertiesment.controls; }

  PostAdd(){

    this.submitted = true;
        if (this.postAdvertiesment.invalid) {
              return;
          }

          let AdvertiesmentDetails:postAdvertiesmentVm={
            advertisementMessage:this.advertisementMessage,
            advertisementStatus:this.advertisementStatus,
        
        };
        let status:AdvertisementStatus=0
        console.log(AdvertiesmentDetails)
        this.usermasterService.SupplierPostAdvertiesment(AdvertiesmentDetails,status).subscribe(
          (data)=>{
            debugger
            alert(data.message)
            console.log(data.message)
            
              this.router.navigate(['/supplier/supplier-operations']);
       //this.dialogRef.close();
          }
        )
        
        }


}
