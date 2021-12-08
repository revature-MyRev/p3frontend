import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',

  styleUrls: ['./side-panel.component.scss'],
})
export class SidePanelComponent implements OnInit {
  id = Number(localStorage.getItem('userId'));
  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  viewProfile() {
    function $(el) {
      return document.querySelector(el);
    }

    this.router.navigate([
      'profile',
      { userId: Number(localStorage.getItem('userId')) },
    ]);
  }

  closeSidePanel(): void {
    function $(el) {
      return document.querySelector(el);
    }

    const outerWrapper = $('.side__panel-outer-wrapper');
    const sidepanel = $('.side__panel-wrapper');

    outerWrapper.style.width = '0%';
    sidepanel.style.width = '0%';
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['']);
    localStorage.clear();
  }
}
