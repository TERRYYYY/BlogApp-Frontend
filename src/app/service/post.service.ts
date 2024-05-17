import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8000/";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

// Method that handles HTTP requests to get all posts
  createNewPostService(data:any): Observable<any>{     //Observable -> A data stream you can subscribe to handle event handling & asynchronous responses
    return this.http.post(BASIC_URL + 'api/posts', data);
  }
}
