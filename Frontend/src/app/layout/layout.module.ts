import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MatIconModule } from '@angular/material/icon';
import { DemoMaterialModule } from '../demo-material-module';
import { FarmeroperationsComponent } from './farmer/farmeroperations/farmeroperations.component';
import { FarmerComponent } from './farmer/farmer.component';
import { AboutComponent } from './about/about.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplieroperationComponent } from './supplier/supplieroperation/supplieroperation.component';
import { AdminComponent } from './admin/admin.component';
import { AdminoperationsComponent } from './admin/adminoperations/adminoperations.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { MatCard, MatCardModule } from '@angular/material/card';






@NgModule({
  imports: [
    CommonModule,LayoutRoutingModule,DemoMaterialModule,ReactiveFormsModule,
    
  ],
  declarations: [LayoutComponent,HeaderComponent,FooterComponent, AboutComponent],
  entryComponents:[LoginComponent,SignupComponent]
  
})
export class LayoutModule { }
