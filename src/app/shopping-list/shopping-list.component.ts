import { Component, OnInit } from '@angular/core';
import {Ingrdiant} from '../shared/ingrdiant.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingerdiants : Ingrdiant [] =[
    new Ingrdiant('vange', 2),
    new Ingrdiant('kande', 3)
  ];
  constructor() { }

  ngOnInit(): void {
   
  }

  onIngediantAdded(ingerdiant:any){
    console.log(ingerdiant);    
    this.ingerdiants.push(ingerdiant);
  }

}
