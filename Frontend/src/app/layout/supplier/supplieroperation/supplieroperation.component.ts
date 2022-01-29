import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertiesmentComponent } from '../advertiesment/advertiesment.component';

@Component({
  selector: 'app-supplieroperation',
  templateUrl: './supplieroperation.component.html',
  styleUrls: ['./supplieroperation.component.scss']
})
export class SupplieroperationComponent implements OnInit {
  imageSrc = '../assets/images/Farming/Farm2.jpg'  
  imageSrc1 = '../assets/images/Farming/Farm4.jpg'  
  imageSrc2 = '../assets/images/Farming/imagesFarm.jpg' 
  constructor( private  router : Router ) { }

  ngOnInit(): void {
  }

  onClick(){
   // this.router.navigate(["supplier/advertiesment"])
    this.router.navigate(['/supplier/advertiesment']);
    }
}
