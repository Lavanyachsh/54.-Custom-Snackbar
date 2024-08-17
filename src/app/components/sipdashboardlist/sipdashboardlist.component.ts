import { Component, OnInit } from '@angular/core';
import { SipdashboardService } from 'src/app/services/sipdashboard.service';
import {PeriodicElementModel} from 'src/app/models/PeriodicElementModel'
@Component({
  selector: 'app-sipdashboardlist',
  templateUrl: './sipdashboardlist.component.html',
  styleUrls: ['./sipdashboardlist.component.css']
})
export class SipdashboardlistComponent implements OnInit {

  constructor(private sipservices:SipdashboardService) { }
  // ELEMENT_DATA:PeriodicElementModel[]=[];
  ELEMENT_DATA:any[]=[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','location'];
 // dataSource = ELEMENT_DATA;
 dataSource:any[];
  ngOnInit(): void
   {
    debugger;
    this.sipservices.getsipdashboard().subscribe(
      (response) =>
      {
        this.ELEMENT_DATA = response;
       this.dataSource  = this.ELEMENT_DATA;
debugger;
      },
      (error) =>
      {
        console.log(error);
      });
  }


}
