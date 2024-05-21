import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PostService } from '../../service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-post-dialog',
  templateUrl: './delete-post-dialog.component.html',
  styleUrl: './delete-post-dialog.component.scss'
})
export class DeletePostDialogComponent {
  allPosts: any;

  constructor(
    private postService: PostService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DeletePostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  //Method to delete a post
  deletePost(postId: number){
    this.postService.deletePost(postId).subscribe(res =>{
      console.log("Deleted Post Is: ", res);
      this.snackBar.open("Post Deleted Successfully", "Ok");
      this.getAllPosts();

    })
  }

  //Method that handles HTTP requests to get all posts
  getAllPosts(){
    this.postService.getallPosts().subscribe(res =>{
      console.log("Deleted Post Is: ", res);
      this.allPosts = res;
    }, error =>{
      this.snackBar.open("Cannot Get All Posts", "Ok");
    }
  )
  }
}
