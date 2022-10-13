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
    let data={
      "name":this.name,
      "bloodGroup":this.bloodGroup,
      "dob":this.dob,
      "lastDonation":this.lastDonation,
      "inlast":this.inlast,
      "lastCorona":this.lastCorona,
      "address":this.address,
      "pin":this.pin,
     " mobile":this.mobile,
      "email":this.email
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
