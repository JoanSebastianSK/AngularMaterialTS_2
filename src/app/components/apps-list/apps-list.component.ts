import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { App } from '../../models/apps.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './apps-list.component.html',
  styleUrls: ['./apps-list.component.css']
})

export class AppListComponent {

  /*Propiedad del componente para definir el orden de las tareas.*/
  @Input() apps: App[] = [];

  /*Comprueba si está en estado de carga */
  @Input() loading:boolean = false;
  
  // /* Evento para cambiar la tarea a anclada */
  // // tslint:disable-next-line: no-output-on-prefix
  // @Output() onPinTask = new EventEmitter<Event>();
  
  // /* Evento para cambiar la tarea a archivada */
  // // tslint:disable-next-line: no-output-on-prefix
  // @Output() onArchiveTask = new EventEmitter<Event>();

  //Calendar
  @Output() clickCalendar = new EventEmitter<App>();

  //Switch
  @Output() clickSwitch = new EventEmitter<App>();
  
  @Input()
  set app(arr: App[]) {
    this.apps = [
    ...arr.filter(t => t.state === 'TASK_PINNED'),
    ...arr.filter(t => t.state !== 'TASK_PINNED'),
    ];
  }

  constructor(public dialog: MatDialog) {}

  /**
  * Esta función muestra por consola el evento
  * que se produce que en este caso es un switch.
  * @param event el evento que se produce es cuando se pulsa
  * sobre el switch e indica el estado que tiene en ese momento
  * @param app se refiere a la app en el que se ha producido el switch.
  */
  toggle(event,app){

    console.log(event,app)
     
  }
  
}