import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
   
  // message:string = new Date().toDateString();
  datemessage:string;
  somenumber : number =10;
  constructor() { 
    setInterval(()=>{
    let currentdate =new Date();
    this.datemessage=currentdate.toDateString()+''+currentdate.toLocaleTimeString();
  },1000);
  }

  ngOnInit() {
  }
  addTwoNumbers(a:number, b:number){
    return a+b;
  }

}
