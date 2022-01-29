import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';
import { SignUpRoutingModule } from './signup-routing.module';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';





@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,SignUpRoutingModule,DemoMaterialModule,MatIconModule
    ,NgbModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SignUpModule { }
