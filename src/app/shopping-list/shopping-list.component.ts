import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingrident } from '../shared/ingrident.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  subscription:Subscription;
  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingridents = this.slService.getIngridents()
    this.subscription = this.slService.onChangedIngrident.subscribe((ingridents)=>{
      this.ingridents = ingridents
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  ingridents:Ingrident[]=[]

}
