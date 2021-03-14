import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  static userLoggedIn : BehaviorSubject<any>;
  static userRole : BehaviorSubject<any>;
  static userLoggedInStatus : BehaviorSubject<any>;

  constructor(private httpClient : HttpClient) {
    UsersService.userLoggedIn = new BehaviorSubject<any>(null);
    UsersService.userRole = new BehaviorSubject<any>(null);
    UsersService.userLoggedInStatus = new BehaviorSubject<any>(null);
   }

   setUserLoggedIn(username, role, status){
    UsersService.userLoggedIn.next(username);
    UsersService.userRole.next(role);
    UsersService.userLoggedInStatus.next(status);
   }

   getUserLoggedInStatus(){
     return UsersService.userLoggedInStatus;
   }

   getUserLoggedIn(){
    return UsersService.userLoggedIn;
  }

  getUserRole(){
    return UsersService.userRole;
  }
}
