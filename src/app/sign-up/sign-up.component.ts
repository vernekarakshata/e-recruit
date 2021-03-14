import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  constructor(private _fb : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.createSignUpForm();
  }

  createSignUpForm() : void{
    this.signUpForm = this._fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      emailId: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  doRegister() : void{
    Swal.fire('Thank you for Registering will us.', 
    'You can login now with username ' + this.signUpForm.value.username,
     'success');
     this.signUpForm.reset();
     this.signUpForm.clearValidators();
     this.signUpForm.updateValueAndValidity();
  }


}
