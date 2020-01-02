import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  // constructor(private svc:TestService) { 
  //   this.svc.printToConsole("coming from inner view component");
  // }
  response:any;
  username:string=""
  constructor(private http:HttpClient) { 
  }
   
  ngOnInit() {
    //NOTE--when we make an rest api call like this
    //we won't get an object back as a response what we get is an object called observable (see the console
    //in the browser after running) we can pass to the observablea function that we want to execute when 
    //when an asynchronous operarion completes
    // console.log(obs)
    // let obs=this.http.get('https://api.github.com/users/mojombo')//here we are passing the user so it
    //it will not work directly if we click on search button
    // obs.subscribe((response)=>console.log(response))

  }
  search(){
    this.http.get('https://api.github.com/users/'+this.username).//put slash after users otherwise it will
    //throw error
    subscribe((response)=>{
     this.response=response;
     console.log(response)
    })
  }

}
