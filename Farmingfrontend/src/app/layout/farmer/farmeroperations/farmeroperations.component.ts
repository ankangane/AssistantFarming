import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmeroperations',
  templateUrl: './farmeroperations.component.html',
  styleUrls: ['./farmeroperations.component.scss']
})
export class FarmeroperationsComponent implements OnInit {
  imageSrc = '../assets/images/Farming/Farm2.jpg'  
  imageSrc1 = '../assets/images/Farming/Farm4.jpg'  
  imageSrc2 = '../assets/images/Farming/imagesFarm.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
