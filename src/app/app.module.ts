import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { InfoComponent } from "./info/info.component";
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from "./user-list/user-list.service";


@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
