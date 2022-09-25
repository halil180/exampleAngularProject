import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  title:string = "Example project"
  constructor() { }

  ngOnInit(): void {
    console.log("first")
    this.setTitle()
  }

  setTitle(){
    this.title = "asd";
  }

}
