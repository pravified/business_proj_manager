import { Injectable } from '@angular/core';

import { Task } from './task';

import { TASKS_TODO, TASKS_STARTED, TASKS_REVIEW, TASKS_COMPLETE } from './mock-tasks';

import { Person } from './person';

import { PEOPLE } from './mock-persons';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

    // getters and setters

    getTasksToDo(): Task[] {
        return TASKS_TODO;
      }

    setTasksToDo(tasks: Task[]): void {
      let taskArray: Task[] = this.getTasksToDo();
      for(let task of tasks){
        taskArray.push(task);
      }
    }

    getStartedTasks(): Task[] {
        return TASKS_STARTED;
    }

    setTasksStarted(tasks: Task[]): void {
      let taskArray: Task[] = this.getStartedTasks();
      for(let task of tasks){
        taskArray.push(task);
      }
    }

    getReviewTasks(): Task[] {
        return TASKS_REVIEW;
    }

    setTasksReview(tasks: Task[]): void {
      let taskArray: Task[] = this.getReviewTasks();
      for(let task of tasks){
        taskArray.push(task);
      }
    }

    getCompleteTasks(): Task[] {
        return TASKS_COMPLETE;
    }

    setTasksComplete(tasks: Task[]): void {
      let taskArray: Task[] = this.getCompleteTasks();
      for(let task of tasks){
        taskArray.push(task);
      }
    }

    getAllTasks(): Task[] {
        var allTasks: Task[] = [];
        allTasks = (this.getTasksToDo()).concat(this.getStartedTasks())
        .concat(this.getReviewTasks()).concat(this.getCompleteTasks());
        return allTasks;
    }

    getPersons(): Person[] {
        return PEOPLE;
    }
    // calculate and set id of latest record
    incrementId(task: Task): Task {

      let all_tasks:Task[] = this.getAllTasks();

      let highestId = 0;

      highestId = (all_tasks && all_tasks.length > 0) ? 
        all_tasks[0].id : all_tasks[all_tasks.length - 1].id;

      task.id = highestId + 1;

      return task;
    }
    // add new task to To Do array
    enterTask(task: Task): void {
      let tasks_to_do:Task[] = this.getTasksToDo();
      tasks_to_do.unshift(task);
    }
    
    getAssigneeNames(): string[] {
      let people:Person[] = this.getPersons();
      let values: string[] = people.map(i => {return i.fName+" "+i.lName});
      
      // remove duplicates
      return values.filter((v, index) => 
        {return values.indexOf(v) == index});
    }

}

/*
Sources:
Hadzhiev, Borislav. “Type 'Undefined' Is Not Assignable to Type in Typescript.” Bobbyhadz, https://bobbyhadz.com/blog/typescript-type-undefined-is-not-assignable-to-type. 
“Array.prototype.concat() - Javascript: MDN.” JavaScript | MDN, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat. 
“Array.prototype.unshift() - Javascript: MDN.” JavaScript | MDN, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift. 
*/