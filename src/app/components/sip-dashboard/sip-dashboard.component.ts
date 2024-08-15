import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  location:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',location:'hyd'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',location:'hyd'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',location:'hyd'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',location:'hyd'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',location:'hyd'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',location:'hyd'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',location:'hyd'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',location:'hyd'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',location:'hyd'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',location:'hyd'},
];
@Component({
  selector: 'app-sip-dashboard',
  templateUrl: './sip-dashboard.component.html',
  styleUrls: ['./sip-dashboard.component.css']
})
export class SipDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //in typescript stringarray we can create like this
  //variablename :datatype[] =['feilds','feilds']
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','location'];
  dataSource = ELEMENT_DATA;
  debugger;
}
