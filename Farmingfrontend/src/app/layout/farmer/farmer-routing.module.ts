import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmerComponent } from './farmer.component';
import { FarmeroperationsComponent } from './farmeroperations/farmeroperations.component';

const routes: Routes = [
 {
     path:'',
     component:FarmerComponent
 ,
 children:[
     { path:'farmer-operations',component:FarmeroperationsComponent}
 ]
     }
 ]
;
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerRoutingModule { }
