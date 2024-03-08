import { EventEmitter, Injectable } from '@angular/core';
import { Ingrident } from '../shared/ingrident.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  onChangedIngrident = new EventEmitter<Ingrident[]>();

  constructor() { }

  private ingridents:Ingrident[]=[
    new Ingrident("milk",12),
    new Ingrident("mango",2)
  ]

  getIngridents(){
    return this.ingridents.slice()
  }

  onAddIngrident(ingrident:Ingrident){
    this.ingridents.push(ingrident)
    this.onChangedIngrident.emit(this.ingridents.slice())
  }


}
