import { Injectable } from '@angular/core';

import { Task } from './task';

import { Person } from './person';

import { PEOPLE } from './mock-persons';

@Injectable({
    providedIn: 'root'
})
export class PeopleService {

    // getter and setter

    getAllPeople(): Person[] {
        return PEOPLE;
    }

    setAllPeople(people: Person[]): void {
        for(let person of people){
            let isPresentInPEOPLE: boolean = false;
            for(let mockPerson of PEOPLE){
                if (mockPerson.personId == person.personId){
                    isPresentInPEOPLE = true;
                }
            }
            if(!isPresentInPEOPLE){
                this.addPerson(person);
            }
        }
    }
    // calculate and set id of latest record
    incrementId(person: Person): Person {
        let people:Person[] = this.getAllPeople();

        let highestId = 0;

        highestId = (people && people.length > 0) ? 
            people[people.length - 1].personId : 0;

        person.personId = highestId + 1;

        return person;
    }
    // add new person to array
    addPerson(person: Person): void {
        let people:Person[] = this.getAllPeople();

        people.push(person);
    }

}