import { Component, OnInit } from '@angular/core';
import { json } from 'body-parser';
import { TaskService } from 'src/app/model/task-service';

@Component({
  selector: 'app-tasks-board',
  templateUrl: './tasks-board.component.html',
  styleUrls: ['./tasks-board.component.css']
})
export class TasksBoardComponent implements OnInit {

  // four arrays for task states
  tasks_todo: any[];
  tasks_started: any[];
  tasks_review: any[];
  tasks_complete: any[];
  // drag, source, target data
  dragSource: any;
  currentTask: any;
  parentStack: any[];
	
  constructor(private taskService: TaskService) { 

    this.tasks_todo = this.taskService.getTasksToDo();
    this.tasks_started = this.taskService.getStartedTasks();
    this.tasks_review = this.taskService.getReviewTasks();
    this.tasks_complete = this.taskService.getCompleteTasks();

    this.parentStack = [];
  }
  // common handlers for dragging
  dragStartHandler(e: Event): void {
    this.dragSource = e.target as HTMLDivElement;
    console.log("this.dragSource.id: "+this.dragSource.id);

    switch(this.dragSource.parentElement.id){
      case "todo_stack":
        this.parentStack = this.tasks_todo;
        break;
      case "started_stack":
        this.parentStack = this.tasks_started;
        break;
      case "review_stack":
        this.parentStack = this.tasks_review;
        break;
      case "complete_stack":
        this.parentStack = this.tasks_complete;
    }

    for(let task of this.parentStack){
      if (task.id == this.dragSource.id){
        this.currentTask = task;
      }
    }

    console.log("dragSource: "+this.dragSource);
    console.log("dragging started");
  }
  dragEndHandler(e: Event): void {
    console.log("dragging ended");
  }

  dragHandler(e: Event): void {
      console.log("dragging in progress");
  }
  dragEnterColumnHandler(e: Event): void {
    console.log("Entering column");
    e.preventDefault();
  }

  dragOverColumnHandler(e: Event): void{
    console.log("Dragging over column");
    e.preventDefault();
  }
  // handler for drop into To Do column
  dropToDoColHandler(e: Event): void {

    console.log("Dropped into To Do column");

      for(let task of this.parentStack){
        if (task.id == this.dragSource.id){
          // splice goes here
          this.parentStack.splice(this.parentStack.indexOf(task),1);
          // push goes here
          this.tasks_todo.push(task);
          console.log("added to To Do Column");
        }
      }

    e.preventDefault();

    //this.storeTaskArrays();
  } 
  // handler for drop into Started column
  dropStartedColHandler(e: Event): void {

    console.log("Dropped into Started column");

      for(let task of this.parentStack){
        if (task.id == this.dragSource.id){
          // splice goes here
          this.parentStack.splice(this.parentStack.indexOf(task),1);
          // push goes here
          this.tasks_started.push(task);
          console.log("added to Started Column");
        }
      }

    e.preventDefault();

    //this.storeTaskArrays();
  } 
  // handler for drop into Review column
  dropReviewColHandler(e: Event): void {

    console.log("Dropped into Review column");

      for(let task of this.parentStack){
        if (task.id == this.dragSource.id){
          // splice goes here
          this.parentStack.splice(this.parentStack.indexOf(task),1);
          // push goes here
          this.tasks_review.push(task);
          console.log("added to Review Column");
        }
      }

    e.preventDefault();

    //this.storeTaskArrays();
  } 
  // handler for drop into Complete column
  dropCompleteColHandler(e: Event): void {

    console.log("Dropped into Complete column");

      for(let task of this.parentStack){
        if (task.id == this.dragSource.id){
          // splice goes here
          this.parentStack.splice(this.parentStack.indexOf(task),1);
          // push goes here
          this.tasks_complete.push(task);
          console.log("added to Complete Column");
        }
      }

    e.preventDefault();

    //this.storeTaskArrays();
  } 

  /*storeTaskArrays(): void {
    // storing arrays with latest data in local storage
    window.localStorage.setItem("todo_tasks_Bachoti",JSON.stringify(this.tasks_todo));
    window.localStorage.setItem("started_tasks_Bachoti",JSON.stringify(this.tasks_started));
    window.localStorage.setItem("review_tasks_Bachoti",JSON.stringify(this.tasks_review));
    window.localStorage.setItem("complete_tasks_Bachoti",JSON.stringify(this.tasks_complete));
  }*/

  ngOnInit() {

  }

}

/* 
Sources:
“HTML DOM ParentElement Property.” W3Schools, https://www.w3schools.com/jsref/prop_node_parentelement.asp. 
*/