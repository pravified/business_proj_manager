import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Person } from '../../model/person';
import { PeopleService } from '../../model/person-service';


@Component({
  selector: 'app-people-add',
  templateUrl: './people-add.component.html',
  styleUrls: ['./people-add.component.css']
})
export class PeopleAddComponent implements OnInit {

  person: Person;

  constructor(
    private peopleService: PeopleService) { 
      this.person = new Person();
  }

  ngOnInit(): void {
    // incrementing id on new add
    this.person = this.peopleService.incrementId(this.person);

  }

  savePerson() {
    //adding new person to array
      this.peopleService.addPerson(this.person);
      console.log(this.person.fName+" "+this.person.lName);
    // storing state of array in local storage
      window.localStorage.setItem("people_list_Bachoti",JSON.stringify(this.peopleService.getAllPeople()));
  }

}
