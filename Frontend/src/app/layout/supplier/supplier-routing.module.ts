import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertiesmentComponent } from './advertiesment/advertiesment.component';

import { SupplierComponent } from './supplier.component';
import { SupplieroperationComponent } from './supplieroperation/supplieroperation.component';

const routes: Routes = [
 {
     path:'',
     component:SupplierComponent
 ,
 children:[
     { path:'supplier-operations',component:SupplieroperationComponent},
     {path:'advertiesment',component:AdvertiesmentComponent}
 ]
     }
 ]
;
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
