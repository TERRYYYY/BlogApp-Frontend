import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {

  //Creating a form group
  postForm! : FormGroup; 
  tags: string[] = [];
  // Inject a constructor

  // Constructors -> They are automatically executed every time you create an object. 

  //Constructor injects three dependencies: 
  //A service to: Help create forms, To handle navigation and To show little messages to the user.
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
  )
  {}

  //Create controls for the above method

  // ngOnInit -> Method that runs once the form starts.
  ngOnInit(){
    //Calling our form builder
    // Initializes the postForm property using the FormBuilder service to create a form group
    this.postForm = this.fb.group({

      //Adding controllers for the form group
      name: [null, Validators.required],
      content: [null, [Validators.required, Validators.maxLength(5000)]],
      img: [null, Validators.required],
      postedBy: [null, Validators.required],
    })
  }

  // Methods to add or remove tags from the array
  //Adding Tags Function
  addTag(event: any){
    const value = (event.value || '').trim(); // Gets value from the user. Trim() removes any whitespaces in case any
    if(value){
      this.tags.push(value); // If a value is inputted, push it to the tags array
    }
    event.chipInput!.clear(); // Else, clear the input field for another one to be added
  }

  //Removing Tags Function
  removeTag(tag:any){
    const index = this.tags.indexOf(tag); // Checks the position of the tags in the tags array using indexOf()
    if(index>=0){ // If array is greater than 0, it means tags were found in the array
      this.tags.splice(index,1); // splice(index, 1) -> Means you want to remove 1 element from the given index
    }
  }

}
