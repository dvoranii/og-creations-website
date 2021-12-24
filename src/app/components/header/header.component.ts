import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',
  './header.component.queries.css'
]

})
export class HeaderComponent implements OnInit {

  headerBurgerVisible: string | any;
  closeMenu: string | any;
  openX: string | any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openNav() {
    this.headerBurgerVisible = "nav-open";
    this.openX = "display";
    this.closeMenu = "close";

  }

  closeNav() {
    this.headerBurgerVisible = "";
    this.closeMenu = "display";
    this.openX = "close";
  }

  onReloadRoute(url:string){
    this.router.navigateByUrl(url);
  }


}
