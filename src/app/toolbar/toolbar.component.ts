import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private globals:Globals) { }

  ngOnInit() {
  }

  onKeyUp(event: any){
  	this.globals.searchQuery = event.target.value;
  }

}
