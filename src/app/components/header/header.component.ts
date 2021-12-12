import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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


}
