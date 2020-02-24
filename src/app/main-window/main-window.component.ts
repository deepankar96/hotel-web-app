import { Component, OnInit } from '@angular/core';
import { room } from 'src/model';
import {RoomServices} from '../../services/rooms-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {

  panelOpenState:boolean;
  rooms:room[] = [];
  private roomSub:Subscription;



  constructor(public RoomService:RoomServices) { }

  ngOnInit(): void {
    this.RoomService.getroom();
    this.roomSub = this.RoomService.getRoomListstner().subscribe(
      (rooms:room[])=>{
        this.rooms = rooms;
  });
}

}
