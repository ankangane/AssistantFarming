import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminoperationsComponent } from './adminoperations/adminoperations.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AdminComponent,AdminoperationsComponent],
  imports: [
    CommonModule,AdminRoutingModule,FormsModule,ReactiveFormsModule,DemoMaterialModule,NgbModule
  ]
})
export class AdminModule { }
