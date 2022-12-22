import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderTestService {
  constructor(private http: HttpClient) {}

  private resource_uri = 'https://jsonplaceholder.typicode.com/posts';
  getPost() {
    return this.http.get(this.resource_uri);
  }

  newPost(request_data: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post(this.resource_uri, request_data, httpOptions);
  }
}
