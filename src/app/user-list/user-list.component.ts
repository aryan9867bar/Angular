import { Component, OnInit } from '@angular/core';
import { UserService } from "./user-list.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList:any[];
  photos:any[];
  
  constructor(private userService:UserService) {

    this.userList = [];
    this.photos = [];


    this.userService.getUser().subscribe(user => {
      console.log(user.data);
      this.userList = user.data;
    });

    this.userService.getPhoto().subscribe(photo => {
      for(let i = 0; i < photo.length; i++) {
         if(i < 1000) {
           this.photos.push(photo[i]);
         }
      }
      console.log(photo);
    })
   }

  ngOnInit(): void {
  }

}
