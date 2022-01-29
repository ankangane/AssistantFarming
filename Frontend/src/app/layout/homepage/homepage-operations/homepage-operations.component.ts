import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-operations',
  templateUrl: './homepage-operations.component.html',
  styleUrls: ['./homepage-operations.component.scss']
})
export class HomepageOperationsComponent implements OnInit {
  imageSrc = '../assets/images/Farming/istockphoto-12.jpg'  
  imageSrc1 = '../assets/images/Farming/istockphoto_fruitsjpg.jpg'  
  imageSrc2 = '../assets/images/Farming/onion.jpg'  
  constructor() { }

  ngOnInit(): void {
  }

}
