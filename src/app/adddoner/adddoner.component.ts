import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddoner',
  templateUrl: './adddoner.component.html',
  styleUrls: ['./adddoner.component.css']
})
export class AdddonerComponent implements OnInit {

  constructor() { }

  name=""
  bloodGroup=""
  dob=""
  lastDonation=""
  inlast=""
  lastCorona=""
  address=""
  pin=""
  mobile=""
  email=""

  readValues=()=>{
    console.log("Susscess")
  }

  ngOnInit(): void {
  }

}
