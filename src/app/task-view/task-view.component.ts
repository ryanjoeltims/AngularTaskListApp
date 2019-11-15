import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskDataService } from '../task-data.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';


@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})

export class TaskViewComponent implements OnInit {
  private tasksRoute = 'http://localhost:3000/tasks';
  public tasks: Task[];
  public task: Task = new Task();
  public id: number;

  getTasks() : void {
    this.taskDataService.getTasks().subscribe(t => (this.tasks = t));
  }

  deleteTask(id: number) : void {
    this.taskDataService.deleteTask(id).subscribe(
      t=>
      this.router.navigate(["list"]));
  }

  constructor(
    private taskDataService: TaskDataService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }


  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.id = parseInt(id);
    console.log(this.id);
    this.getTask(this.id);
    this.getTasks();
  }

  getTask(id) {
    this.http.get<Task>(this.tasksRoute + "/" + id).subscribe(task => {
      this.task.id = task.id,
        this.task.name = task.name,
        this.task.timeToComplete = task.timeToComplete,
        this.task.description = task.description,
        this.task.itemsNeeded = task.itemsNeeded
    });
  }
}