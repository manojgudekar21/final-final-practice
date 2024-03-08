import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() datasended = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onNavigate(data:string){
    this.datasended.emit(data)
  }

}
