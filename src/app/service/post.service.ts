import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

// Method that handles HTTP requests to create new posts
  createNewPostService(data:any): Observable<any>{     //Observable -> A data stream you can subscribe to handle event handling & asynchronous responses
    return this.http.post(BASIC_URL + 'api/posts', data);
  }

  // Method that handles HTTP requests to get all posts
  getallPosts():Observable<any>{
    return this.http.get(BASIC_URL + 'api/posts');
  }

  //Method that gets post by ID
  getPostById(postId: number):Observable<any>{
    return this.http.get(BASIC_URL + `api/posts/${postId}`);
  }

  //Method to get post's like
  likePost(postId: number):Observable<any>{
    return this.http.put(BASIC_URL + `api/posts/${postId}/like` , {});
  }

}
