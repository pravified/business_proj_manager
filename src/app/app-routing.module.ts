import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 
    './components/home/home.component';
import { TasksBoardComponent } from 
    './components/tasks-board/tasks-board.component';
import { TasksEntryComponent } from 
    './components/tasks-entry/tasks-entry.component';
import { PeopleListComponent } from 
    './components/people-list/people-list.component';
import { PeopleAddComponent } from 
    './components/people-add/people-add.component';
import { ProjectsComponent } from 
    './components/projects/projects.component';

// page routing functionality

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full'},
  { path: 'home',   component: HomeComponent },
  { path: 'tasks',     component: TasksBoardComponent ,
    children: [
      { path: 'entry', component: TasksEntryComponent }
     ]
  },
  { path: 'people',     component: PeopleListComponent ,
    children: [
      { path: 'add', component: PeopleAddComponent }
     ]
  },
  { path: 'projects', component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
