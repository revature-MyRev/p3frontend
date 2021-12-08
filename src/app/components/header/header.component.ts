import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter } from 'rxjs';

declare const sidepanel: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  showHamburger() {
    let route: boolean = true;
    if (this.router.url === '/' || this.router.url === '/register') {
      route = false;
    }

    return route;
  }

  isNotRegister() {
    let route = false;
    if (this.router.url === '/' || this.router.url === '/register') {
      route = true;
    }

    return route;
  }

  isFeedRoute() {
    return this.router.url == '/feed';
  }

  sidepanel(): void {
    function $(el) {
      return document.querySelector(el);
    }

    const outerWrapper = $('.side__panel-outer-wrapper');
    const sidepanel = $('.side__panel-wrapper');
    const closeBtn = $('.close-side-panel');
    const logoutBTN = $('.logoutBTN');
    const viewProfilBTN = document.querySelector('.view-profile-btn');

    const links = document.querySelectorAll('.list__item__link');
    const underlines = document.querySelectorAll('.underline');

    sidepanel.style.width = '60%';
    outerWrapper.style.width = '100%';

    closeBtn.addEventListener('click', () => {
      sidepanel.style.width = '0%';
      outerWrapper.style.width = '0%';
    });

    outerWrapper.addEventListener('click', (evt) => {
      if (evt.target === outerWrapper) {
        sidepanel.style.width = '0%';
        outerWrapper.style.width = '0%';
      }
    });

    logoutBTN.addEventListener('click', () => {
      sidepanel.style.width = '0%';
      outerWrapper.style.width = '0%';
    });

    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('mouseenter', () => {
        underlines[i].classList.add('underline-full-width');
      });
      links[i].addEventListener('mouseleave', () => {
        underlines[i].classList.remove('underline-full-width');
      });
    }
  }
}
