import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/categories'


  constructor(
    private http: HttpClient
  ) { }

  GetAll(limit?: number, offset?: number) {
   
    let params = new HttpParams()
    if(limit && offset) {
      params = params.set('limit', limit)
      params = params.set('offset', offset)
    }
    return this.http.get<Array<ICategory>>(this.apiUrl, {params})
  }
}
