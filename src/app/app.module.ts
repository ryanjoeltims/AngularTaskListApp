import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { NavComponent } from './nav/nav.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskViewComponent } from './task-view/task-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskAddComponent,
    NavComponent,
    TaskEditComponent,
    TaskViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
