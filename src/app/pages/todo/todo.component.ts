import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'ngx-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public completedTasks : Array<any>; 
  public activeTasks : Array<any>;
  public taskToAdd : string = "";
  
  constructor(private tasksService : TasksService) { 
    this.completedTasks = [];
    this.activeTasks = [];
    this.updateTasks();

  }

  add() {
    this.tasksService.addTask(this.taskToAdd).subscribe((res) => {
      this.updateTasks();
    })
  }

  updateTasks() {
    this.tasksService.getTasks().subscribe((res) => {
      res.data.forEach((task) => {
        console.log(task);
        if(task.checked)
          this.completedTasks.push(task);
        else
          this.activeTasks.push(task);

      });
    });
  }

  checked(task) {
    console.log('cpicp');
    task.checked = true;
    this.tasksService.updateTask(task).subscribe((res) => {
      this.updateTasks();
    });
  }

  unchecked(task) {
    task.checked = false;
    this.tasksService.updateTask(task).subscribe((res) => {
      this.updateTasks();
    });
  }

  deleteTask(task) {
    
  }
  ngOnInit() {
  }



}
