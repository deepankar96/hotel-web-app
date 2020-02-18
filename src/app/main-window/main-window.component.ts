import { Component, OnInit,Input } from '@angular/core';
import { room } from 'src/model';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {

  panelOpenState:boolean;
  @Input() rooms:room[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
