import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Task } from '../../model/task';
import { TaskService } from '../../model/task-service';

import { PeopleService } from '../../model/person-service'
import { Person } from 'src/app/model/person';


@Component({
  selector: 'app-tasks-entry',
  templateUrl: './tasks-entry.component.html',
  styleUrls: ['./tasks-entry.component.css']
})
export class TasksEntryComponent implements OnInit {

  task: Task;
  assignees: any[];

  constructor(private route: ActivatedRoute,
        private router: Router,
        private taskService: TaskService,
        private personService: PeopleService) {
          this.task = new Task();
          this.assignees = [];

          let peopleList = personService.getAllPeople();
          for(var person of peopleList){
            this.assignees.push(person.fName+" "+person.lName);
          }
        }

  ngOnInit() {
    // incrementing id on start of creating task
    this.task = this.taskService.incrementId(this.task);
   }
  	
  saveTask() {
    // storing task in array
    this.taskService.enterTask(this.task);
    console.log("added task: "+this.task.id);
    // storing updated contents of 'to do' array in local storage, overriding existing
    window.localStorage.setItem("todo_tasks_Bachoti",JSON.stringify(this.taskService.getTasksToDo()));
  }

}
