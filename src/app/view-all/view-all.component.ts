import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
    fetchData=()=>{
      this.myapi.viewBlood().subscribe(
        (data)=>{
          this.fetchData=data
        }
      )
    }
  

  donorData:any=[

  ]

  ngOnInit(): void {
  }

}
