import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.scss']
})
export class CandidateProfileComponent implements OnInit {

  candidateProfileForm: FormGroup;
  constructor(private _fb : FormBuilder) { }

  ngOnInit(): void {
    this.createCandidateProfileForm();
  }

  createCandidateProfileForm() : void{ 
    this.candidateProfileForm = this._fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      emailId: ['', Validators.required],
      username: ['', Validators.required],
      designation: ['', Validators.required],
      skills: ['', Validators.required],
    });
  }

  submitCandidateForm() : void{
    
  }

}
