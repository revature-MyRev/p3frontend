import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Users } from 'src/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: any;

  constructor(private token: ProfileService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

}
