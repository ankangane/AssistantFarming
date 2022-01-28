import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmeroperationsComponent } from './farmeroperations/farmeroperations.component';
import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerComponent } from './farmer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddcropDetailsComponent } from './addcrop-details/addcrop-details.component';
import { AddcropDetailFormComponent } from './addcrop-details/addcrop-detail-form/addcrop-detail-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddcomplaintDetailsComponent } from './addcomplaint-details/addcomplaint-details.component';
import { AddcomplaintDetailFormComponent } from './addcomplaint-details/addcomplaint-detail-form/addcomplaint-detail-form.component';
import { GetadvertisementDetailsComponent } from './getadvertisement-details/getadvertisement-details.component';
import { GetadvertisementDetailFormComponent } from './getadvertisement-details/getadvertisement-detail-form/getadvertisement-detail-form.component';
import { ChangepasswordDetailsComponent } from './changepassword-details/changepassword-details.component';
import { ChangepasswordDetailFormComponent } from './changepassword-details/changepassword-detail-form/changepassword-detail-form.component';
import { GetcropDetailsComponent } from './getcrop-details/getcrop-details.component';
import { GetcropDetailFormComponent } from './getcrop-details/getcrop-detail-form/getcrop-detail-form.component';
import { DeletecropDetailsComponent } from './deletecrop-details/deletecrop-details.component';
import { DeletecropDetailFormComponent } from './deletecrop-details/deletecrop-detail-form/deletecrop-detail-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { GetfarmingtipsDetailsComponent } from './getfarmingtips-details/getfarmingtips-details.component';
import { GetfarmingtipsDetailFormComponent } from './getfarmingtips-details/getfarmingtips-detail-form/getfarmingtips-detail-form.component';
import { MatTableModule } from '@angular/material/table';
import { UpdateaddstatusDetailsComponent } from './updateaddstatus-details/updateaddstatus-details.component';
import { UpdateaddstatusDetailFormComponent } from './updateaddstatus-details/updateaddstatus-detail-form/updateaddstatus-detail-form.component';




@NgModule({
  declarations: [FarmerComponent,FarmeroperationsComponent, AddcropDetailsComponent, AddcropDetailFormComponent, AddcomplaintDetailsComponent, AddcomplaintDetailFormComponent, GetadvertisementDetailsComponent, GetadvertisementDetailFormComponent, ChangepasswordDetailsComponent, ChangepasswordDetailFormComponent, GetcropDetailsComponent, GetcropDetailFormComponent, DeletecropDetailsComponent, DeletecropDetailFormComponent, GetfarmingtipsDetailsComponent, GetfarmingtipsDetailFormComponent, UpdateaddstatusDetailsComponent, UpdateaddstatusDetailFormComponent],
  imports: [
    CommonModule,FarmerRoutingModule,NgbModule,ReactiveFormsModule,FormsModule,MatIconModule,MatTableModule
  ]
})
export class FarmerModule { }
