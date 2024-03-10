import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingrident } from 'src/app/shared/ingrident.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  // @ViewChild('name') NameInput:ElementRef;
  // @ViewChild('amount') AmountInput:ElementRef;
  @ViewChild('formdata') data:NgForm
  
  subscription:Subscription;
  ingridentSelected:number;
  editMode=false
  newIngrident:Ingrident;

  constructor(public slServcie:ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.slServcie.onEdit.subscribe((index:number)=>{
      this.ingridentSelected = index
      this.editMode = true
      this.newIngrident = this.slServcie.getIngridentAccToIndex(this.ingridentSelected)
      this.data.setValue({
        name: this.newIngrident.name,
        amount: this.newIngrident.amount
      })
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onSubmit(){
    const Name = this.data.value.name
    const Amount = this.data.value.amount
    const newIngridnet = new Ingrident(Name,Amount)
    if(this.editMode){
      this.slServcie.updateIngrident(this.ingridentSelected,newIngridnet)
    }else{
      this.slServcie.onAddIngrident(newIngridnet)
    }
    this.editMode = false
    this.data.reset()
  }
  onDeleteIngrident(){
    this.slServcie.deleteIngridentAccToIndex(this.ingridentSelected)
    this.editMode = false
    this.data.reset()
  }

  onClear(){
    this.editMode = false
    this.data.reset()
  }

}
