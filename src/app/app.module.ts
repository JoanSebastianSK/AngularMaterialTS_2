import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DividerOverviewExample } from './components/apps/divider.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import  { CommonModule }  from '@angular/common';
import { AppListComponent } from './components/apps-list/apps-list.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormComponent } from './components/form/form.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    AppListComponent,
    DividerOverviewExample,
    DialogComponent,
    FormComponent,
  ],
  imports: [

    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[MatDialogModule],

})
export class AppModule { }
