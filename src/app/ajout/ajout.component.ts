import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.css'
})
export class AjoutComponent implements OnInit{
  marvel ={
    name:"",
    power:"",
    imageURL:""
  }

  constructor(public _shared:SharedService) {

  }
  ngOnInit(): void {

  }

  add(){
    this._shared.hero.push(this.marvel);
    this.marvel = {
      name:"",
      power:"",
      imageURL:""
    }
  }
}
