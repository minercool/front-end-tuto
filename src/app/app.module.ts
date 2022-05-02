import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { ShowUserComponent } from './user/show-user/show-user.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { FormsModule } from '@angular/forms';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { ListPersonsComponent } from './person/list-persons/list-persons.component';
import { ShowPersonComponent } from './person/show-person/show-person.component';
import { DeletePersonComponent } from './person/delete-person/delete-person.component';
import { CreatePersonComponent } from './person/create-person/create-person.component';
import { UpdatePersonComponent } from './person/update-person/update-person.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ListUsersComponent,
    ShowUserComponent,
    UpdateUserComponent,
    CreateUserComponent,
    ListPersonsComponent,
    ShowPersonComponent,
    DeletePersonComponent,
    CreatePersonComponent,
    UpdatePersonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
