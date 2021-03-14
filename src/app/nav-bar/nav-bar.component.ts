import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isUserLoggedIn : boolean;
  loggedInUser : string;
  isAdmin: boolean;
  constructor(private userService : UsersService, private router : Router) {
    this.isUserLoggedIn = false;
    this.isAdmin = false;
   }

  ngOnInit(): void {
    this.checkUserLoggedIn();
    this.checkUserLogged();
    this.checkUserRole();
  }

  checkUserLoggedIn(){
    this.userService.getUserLoggedInStatus().subscribe(data=>{
      this.isUserLoggedIn = data;
    });
  }

  checkUserLogged(){
    this.userService.getUserLoggedIn().subscribe(data=>{
      this.loggedInUser = data;
    });
  }

  checkUserRole(){
    this.userService.getUserRole().subscribe(data=>{
      if(data == "Admin"){
        this.isAdmin = true;
      }else{
        this.isAdmin = false;
      }
    });
  }

  signOutUser(){
    this.userService.setUserLoggedIn(null, null, false);
    this.router.navigateByUrl('login')
  }



}
