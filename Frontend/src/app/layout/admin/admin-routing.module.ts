import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminoperationsComponent } from './adminoperations/adminoperations.component';



const routes: Routes = [
 {
     path:'',
     component:AdminComponent
 ,
 children:[
     { path:'admin-operations',component:AdminoperationsComponent}
 ]
     }
 ]
;
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
