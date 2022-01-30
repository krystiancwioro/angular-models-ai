import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('hamburgerBtn') hamburgerBtn: ElementRef;
  @ViewChild('navbar') navbar: ElementRef;


  constructor() {
  }

  ngOnInit(): void {
  }

  showMenu(): void {
    this.hamburgerBtn.nativeElement.classList.toggle('hamburger-btn--active');
    this.navbar.nativeElement.classList.toggle('navbar--active');
  }

  closeMenuWhenClick(): void {
    this.hamburgerBtn.nativeElement.classList.remove('hamburger-btn--active');
    this.navbar.nativeElement.classList.remove('navbar--active');
  }

}
