import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskViewComponent } from './task-view/task-view.component';


const routes: Routes = [
  {
    path: "list",
    component: TaskListComponent
  },
  {
    path: "view/:id",
    component: TaskViewComponent
  },
  {
    path: "add",
    component: TaskAddComponent
  },
  {
    path: "edit/:id",
    component: TaskEditComponent
  },
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full"
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
