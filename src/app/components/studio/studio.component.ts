import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css',
            './studio.component.queries.css'
]
})
export class StudioComponent implements OnInit {


  images: GalleryItem[] | any;

  constructor() { }

  ngOnInit(): void {

    this.images = [
      new ImageItem({src:'/assets/img/gallery/gallery4.webp', thumb:'/assets/img/gallery/gallery4.webp'}),
      new ImageItem({src:'/assets/img/studio-gallery-pic-3-compressed.webp', thumb:'/assets/img/studio-gallery-pic-3-compressed.webp'}),
      new ImageItem({src:'/assets/img/studio-gallery-pix-2-compressed.webp', thumb:'/assets/img/studio-gallery-pix-2-compressed.webp'}),
      new ImageItem({src:'/assets/img/services-img/mixing.webp', thumb:'/assets/img/services-img/mixing.webp'}),
      new ImageItem({src:'/assets/img/THE STUDIO_compressed.webp', thumb:'/assets/img/THE STUDIO_compressed.webp'}),
      new ImageItem({src:'/assets/img/services-img/music-production.webp', thumb:'/assets/img/services-img/music-production.webp'}),
      new ImageItem({src:'/assets/img/ABOUT US_compressed.webp', thumb:'/assets/img/ABOUT US_compressed.webp'}),
      new ImageItem({src:'/assets/img/gallery/gallery1.webp', thumb:'/assets/img/gallery/gallery1.webp'}),
      new ImageItem({src:'/assets/img/gallery/gallery2.webp', thumb:'/assets/img/gallery/gallery2.webp'}),
      new ImageItem({src:'/assets/img/gallery/gallery3.webp', thumb:'/assets/img/gallery/gallery3.webp'})
      

    ]
  }


}
