import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  constructor() { }

  donor1="Ansen"
  donor2="Francis"
  donor3="Pazhanilathu"
  donor5="Nest"
  donor4="Digital"

  ngOnInit(): void {
  }

}
