import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminoperations',
  templateUrl: './adminoperations.component.html',
  styleUrls: ['./adminoperations.component.scss']
})
export class AdminoperationsComponent implements OnInit {
  imageSrc2 = '../assets/images/Farming/images_00.jpg'  
  imageSrc1 = '../assets/images/Farming/images__Inve.jpg'  
  imageSrc = '../assets/images/Farming/FA_111.jpg'  
  constructor() { }

  ngOnInit(): void {
  }

}
