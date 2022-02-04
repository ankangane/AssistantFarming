import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{path:'', loadChildren: () => import('./master-layout/master-layout.module').then(c => c.MasterLayoutModule)},
  //{path:'', loadChildren: () => import('./master/master.module').then(c => c.MasterModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignUpModule) },
  //{ path: '', loadChildren: MasterLayoutModule},
  
 { path: '', loadChildren: () => import('././layout/layout.module').then(m => m.LayoutModule) },
 
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
