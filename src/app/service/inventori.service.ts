import { Injectable } from '@angular/core';
import{HttpClient }from '@angular/common/http'
import { inventory } from '../interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InventoriService {

  constructor(private Http:HttpClient) { }
  baseUrl:string="https://localhost:7148/api/inventory";

  getalldata():Observable<inventory[]>{
    return this.Http.get<inventory[]>(this.baseUrl);
  }
  add_data(obj:inventory):Observable<inventory>{
    return this.Http.post<inventory>(this.baseUrl+'/add',obj);
  }
  edit_data(obj:inventory):Observable<inventory>{
    return this.Http.put<inventory>(this.baseUrl+'/update',obj);
  }
  delete(id:string):Observable<number>{
    return this.Http.delete<number>(this.baseUrl+'/delete/'+id);
  }

}
