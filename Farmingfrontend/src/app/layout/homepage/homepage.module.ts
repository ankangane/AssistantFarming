import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { HomepageOperationsComponent } from './homepage-operations/homepage-operations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { LayoutComponent } from '../layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [HomepageComponent,HomepageOperationsComponent],
  imports: [
    CommonModule,HomePageRoutingModule,FormsModule,ReactiveFormsModule,DemoMaterialModule,NgbModule
  ]
})
export class HomePageModule { }
