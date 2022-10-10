import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  constructor() { }

  donorData=[{"name":"Ansen","Phone":9562661076},
  {"name":"Ansen","Phone":9562667876},
  {"name":"Firoz","Phone":9562674076},
  {"name":"Joji","Phone":9562661078},
  {"name":"Abin","Phone":9562661043},
  {"name":"Tom","Phone":9562661074},
]

  ngOnInit(): void {
  }

}
