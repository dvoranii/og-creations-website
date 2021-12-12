import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { RouterModule } from '@angular/router';
import { BlogPost1Component } from './blog-posts/blog-post-1/blog-post1.component';
import { BlogPost2Component } from './blog-posts/blog-post-2/blog-post2/blog-post2.component';
import { BlogPost3Component } from './blog-posts/blog-post-3/blog-post3/blog-post3.component';
import { BlogPost4Component } from './blog-posts/blog-post-4/blog-post4/blog-post4.component';
import { BlogPost5Component } from './blog-posts/blog-post-5/blog-post5/blog-post5.component';



@NgModule({
  declarations: [
    BlogComponent,
    BlogPost1Component,
    BlogPost2Component,
    BlogPost3Component,
    BlogPost4Component,
    BlogPost5Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component:BlogComponent
      },
      {
        path:'how-to-release-a-new-song',
        component:BlogPost1Component
      },
      {
        path:'how-to-communicate-with-your-audio-engineer',
        component:BlogPost2Component
      },
      {
        path:'how-to-find-a-rap-studio-near-you',
        component:BlogPost3Component
      },
      {
        path:'top-3-vocal-exercises-for-rappers',
        component:BlogPost4Component
      },
      {
        path:'5-basic-keys-to-a-productive-studio-session',
        component:BlogPost5Component
      }
    ]),
  ]
})
export class BlogModule { }
