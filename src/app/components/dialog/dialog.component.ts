import { Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit{

  body: any;
  
  ngOnInit(){
    
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogComponent>
  ) {}

  /**
   * Esta función la cual
   * a través de una propiedad en la que está el componente de Dialog, 
   * se centra a la hora de cerrar el Dialog.
   */
  closeDialog() {
    this.dialogRef.close();
  }
  
}


