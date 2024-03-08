import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingrident } from 'src/app/shared/ingrident.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name') NameInput:ElementRef;
  @ViewChild('amount') AmountInput:ElementRef;

  constructor(public slServcie:ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddIngrident(){
    const Name = this.NameInput.nativeElement.value
    const Amount = this.AmountInput.nativeElement.value
    const newIngridnet = new Ingrident(Name,Amount)
    this.slServcie.onAddIngrident(newIngridnet)
  }

}
