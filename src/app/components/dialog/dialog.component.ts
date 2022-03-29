import { Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit{

  ngOnInit(){
    
  }

  constructor(
  public dialog: MatDialogRef<DialogComponent>,
  @Inject(MAT_DIALOG_DATA) public message: string){}
  
}


