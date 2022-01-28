import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './supplier.component';
import { SupplieroperationComponent } from './supplieroperation/supplieroperation.component';
import { SupplierRoutingModule } from './supplier-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdvertiesmentComponent } from './advertiesment/advertiesment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetcropsComponent } from './getcrops/getcrops.component';
import { GetcropsFormComponent } from './getcrops/getcrops-form/getcrops-form.component';



@NgModule({
  declarations: [SupplierComponent,SupplieroperationComponent, AdvertiesmentComponent, GetcropsComponent, GetcropsFormComponent],
  imports: [
    CommonModule,SupplierRoutingModule,NgbModule,FormsModule,ReactiveFormsModule
  ]
})
export class SupplierModule { }
