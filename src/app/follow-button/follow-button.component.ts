import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.scss']
})
export class FollowButtonComponent implements OnInit {

  constructor() { }

  public isFollow: boolean = false;
  ngOnInit(): void {
  }

  onClick() {
    this.isFollow = !this.isFollow;
  }

}
