import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-operations',
  templateUrl: './homepage-operations.component.html',
  styleUrls: ['./homepage-operations.component.scss']
})
export class HomepageOperationsComponent implements OnInit {
  imageSrc = '../assets/images/Farming/Farm2.jpg'  
  imageSrc1 = '../assets/images/Farming/Farm4.jpg'  
  imageSrc2 = '../assets/images/Farming/imagesFarm.jpg'  
  constructor() { }

  ngOnInit(): void {
  }

}
