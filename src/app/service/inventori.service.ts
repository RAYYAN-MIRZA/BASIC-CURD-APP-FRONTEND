import { Injectable } from '@angular/core';
import{HttpClient }from '@angular/common/http'
import { InventoryResponse, inventory } from '../interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoriService {

  constructor(private Http:HttpClient) { }
  baseUrl:string="https://localhost:7148/api/inventory";

  getalldata(page_num:number,pagesize:number):Observable<InventoryResponse>{
    return this.Http.get<InventoryResponse>(this.baseUrl+'/page/'+page_num+'/'+pagesize)
    .pipe(
      map((response: InventoryResponse) => response as InventoryResponse) // Map the response to your custom model
    );
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
