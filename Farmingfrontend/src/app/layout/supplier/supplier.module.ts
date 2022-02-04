import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './supplier.component';
import { SupplieroperationComponent } from './supplieroperation/supplieroperation.component';
import { SupplierRoutingModule } from './supplier-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [SupplierComponent,SupplieroperationComponent],
  imports: [
    CommonModule,SupplierRoutingModule,NgbModule
  ]
})
export class SupplierModule { }
