import { EventEmitter, Injectable } from '@angular/core';
import { Recepie } from './recepie.model';
import { Ingrident } from '../shared/ingrident.model';

@Injectable({
  providedIn: 'root'
})
export class RecepieService {

  onChangedRecepie = new EventEmitter<Recepie[]>()
  constructor() { }

  private recepies:Recepie[]=[
    new Recepie("Custurd","its so delicious","https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/fruit-custard-recipe.jpg",
    [
      new Ingrident("anar",2),
      new Ingrident("apple",1)
    ]),
    new Recepie("Fruit Salad","its so delicious","https://hips.hearstapps.com/hmg-prod/images/pasta-salad-horizontal-jpg-1522265695.jpg?crop=1xw:0.8435812837432514xh;center,top&resize=1200:*",
    [
      new Ingrident("pinneapple",1),
      new Ingrident("curd",1)
    ]),
  ] 

  getRecepies(){
    return this.recepies.slice()
  }

  getRecepiebyID(id:number){
    return this.recepies[id]
  }
  updateRecepie(index:number,newRecepie:Recepie){
    this.recepies[index] = newRecepie
    this.onChangedRecepie.emit(this.recepies.slice())
  }
  AddRecepie(recepie:Recepie){
    this.recepies.push(recepie)
    this.onChangedRecepie.next(this.recepies.slice())
  }
  deleteRecepie(index:number){
    this.recepies.splice(index,1)
    this.onChangedRecepie.emit(this.recepies.slice())
  }

}
