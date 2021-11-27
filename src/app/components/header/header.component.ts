import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  showDropdown = false;

  constructor(private home: HomeComponent) { }

  ngOnInit(): void {
  }

  editProfile(): void {
    this.home.displayEditProfile();
  }

  editProfilePic(): void {
    this.home.displayEditProfilePic();
  }

  displayDropdown(): void {
    this.showDropdown = true;
  }

}
