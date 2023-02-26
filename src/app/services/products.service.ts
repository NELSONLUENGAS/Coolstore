import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ICreateProduct, IProduct, IUpdateProduct } from '../models/IProduct';
import { checkTime } from '../interceptors/time.interceptor';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api'

  constructor(
    private http: HttpClient
  ) { }

  GetByCategory(id: string, limit?: number, offset?: number ){
    let params = new HttpParams()
    if(limit && offset) {
      params = params.set('limit', limit)
      params = params.set('offset', offset)
    }
    return this.http.get<Array<IProduct>>(`${this.apiUrl}/categories/${id}/products`, {params})
  }
  
  GetAllProducts(limit?: number, offset?: number): Observable<Array<IProduct>> {
    // return this.http.get<Array<IProduct>>('https://fakestoreapi.com/products')
    let params = new HttpParams()
    if(limit && offset) {
      params = params.set('limit', limit)
      params = params.set('offset', offset)
    }
    return this.http.get<Array<IProduct>>(`${this.apiUrl}/products`, {params, context: checkTime()}).pipe(
      retry(3),
      map((products) => {
        return products.map( (item: any) => {
          return {
            ...item,
            taxes: .19 * item.price
          }
        })
      })
    )
  }

  GetProduct(id: string ): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiUrl}/products/${id}`)
  }

  Create(data: ICreateProduct) {
    return this.http.post<IProduct>(`${this.apiUrl}/products`, data)
  }

  Update(id: string, data: IUpdateProduct) {
    return this.http.put<IProduct>(`${this.apiUrl}/products/${id}`, data)
  }

  Delete(id: string ) {
    return this.http.delete<boolean>(`${this.apiUrl}/products/${id}`)
  }

  GetProductsByPage(limit: number, offset: number) {
    return this.http.get<Array<IProduct>>(`${this.apiUrl}/products`, {params:{ limit, offset}})
  }

  FetchReadAndUpdte(id: string, data: IUpdateProduct) {
    zip(
      this.GetProduct(id),
      this.Update(id, data),
    )
  }
}
