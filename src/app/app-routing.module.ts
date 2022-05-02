import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatePersonComponent } from './person/create-person/create-person.component';
import { ListPersonsComponent } from './person/list-persons/list-persons.component';
import { ShowPersonComponent } from './person/show-person/show-person.component';
import { UpdatePersonComponent } from './person/update-person/update-person.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { ShowUserComponent } from './user/show-user/show-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'list-users',
    component : ListUsersComponent
  },
  {
    path : 'show-user/:id',
    component : ShowUserComponent
  },
  {
    path : 'update-user/:id',
    component : UpdateUserComponent
  },
  {
    path : 'create-user',
    component : CreateUserComponent
  },
  {
    path : 'list-persons',
    component : ListPersonsComponent
  },
  {
    path : 'show-person/:id',
    component : ShowPersonComponent
  },
  {
    path : 'create-person',
    component : CreatePersonComponent
  },
  {
    path : 'update-person/:id',
    component : UpdatePersonComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
