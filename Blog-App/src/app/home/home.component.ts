import { Component, OnInit } from '@angular/core';
import { BlogService } from './../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs= [];

  constructor(private _blogData: BlogService) {
    this.blogs = this._blogData.getBlogData();
  }

  ngOnInit() {
  }

}
