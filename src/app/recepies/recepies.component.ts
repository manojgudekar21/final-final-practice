import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Recepie } from './recepie.model';
import { RecepieService } from './recepie.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {

  constructor(private recepieService:RecepieService, private router:Router, private route:ActivatedRoute) { }
  

  ngOnInit(): void {
  }

  addRecepie(){
    this.router.navigate(['new'],{relativeTo: this.route})
  }


}
