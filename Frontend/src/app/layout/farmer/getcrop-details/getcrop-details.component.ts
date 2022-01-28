import { Component, OnInit } from '@angular/core';
import { window } from 'rxjs';
import { DeletecropDetailService } from 'src/app/services/deletecrop-detail.service';
import { GetcropDetailService } from 'src/app/services/getcrop-detail.service';
import { DeletecropDetail } from 'src/app/shared/models/deletecrop-detailVm';

@Component({
  selector: 'app-getcrop-details',
  templateUrl: './getcrop-details.component.html',
  styleUrls: ['./getcrop-details.component.scss']
})
export class GetcropDetailsComponent implements OnInit {

  constructor(public service: GetcropDetailService,public deleteCropService:DeletecropDetailService) { }
  populateForm(selectedRecord: any) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  ngOnInit(): void {
    this.service.refreshList();
  }  
  DeleteCrop(selectedRecord: DeletecropDetail) {
    this.deleteCropService.formData = Object.assign({}, selectedRecord);
  }
  onDelete(Id:string) {
    if (confirm('Are you sure to delete this record ?')) {
      var id=+Id
      this.deleteCropService.deleteDeletecropDetail(id).subscribe(res=>{
        this.deleteCropService.refreshList();
        console.log(res.Message);
      })
       
    }
    
  }

}
