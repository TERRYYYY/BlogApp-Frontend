import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DeletePostDialogComponent } from '../delete-post-dialog/delete-post-dialog.component';


@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.scss'
})
export class ViewAllComponent {

  //Variables
  allPosts: any;

  constructor(private postService:PostService, private snackBar: MatSnackBar, public dialog: MatDialog){}

  ngOnInit(){
    this.getAllPosts();
  }

  openDialog() {
    this.dialog.open(DeletePostDialogComponent, {
      width: '250px',
      height: '250px',
      data: 'right click'
    });
  }

  //Method that handles HTTP requests to get all posts
  getAllPosts(){
    this.postService.getallPosts().subscribe(res =>{
      console.log(res);
      this.allPosts = res;
    }, error =>{
      this.snackBar.open("Something went wrong", "Ok");
    }
  )
  }

   //Method to delete a post
  deletePost(postId: number){
    this.postService.deletePost(postId).subscribe(res =>{
      console.log("Deleted Post Is: ", res);
      this.snackBar.open("Post Deleted Successfully", "Ok");
      this.getAllPosts();

    })
  }

}
