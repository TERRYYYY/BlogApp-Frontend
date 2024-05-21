import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PostService } from '../../service/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrl: './update-post.component.scss'
})
export class UpdatePostComponent {
    //Creating a form group
    updatePostForm! : FormGroup; 

  //Variables
  postId: number = this.activatedRoute.snapshot.params["id"];

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: PostService,
    private fb: FormBuilder,
    private router: Router,
  ){}

  ngOnInit(){
    this.getPostById();

    //Calling our form builder
    // Initializes the postForm property using the FormBuilder service to create a form group
    this.updatePostForm = this.fb.group({
      //Adding controllers for the form group
      name: [null, Validators.required],
      content: [null, [Validators.required, Validators.maxLength(5000)]],
      img: [null, Validators.required],
      postedBy: [null, Validators.required],
    })
  }

  //Method to get post by ID
  getPostById(){
    this.service.getPostById(this.postId).subscribe(res =>{
      console.log(res);
      this.updatePostForm.patchValue(res);
    })
  }

  //Method to update existing posts

  updateExistingPost(){
    this.service.updatePost(this.postId, this.updatePostForm.value).subscribe(res=>{
      console.log("Updated Post:", res);
      if (res.id != null){
        this.router.navigateByUrl("/");
      }
    })
  }



}
