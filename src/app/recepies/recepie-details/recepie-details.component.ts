import { Component, Input, OnInit } from '@angular/core';
import { Recepie } from '../recepie.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.component.html',
  styleUrls: ['./recepie-details.component.css']
})
export class RecepieDetailsComponent implements OnInit {

  @Input() recepie:Recepie;

  id:number;

  constructor(private recepieService:RecepieService,private slService:ShoppingListService, private router:Router,private route:ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id = params['id']
      this.recepie = this.recepieService.getRecepiebyID(this.id)
    })
  }

  toShoppingList(){
    this.slService.addedtoSHoppingList(this.recepie.ingridents)
  }

  onEdit(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }

  onDelete(){
    this.recepieService.deleteRecepie(this.id)
    this.router.navigate(['recepies'])
  }
}
