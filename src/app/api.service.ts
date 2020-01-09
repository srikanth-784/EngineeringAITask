import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  url = "https://hn.algolia.com/api/v1/search_by_date?tags=story";
  getData() {
    return this.http.get(this.url);
  }

}
