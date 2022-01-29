import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmeroperations',
  templateUrl: './farmeroperations.component.html',
  styleUrls: ['./farmeroperations.component.scss']
})
export class FarmeroperationsComponent implements OnInit {
  imageSrc = '../assets/images/Farming/Farmer_19_1.jpg'  
  imageSrc1 = '../assets/images/Farming/Farmer_19_4.jpg'  
  imageSrc2 = '../assets/images/Farming/Farmer_19_5.jpg'
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  
  onClick(){
    // this.router.navigate(["supplier/advertiesment"])
     this.router.navigate(['/farmer/addcrop-details']);
     }
    
     onClickComplaint(){
       this.router.navigate(['/farmer/addcomplaint-details'])
     } 

     onClickGetComplaint(){
       this.router.navigate(['/farmer/getadvertisement-details'])
     } 

     onClickChangePassword(){
       this.router.navigate(['/farmer/changepassword-details'])
     }
     onClickGetCrop(){
       this.router.navigate(['/farmer/getcrop-details'])
     }

     onClickFarmingTips(){
       this.router.navigate(['/farmer/getfarmingtips-details'])
     }
}
