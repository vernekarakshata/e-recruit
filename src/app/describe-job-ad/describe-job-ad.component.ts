import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-describe-job-ad',
  templateUrl: './describe-job-ad.component.html',
  styleUrls: ['./describe-job-ad.component.scss']
})
export class DescribeJobAdComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DescribeJobAdComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      data = data.replace(/(?:\r\n|\r|\n)/g, '<br>');
    }

  ngOnInit(): void {
  }

}
