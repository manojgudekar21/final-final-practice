import { Component, OnInit } from '@angular/core';
import { Ingrident } from '../shared/ingrident.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ingridents:Ingrident[]=[
    new Ingrident("milk",12),
    new Ingrident("mango",2)
  ]

}
