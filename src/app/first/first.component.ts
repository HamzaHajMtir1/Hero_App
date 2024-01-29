import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit{

  marvel ={
    name:"",
    power:"",
    imageURL:""
  }

  hero :any[] = [];

  constructor() {

  }
  ngOnInit(): void {

  }

  add(){
    this.hero.push(this.marvel);
    this.marvel = {
      name:"",
      power:"",
      imageURL:""
    }

    console.log(this.hero)
  }

}
