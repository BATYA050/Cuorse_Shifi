import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({

  selector: 'Schedule',
  templateUrl: './Schedule.html',
  styleUrls: ['./Schedule.css']
})
export class Schedule   {
  constructor( private router : Router) { }
  ngOnInit(): void {
  }
}