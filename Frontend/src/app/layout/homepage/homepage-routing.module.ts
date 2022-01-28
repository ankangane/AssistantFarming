import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageOperationsComponent } from './homepage-operations/homepage-operations.component';
import { HomepageComponent } from './homepage.component';


const routes: Routes = [
 {
     path:'',
     component:HomepageComponent
 ,
 children:[
     { path:'home-operations',component:HomepageOperationsComponent}
 ]
     }
 ]
;
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
