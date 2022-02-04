import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../demo-material-module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,LoginRoutingModule,FormsModule,ReactiveFormsModule,DemoMaterialModule
  ]
})
export class LoginModule { }
