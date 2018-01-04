import { Injectable } from '@angular/core';
import { BlogData } from '././blogData';

@Injectable()
export class BlogService {
  blog= [];
  constructor() { }

  setBlogData(blogs ) {
  this.blog = blogs;
  }
  getBlogData() {
  return this.blog;
  }

}
