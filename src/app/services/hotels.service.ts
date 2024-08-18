import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Hotel } from "../models/Hotel";

@Injectable({
  providedIn: 'root'
})
export class HotelsService
{
  constructor(private httpClient: HttpClient) { }

  getHotels(): Observable<Hotel[]>
  {
    debugger;
    return this.httpClient.get<Hotel[]>(`http://localhost:30487/api/Hotel`);
  }
}
