import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user: Users;
  id: number = Number(localStorage.getItem('userId'));

  constructor(private uService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.uService.getUserById(this.id).subscribe((user) => {
      this.user = user;
    });
  }
  edit() {
    this.router.navigate(['edit-profile']);
  }
  backToFeed() {
    this.router.navigate(['feed']);
  }
}
