import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { App } from 'src/app/models/apps.model';
import { AppListComponent } from '../apps-list/apps-list.component';

export interface Days {
  id:number;
  title: string;
  time: string;
  state: boolean;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() {}

    //Switch
    @Output() clickSwitch = new EventEmitter<App>();

  ngOnInit(): void {
  }

  days: Days[] = [

    {id: 1 , title: 'Lunes', time: '0 MIN', state: false},
    {id: 2, title: 'Martes', time: '0 MIN', state: false},
    {id: 3, title: 'Miércoles', time: '0 MIN', state: false},
    {id: 4, title: 'Jueves', time: '0 MIN', state: false},
    {id: 5, title: 'Viernes', time: '0 MIN', state: false},
    {id: 6, title: 'Sabado', time: '0 MIN', state: false},
    {id: 7, title: 'Domingo', time: '0 MIN', state: false}
  ]

  toggle(event,days){

    console.log(event,days)
     
  }
  
}
