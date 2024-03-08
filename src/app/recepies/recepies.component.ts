import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recepie } from './recepie.model';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  selectedRecepie:Recepie;

  receviedRecepie(recepie:Recepie){
    this.selectedRecepie = recepie;
  }

}
