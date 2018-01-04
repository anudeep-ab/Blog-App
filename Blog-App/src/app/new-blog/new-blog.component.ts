import { Component, OnInit } from '@angular/core';
import { BlogData } from './../blogData';
import { BlogService } from './../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css'],
  // providers: [BlogData]
})
export class NewBlogComponent implements OnInit {
  blog: BlogData[]= [];
  public blogs: BlogData;
  title: string;
  image: string;
  body: string;


  constructor(private _blogInject: BlogService , private _router: Router ) {

  }
  submitBlog() {
    this.blogs = new BlogData(this.title, this.image, this.body);
    this.blog.push(this.blogs);
    console.log(this.blog);
    this._blogInject.setBlogData(this.blog);
    this.title = '';
    this.image = '';
    this.body = '';
    this._router.navigate(['/home']);
  }


  ngOnInit() {
  }

}
