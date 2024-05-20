import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../../service/comment.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.scss'
})
export class ViewPostComponent {

  //Variables
  postId = this.activatedRoute.snapshot.params['id'];
  postData: any;

  //Comment Form Group
  commentForm! : FormGroup

  constructor(
    private postService: PostService,
    private activatedRoute:ActivatedRoute,
    private matSnackBar:MatSnackBar, 
    private myForm: FormBuilder,
    private commentService: CommentService,
  ){}

  ngOnInit(){
    console.log(this.postId);
    this.getPostById();

    this.commentForm = this.myForm.group({
      postedBy: [null, Validators.required],
      content: [null, Validators.required]
    })
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

  //Method to get post's like
  likeThisPost() {
    this.postService.likePost(this.postId).subscribe((res) => {
      this.matSnackBar.open("Post Liked", "Ok");
      this.getPostById();
    }, (error) => {
      this.matSnackBar.open("Something went wrong", "Ok");
    })
  }

  //Method to publish a new comment
  publishComment(){
    const postedBy = this.commentForm.get('postedBy')?.value;
    const content = this.commentForm.get('content')?.value;

    this.commentService.createNewComment(this.postId, postedBy, content).subscribe(res=>{
      this.matSnackBar.open("Comment Published", "Ok");
      // this.commentForm.reset();
    }, error=>{
      this.matSnackBar.open("Something went wrong", "Ok");
    })
  }

}
