import { EventEmitter, Injectable } from '@angular/core';
import { Recepie } from './recepie.model';
import { Ingrident } from '../shared/ingrident.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecepieService {

  onChangedRecepie = new Subject<Recepie[]>()
  constructor() { }

  private recepies:Recepie[]=[] 

  getRecepies(){
    return this.recepies.slice()
  }

  getRecepiebyID(id:number){
    return this.recepies[id]
  }
  updateRecepie(index:number,newRecepie:Recepie){
    this.recepies[index] = newRecepie
    this.onChangedRecepie.next(this.recepies.slice())
  }
  AddRecepie(recepie:Recepie){
    this.recepies.push(recepie)
    this.onChangedRecepie.next(this.recepies.slice())
  }
  deleteRecepie(index:number){
    this.recepies.splice(index,1)
    this.onChangedRecepie.next(this.recepies.slice())
  }
  recepiesFromdb(recepies:Recepie[]){
    this.recepies = recepies
    this.onChangedRecepie.next(this.recepies.slice())
  }

}
