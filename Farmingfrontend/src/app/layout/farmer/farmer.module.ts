import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmeroperationsComponent } from './farmeroperations/farmeroperations.component';
import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerComponent } from './farmer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [FarmerComponent,FarmeroperationsComponent],
  imports: [
    CommonModule,FarmerRoutingModule,NgbModule
  ]
})
export class FarmerModule { }
