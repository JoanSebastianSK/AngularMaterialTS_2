import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { App } from 'src/app/models/apps.model';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

export interface Days {
  id:number;
  title: string;
  time: number;
  state: boolean;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  ngOnInit(): void {
  }

  //Time Limit
  myForm: FormGroup;

  constructor( public fb: FormBuilder){
    this.myForm = this.fb.group({
      time: ['', [Validators.maxLength(2), Validators.max(60), Validators.min(1), Validators.pattern(/^[0-9]\d*$/)]],
    });
  }

  /**
   * Esta función guarda el valor que el usuario 
   * introduzca en el campo de tiempo de app
   */
  saveData(){
    console.log(this.myForm.value);
  }

  //Switch
  @Output() clickSwitch = new EventEmitter<App>();

  days: Days[] = [
    {id: 1 , title: 'Lunes', time: null, state: false},
    {id: 2, title: 'Martes', time: null, state: false},
    {id: 3, title: 'Miércoles', time: null, state: false},
    {id: 4, title: 'Jueves', time: null, state: false},
    {id: 5, title: 'Viernes', time: null, state: false},
    {id: 6, title: 'Sabado', time: null, state: false},
    {id: 7, title: 'Domingo', time: null, state: false}
  ]

  /**
  * Esta función muestra por consola el evento
  * que se produce que en este caso es un switch.
  * @param event el evento que se produce es cuando se pulsa
  * sobre el switch e indica el estado que tiene en ese momento
  * @param days se refiere al día en el que se ha producido el switch.
  */
  toggle(event,days){

    console.log(event,days)
     
  }
}