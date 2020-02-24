import { HttpClient } from "@angular/common/http";
import { room } from 'src/model';
import {Subject} from 'rxjs'
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})


export class RoomServices{
    noOfRooms:number;
    rooms:room[] = [];
    private roomUpdated = new Subject<room[]>();



    constructor(private http:HttpClient){
        
    }
    url:string = "http://localhost:3000/getRooms";

    getRoomListstner(){
        return this.roomUpdated.asObservable();
    }

    getroom(){
        this.http.get<{message:string,post}>(this.url).subscribe((postData)=>{
            this.rooms = postData.post;
            this.roomUpdated.next([...this.rooms])
          });
    }
}