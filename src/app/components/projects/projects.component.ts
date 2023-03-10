import { Component, OnInit } from '@angular/core';

import { PEOPLE } from '../../model/mock-persons';

import { Person } from '../../model/person';

import { PeopleService } from '../../model/person-service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  people: any;
  dragSource: any;
  currentPerson: any;
  // array of people not yet assigned
  unassigned: any[];

  constructor(private peopleService: PeopleService) {
    this.people = this.peopleService.getAllPeople();

    this.unassigned = [];
   }

  // handlers for dragging people profiles
  dragStartHandler(e: Event): void {
    this.dragSource = e.target as HTMLDivElement;
    console.log("this.dragSource.id: "+this.dragSource.id);

    for(let person of this.unassigned){
      if (person.personId == this.dragSource.id){
        this.currentPerson = person;
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
  dragEnterProjFieldHandler(e: Event): void {
    console.log("Entering field");
    e.preventDefault();
  }

  dragOverProjHandler(e: Event): void{
    console.log("Dragging over field");
    e.preventDefault();
  }
  // drop handler for first project
  dropProj01Handler(e: Event): void {

    console.log("Dropped into Proj01 field");

    let proj01List = document.getElementById("proj01List") as HTMLElement;

    let targetHTML = `<div>${this.currentPerson.fName}&nbsp;${this.currentPerson.lName}&nbsp;(${this.currentPerson.jobTitle})&nbsp;&lt;${this.currentPerson.email}&gt;</div>`;
    //`<mat-card><mat-card-title>${this.currentPerson.fName}&nbsp;${this.currentPerson.lName}</mat-card-title><mat-card-subtitle>${this.currentPerson.jobTitle}</mat-card-subtitle><mat-card-content>${this.currentPerson.email}</mat-card-content></mat-card>`;
    
    if(proj01List){
      proj01List.innerHTML += targetHTML;

      for(let i=0;i<this.unassigned.length;i++){
        if (this.unassigned[i].personId == this.currentPerson.personId){
          // splice goes here
          this.unassigned.splice(i,1);
        }
      }

      console.log("added to: proj01List");
    }

    e.preventDefault();

}

// drop handler for second project
dropProj02Handler(e: Event): void {

  console.log("Dropped into Proj02 field");

  let proj02List = document.getElementById("proj02List") as HTMLElement;

  let targetHTML = `<div>${this.currentPerson.fName}&nbsp;${this.currentPerson.lName}&nbsp;(${this.currentPerson.jobTitle})&nbsp;&lt;${this.currentPerson.email}&gt;</div>`;
  //`<mat-card><mat-card-title>${this.currentPerson.fName}&nbsp;${this.currentPerson.lName}</mat-card-title><mat-card-subtitle>${this.currentPerson.jobTitle}</mat-card-subtitle><mat-card-content>${this.currentPerson.email}</mat-card-content></mat-card>`;
    
  if(proj02List){
    proj02List.innerHTML += targetHTML;

    for(let i=0;i<this.unassigned.length;i++){
      if (this.unassigned[i].personId == this.currentPerson.personId){
        // splice goes here
        this.unassigned.splice(i,1);
      }
    }

    console.log("added to: proj02List");
  }

  e.preventDefault();

}

// drop handler for third project
dropProj03Handler(e: Event): void {

  console.log("Dropped into Proj03 field");

  let proj03List = document.getElementById("proj03List") as HTMLElement;

  let targetHTML = `<div>${this.currentPerson.fName}&nbsp;${this.currentPerson.lName}&nbsp;(${this.currentPerson.jobTitle})&nbsp;&lt;${this.currentPerson.email}&gt;</div>`;
  //`<mat-card><mat-card-title>${this.currentPerson.fName}&nbsp;${this.currentPerson.lName}</mat-card-title><mat-card-subtitle>${this.currentPerson.jobTitle}</mat-card-subtitle><mat-card-content>${this.currentPerson.email}</mat-card-content></mat-card>`;
    
  if(proj03List){
    proj03List.innerHTML += targetHTML;

    for(let i=0;i<this.unassigned.length;i++){
      if (this.unassigned[i].personId == this.currentPerson.personId){
        // splice goes here
        this.unassigned.splice(i,1);
      }
    }

    console.log("added to: proj03List");
  }

  e.preventDefault();

}

  ngOnInit(): void {

    // populating unassigned array with people
    for(let person of this.people){
      this.unassigned.push(person);
    }

  }

}

/*
Sources:
“Array.prototype.splice() - Javascript: MDN.” JavaScript | MDN, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice. 
*/