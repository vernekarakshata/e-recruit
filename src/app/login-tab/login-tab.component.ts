import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-tab',
  templateUrl: './login-tab.component.html',
  styleUrls: ['./login-tab.component.scss']
})
export class LoginTabComponent implements OnInit {

  isSignIn : boolean;

  constructor() { 
    this.isSignIn = true;
  }

  ngOnInit(): void {
  }

  changeSignMode() : void{
    this.isSignIn = !this.isSignIn;
  }

}
