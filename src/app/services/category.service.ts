import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { isAvailable } from '../NGRX/models/category.model';
import { Observable } from 'rxjs';
import { ICategory } from '../models/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = `${environment.apiUrl}/categories/`


  constructor(
    private http: HttpClient
  ) { }

  GetAll(limit?: number, offset?: number) {

    let params = new HttpParams()
    if (limit && offset) {
      params = params.set('limit', limit)
      params = params.set('offset', offset)
    }
    return this.http.get<Array<ICategory>>(this.apiUrl, { params })
  }

  get(id: string) {
    return this.http.get<ICategory>(this.apiUrl + id)
  }

  create(data: Partial<ICategory>) {
    return this.http.post<ICategory>(this.apiUrl, data)
  }

  update(id: string, data: Partial<ICategory>) {
    return this.http.put<ICategory>(this.apiUrl + id, data)
  }

  delete(id: string) {
    return this.http.delete<ICategory>(this.apiUrl + id,)
  }

  isAvailable(name: string): Observable<isAvailable> {
    return this.http.post<isAvailable>(`${this.apiUrl}availability`, { name })
  }
}
