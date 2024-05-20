import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.scss'
})
export class ViewPostComponent {

  //Variables
  postId = this.activatedRoute.snapshot.params['id'];
  postData: any;

  constructor(
    private postService: PostService,
    private activatedRoute:ActivatedRoute,
    private matSnackBar:MatSnackBar
  ){}

  ngOnInit(){
    console.log(this.postId);
    this.getPostById();
  }

  //Method to get post by ID
  getPostById(){
    this.postService.getPostById(this.postId).subscribe(res =>{
      this.postData = res;
      console.log(res);
    },error =>{
      this.matSnackBar.open("Something went wrong", "Ok");
    })
  }

}
