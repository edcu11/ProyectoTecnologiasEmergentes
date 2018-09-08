import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  constructor(private httpService: HttpClient) { }

  arrProds: string [];

  ngOnInit() {
  	this.httpService.get('../../assets/products.json').subscribe(
  		data => {
  			this.arrProds = data as string [];
  			console.log(this.arrProds[1]);
  		},
  		(err: HttpErrorResponse) =>{
  			console.log(err.message);
  		}
  	);
  }

}
