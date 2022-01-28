import { Component, OnInit } from '@angular/core';
import { DeletecropDetailService } from 'src/app/services/deletecrop-detail.service';
import { DeletecropDetail } from 'src/app/shared/models/deletecrop-detailVm';

@Component({
  selector: 'app-deletecrop-details',
  templateUrl: './deletecrop-details.component.html',
  styleUrls: ['./deletecrop-details.component.scss']
})
export class DeletecropDetailsComponent implements OnInit {

  constructor(public service:DeletecropDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord: DeletecropDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
}
  onDelete(Id: number) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteDeletecropDetail(Id)
        .subscribe(res => {
          this.service.refreshList();
        },
        err => { console.log(err); })
    }
  }
 
}
