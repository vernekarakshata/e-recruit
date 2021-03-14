import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { DescribeJobAdComponent } from '../describe-job-ad/describe-job-ad.component';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-job-ad',
  templateUrl: './job-ad.component.html',
  styleUrls: ['./job-ad.component.scss']
})
export class JobAdComponent implements OnInit {

  jobAdvertisements : any;  

  constructor(public dialog: MatDialog, private jobsService : JobsService) { }

  ngOnInit(): void {
    this.getAllJobAdvertisements();
  }

  getAllJobAdvertisements(){
    this.jobsService.fetchAllTJobAdvertisements().subscribe(data=>{
      this.jobAdvertisements = data;
    });
  }

  viewJobDescription(description){
    const dialogRef = this.dialog.open(DescribeJobAdComponent, {
      width: '550px',
      data: description
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed with result: ', result);
    });
    
  }

  applyForJobProfile(){
    Swal.fire('Thank you for Applying with us.', 
    'Please go to the job status page to answer the test for this job profile',
     'success');
    
  }

   

}
