import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createSignInForm();
  }

  createSignInForm() {
    this.signInForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  doLogin() {
    const username = this.signInForm.value.username;
    if (username == 'admin') {
      this.userService.setUserLoggedIn('Admin', 'Admin', true);
    } else {
      this.userService.setUserLoggedIn('Candidate', 'Candidate', true);
      this.router.navigateByUrl("jobs/ad");
    }
  }
}
