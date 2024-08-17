import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SipdashboardService {

  constructor(private httpClient: HttpClient) 
  {
    
   }
   getsipdashboard(): Observable<any[]>
   {
    debugger;
    return this.httpClient.get<any[]>(`http://localhost:57046/api/Sip_Dashboard`);
   }
}
