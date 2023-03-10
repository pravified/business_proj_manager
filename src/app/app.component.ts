import { Component, OnInit } from '@angular/core';

import { PeopleService } from './model/person-service';

import { TaskService } from './model/task-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RubyFlow';

  peopleService: any;
  taskService: any;
  taskBoard: any;

  constructor(peopleService: PeopleService,
    taskService: TaskService){
    this.peopleService = peopleService;
    this.taskService = taskService;
  }

  ngOnInit(): void {

    // clearing local storage for testing
    //window.localStorage.clear();
    
    // loading People and Tasks from local storage on application initialization
    this.loadPeople();
    //this.loadTasks();

  }

  loadPeople(): void {
    // Loading any locally stored people array data on page load
    if(window.localStorage.getItem("people_list_Bachoti")){
      
      let storedPeople: any = window.localStorage.getItem("people_list_Bachoti");
      let parsedPeople: any[] = JSON.parse(storedPeople);

      this.peopleService.setAllPeople(parsedPeople);

    }
  }

  /*loadTasks(): void {

    // Loading any locally stored task array data on page load
    if(window.localStorage.getItem("todo_tasks_Bachoti")){
      let storedTasks:any = window.localStorage.getItem("todo_tasks_Bachoti");
      let parsedStored: any[] = JSON.parse(storedTasks);
      this.taskService.setTasksToDo(parsedStored);
    }
    if(window.localStorage.getItem("started_tasks_Bachoti")){
      let storedTasks:any = window.localStorage.getItem("started_tasks_Bachoti");
      let parsedStored: any[] = JSON.parse(storedTasks);
      this.taskService.setTasksStarted(parsedStored);
    }
    if(window.localStorage.getItem("review_tasks_Bachoti")){
      let storedTasks:any = window.localStorage.getItem("review_tasks_Bachoti");
      let parsedStored: any[] = JSON.parse(storedTasks);
      this.taskService.setTasksReview(parsedStored);
    }
    if(window.localStorage.getItem("complete_tasks_Bachoti")){
      let storedTasks:any = window.localStorage.getItem("complete_tasks_Bachoti");
      let parsedStored: any[] = JSON.parse(storedTasks);
      this.taskService.setTasksComplete(parsedStored);
    }

  }*/
}
