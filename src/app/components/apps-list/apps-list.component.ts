import { Component, Input, Output, EventEmitter } from '@angular/core';
import { App } from '../../models/apps.model';

@Component({
  selector: 'app-task-list',
  templateUrl: 'apps-list.component.html',
  styleUrls: ['apps-list.component.css']
})

export class AppListComponent {

  /*Propiedad del componente para definir el orden de las tareas.*/
  @Input() appsInOrder: App[] = [];

  /*Comprueba si está en estado de carga */
  @Input() loading:boolean
  
  /* Evento para cambiar la tarea a anclada */
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPinTask = new EventEmitter<Event>();
  
  /* Evento para cambiar la tarea a archivada */
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onArchiveTask = new EventEmitter<Event>();
  @Output() calendar = new EventEmitter<Event>();
  
  @Input()
  set apps(arr: App[]) {
    this.appsInOrder = [
    ...arr.filter(t => t.state === 'TASK_PINNED'),
    ...arr.filter(t => t.state !== 'TASK_PINNED'),
    ];
  }

  showElement(){

    console.log("Hola");
    document.getElementById('calendar').style.color="red";

  }

}