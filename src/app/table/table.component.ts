import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Globals } from '../globals';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  
  constructor(private httpService: HttpClient, private globals:Globals) { 
  	this.checkBoxesMode = "onClick";
  }

  arrProds: string [];
  checkBoxesMode: string;
  isMobile: boolean;

  //Search Variables
  sortType: string;
  sortReverse: boolean;

  ngOnInit() {
  	this.isMobile = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  	this.sortType = "name";
  	this.sortReverse = false;
  	this.globals.searchQuery = "";
  	this.httpService.get('../../assets/products.json').subscribe(
  		data => {
  			this.arrProds = data as string [];
  			this.arrProds.map(function(prod){
  				prod["selected"] = true;
  			});
  		},
  		(err: HttpErrorResponse) =>{
  			console.log(err.message);
  		}
  	);
  }

  @HostListener('window:resize', ['$event'])
  sizeChange(event) {
    if(window.innerWidth <= 800)
      this.isMobile = true;
    else
      this.isMobile = false;

    console.log(window.innerWidth);
  }

  checkAll() {
  	this.arrProds.map(function(prod){
  		prod["selected"] = true;
  	});
  }
}
