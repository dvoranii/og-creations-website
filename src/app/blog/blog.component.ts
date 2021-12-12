import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-blog',
  
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css',
              './blog.component.queries.css'
]
})
export class BlogComponent implements OnInit {

  constructor(private titleService:Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("OG Creations ® - OG Blog")
  }

}
