import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Users } from 'src/app/models/user';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FollowButtonComponent } from '../../follow-button/follow-button.component';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: any;
  targetUser: any = [];
  temp: any;
  userId: any;

  constructor(private tokenService: ProfileService, private route: ActivatedRoute, private router: Router) {
   }

  ngOnInit() {
    this.userId = this.route.snapshot.params['userId'];
    this.temp = this.tokenService.getUserById(+this.userId);
    this.temp.subscribe((data: {}) =>{
      this.targetUser = data;
      }
    );
    this.currentUser = this.tokenService.getUser();
  }
}
