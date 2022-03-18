import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DividerOverviewExample } from './components/apps/divider.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import  { CommonModule }  from '@angular/common';
import { AppListComponent } from './components/apps-list/apps-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DividerOverviewExample,
    AppListComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
