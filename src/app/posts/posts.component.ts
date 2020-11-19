import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebapiService } from '../services/webapi.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private webApiService: WebapiService
  ) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   if (params.has('id')){
    //     this.webApiService.obtenerPostsPorUsuario(params.get('id')).subscribe(posts => this.posts = posts);
    //   } else {
    //     this.webApiService.obtenerPosts().subscribe(posts => this.posts = posts);
    //   }

    // });

    this.route.data.subscribe((data: {posts: Post[]}) => {
      this.posts = data.posts;
    });
  }

  // navegarHaciaUsuarios(): void{
  //   this.router.navigate(['/usuarios']);
  // }

}
