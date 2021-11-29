import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {
  
  currentUser: any;

  constructor(private tokenService: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenService.getUser();
  }

}
