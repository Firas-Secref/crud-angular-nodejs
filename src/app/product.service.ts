import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getallProducts():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8085/products')
  }

  newProduct(product: any): Observable<any>{
    return this.http.post('http://localhost:8085/newProduct', product)
  }

  deleteProduct(id: string): Observable<any>{
    return this.http.delete<any>('http://localhost:8085/products/'+id);
  }

  updateProduct(id: string, newProduct: any): Observable<any>{
    return this.http.put<any>('http://localhost:8085/products/'+id,newProduct)
  }

  getOneProduct(id: number): Observable<any>{
    return this.http.get<any>('http://localhost:8085/products/'+id)
  }
}
