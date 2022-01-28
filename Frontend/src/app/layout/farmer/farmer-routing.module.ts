import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcomplaintDetailsComponent } from './addcomplaint-details/addcomplaint-details.component';
import { AddcropDetailFormComponent } from './addcrop-details/addcrop-detail-form/addcrop-detail-form.component';
import { AddcropDetailsComponent } from './addcrop-details/addcrop-details.component';
import { ChangepasswordDetailsComponent } from './changepassword-details/changepassword-details.component';
import { FarmerComponent } from './farmer.component';
import { FarmeroperationsComponent } from './farmeroperations/farmeroperations.component';
import { GetadvertisementDetailsComponent } from './getadvertisement-details/getadvertisement-details.component';
import { GetcropDetailsComponent } from './getcrop-details/getcrop-details.component';
import { GetfarmingtipsDetailsComponent } from './getfarmingtips-details/getfarmingtips-details.component';
import { UpdateaddstatusDetailFormComponent } from './updateaddstatus-details/updateaddstatus-detail-form/updateaddstatus-detail-form.component';
import { UpdateaddstatusDetailsComponent } from './updateaddstatus-details/updateaddstatus-details.component';

const routes: Routes = [
 {
     path:'',
     component:FarmerComponent
 ,
 children:[
     { path:'farmer-operations',component:FarmeroperationsComponent},
     { path:'addcrop-details',component:AddcropDetailsComponent},
     { path:'addcrop-detail-form',component:AddcropDetailFormComponent},
     { path:'addcomplaint-details',component:AddcomplaintDetailsComponent},
     { path:'getadvertisement-details',component:GetadvertisementDetailsComponent},
     { path:'changepassword-details',component:ChangepasswordDetailsComponent},
     { path:'getcrop-details',component:GetcropDetailsComponent},
     { path:'getfarmingtips-details',component:GetfarmingtipsDetailsComponent},
     { path:'updateaddstatus-details',component:UpdateaddstatusDetailFormComponent},


 ]
     }
 ]
;
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerRoutingModule { }
