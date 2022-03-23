import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Apps } from '../../models/apps.model';

@Component({
  selector: 'app-task-list',
  templateUrl: 'apps-list.component.html',
  styleUrls: ['apps-list.component.css']
})

export class AppListComponent {

    /**
    * Propiedad del componente para definir el orden de las tareas.
    */
    tasksInOrder: Apps[] = [];

    /** Comprueba si está en estado de carga */
    @Input() loading  = false;
    
    /** Evento para cambiar la tarea a anclada */
    // tslint:disable-next-line: no-output-on-prefix
    @Output()
    onPinTask = new EventEmitter<Event>();

    /** Evento para cambiar la tarea a archivada */
    // tslint:disable-next-line: no-output-on-prefix
    @Output()
    onArchiveTask = new EventEmitter<Event>();

    @Input()
    set tasks(arr: Apps[]) {
        this.tasksInOrder = [
        ...arr.filter(t => t.state === 'TASK_PINNED'),
        ...arr.filter(t => t.state !== 'TASK_PINNED'),
        ];
    }
}