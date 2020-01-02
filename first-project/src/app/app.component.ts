import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { TestService } from './test.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:User
  constructor(private SVC:TestService,private http:HttpClient){
    this.user= new User();
    this.user.name="Amit";
    this.user.address="Bangalore";
    this.user.designation="Senior Associate";
    this.user.phoneno=['7654328909','5643231321','9989887878']
    this.SVC.printToConsole("service is running")
  }
  ngOnInit(){
    // let obs=this.http.get('https://api.github.com/users/mojombo')
    //NOTE--when we make an rest api call like this
    //we won't get an object back as a response what we get is an object called observable (see the console
    //in the browser after running) we can pass to the observablea function that we want to execute when 
    //when an asynchronous operarion completes
    // console.log(obs)
    // let obs=this.http.get('https://api.github.com/users/mojombo')
    // obs.subscribe((response)=>console.log(response))

  }
}
