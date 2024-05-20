import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { UpdatePostComponent } from './pages/update-post/update-post.component';

const routes: Routes = [
  {path: 'create-post', component: CreatePostComponent},
  {path: '', component: ViewAllComponent},
  {path: 'view-post/:id', component: ViewPostComponent},
  {path: 'edit-post/:id', component: UpdatePostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
