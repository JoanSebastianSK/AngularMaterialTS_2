import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Apps } from 'src/app/models/apps.model';

@Component({
  selector: 'app-list',
  templateUrl: 'divider.component.html',
  styleUrls: ['divider.component.css'],
})
export class DividerOverviewExample {

  @Input() task: Apps;

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<Event>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<Event>();

  /**
  * Component method to trigger the onPin event
  * @param id string
  */
  onPin(id: any) {
    this.onPinTask.emit(id);
  }
  /**
  * Component method to trigger the onArchive event
  * @param id string
  */
  onArchive(id: any) {
    this.onArchiveTask.emit(id);
  }
}