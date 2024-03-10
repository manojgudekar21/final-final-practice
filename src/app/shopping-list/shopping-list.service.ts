import { EventEmitter, Injectable } from '@angular/core';
import { Ingrident } from '../shared/ingrident.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  onEdit = new EventEmitter<number>()
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

  addedtoSHoppingList(ingrident:Ingrident[]){
    this.ingridents.push(...ingrident)
  }

  getIngridentAccToIndex(index:number){
    return this.ingridents[index]
  }
  deleteIngridentAccToIndex(index:number){
    this.ingridents.splice(index,1)
    this.onChangedIngrident.emit(this.ingridents.slice())
  }
  updateIngrident(index:number,newIngrident){
    this.ingridents[index] = newIngrident
    this.onChangedIngrident.next(this.ingridents.slice())
  }



}
