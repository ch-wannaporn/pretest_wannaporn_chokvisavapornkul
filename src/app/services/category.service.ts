import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = 'https://api.publicapis.org/categories'

  constructor(private http: HttpClient) { }

  getCategories(): Observable<[]> {
    return this.http.get<[]>(this.url)
  }
}