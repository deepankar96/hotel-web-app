import { Component } from '@angular/core';
import {room} from '../model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotel-web-application';
  rooms: room[] = [];
  noOfRooms:number;
  url:string = "http://localhost:3000/getRooms";

constructor(private http:HttpClient){
  this.http.get<{message:string,post}>(this.url).subscribe((postData)=>{
    this.noOfRooms=postData.post.length;
    this.rooms = postData.post;
  });
    }
  
}
