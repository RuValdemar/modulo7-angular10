import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { PostsComponent } from './posts.component';
import { CanActivateGuard } from '../can-activate.guard';
import { PostsResolverGuard } from '../posts-resolver.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [CanActivateGuard],
    children: [
      {
        path: '',
        component: PostsComponent,
        resolve: {posts: PostsResolverGuard}
      }, {
        path: 'usuario/:id',
        component: PostsComponent,
        resolve: {posts: PostsResolverGuard}
      }
    ]
  }
  // {path: 'posts', component: PostsComponent, canActivate: [CanActivateGuard], resolve: {posts: PostsResolverGuard}},
  // {path: 'usuarios/:id/posts', component: PostsComponent, canActivate: [CanActivateGuard], resolve: {posts: PostsResolverGuard}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
