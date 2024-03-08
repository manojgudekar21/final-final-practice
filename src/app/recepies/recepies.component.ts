import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Recepie } from './recepie.model';
import { RecepieService } from './recepie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit,OnDestroy {

  constructor(private recepieService:RecepieService) { }
  
  subscription:Subscription;
  selectedRecepie:Recepie;

  ngOnInit(): void {
    this.subscription = this.recepieService.onClickedRecepie.subscribe((recepie:Recepie)=>{
      this.selectedRecepie = recepie
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  


}
