import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-final-pract';

  onreceviedData='recepies'

  onRecevieData(data:string){
    this.onreceviedData = data
  }

}
