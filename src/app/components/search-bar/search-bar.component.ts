import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/user';
import { SearchBarService } from './services/search-bar.service';
import { FilterPipe } from './services/filter.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  users!: Users[];
  searchName:string="";
  changeText: boolean;

  constructor(private SearchBarService: SearchBarService, private router: Router) { 
    this.changeText = false;
  }

  ngOnInit(): void {
    this.getUsers();

  }
 
  getProfile(userId: number): void{
    this.router.navigate(['profile', userId])
  }


  private getUsers(){
    this.SearchBarService.getUsersList().subscribe(data=>{this.users=data})
  }

}