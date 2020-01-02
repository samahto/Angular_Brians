import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'address', //you can modify this selector I have Modified the older one(app-address-component)
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
//to access in AddressCardComponent we have to use @input() and within the bracket we need to tell 
//that which property you want to access
// @Input() username:string 
@Input('ser') user:User 
isCollapsed:boolean=true;
  constructor() { 
    // this.user={
    //   name:this.username,
    //   address:"431 street canada",
    //   title:"manager",
    //   phoneNos:['77654323','776543555',
    //   '56666777']
    //   // phoneNos:[]
    // }
  }

  // ngOnInit() {
  //   this.user={
  //     name:this.username, //used username in the object
  //     address:"431 street canada",
  //     title:"manager",
  //     phoneNos:['77654323','776543555',
  //     '56666777']
  //   }
  // }

  toggleCollapse()
  {
    this.isCollapsed=!this.isCollapsed;
  }
   ngOnInit() {
    
  }

}
