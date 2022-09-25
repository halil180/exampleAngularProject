import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // users:string[] = [];

  users: { name: string, age: number }[] = []
  constructor() { }

  ngOnInit(): void {
    // this.users = ["halil",'john','alex']
    this.users = [
      {
        name:'Halil',
        age:27
      },
      {
        name:'john',
        age:23
      },
      {
        name:'alex',
        age:15
      }
    ]
  }

}
