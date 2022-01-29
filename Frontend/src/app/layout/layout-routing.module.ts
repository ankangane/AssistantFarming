import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminModule } from './admin/admin.module';
import { FarmerModule } from './farmer/farmer.module';
import { HomePageModule } from './homepage/homepage.module';
import { LayoutComponent } from './layout.component';
import { SupplierModule } from './supplier/supplier.module';

const routes: Routes = [
 {
     path:'',
     component:LayoutComponent,
     children:
    [ {path:'', redirectTo:'home/home-operations'},
  {path:'home', loadChildren: ()=>HomePageModule},
  {path:'farmer', loadChildren: ()=>FarmerModule},
  {path:'supplier', loadChildren: ()=>SupplierModule},
  {path:'admin', loadChildren: ()=>AdminModule},
  {path:'about', component: AboutComponent}],
  
     }
 ]
;
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
