import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  // Method that handles HTTP requests for creating new comments
  createNewComment(postId: number, postedBy: string, content: string): Observable<any> {
    const params = new HttpParams()
      .set('postId', postId.toString())
      .set('postedBy', postedBy);
    return this.http.post<any>(`${BASIC_URL}api/comments/create/`, { content }, { params });
  }

  // Method to get all comments of each post
  getAllCommentsByPost(postId: number): Observable<any> {
    return this.http.get(`${BASIC_URL}api/comments/${postId}`);
  }
}
