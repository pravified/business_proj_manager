import { Component, OnInit } from '@angular/core';

import { PEOPLE } from '../../model/mock-persons';

import { Person } from '../../model/person';

import { PeopleService } from '../../model/person-service'


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people: any;

  constructor(private peopleService: PeopleService) { 
  }

  ngOnInit(): void {
    this.people = this.peopleService.getAllPeople();
  }

}
