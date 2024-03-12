import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecepieService } from '../recepies/recepie.service';
import { Recepie } from '../recepies/recepie.model';
import { StorageService } from '../shared/storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {

  isLoggedin = false
  subscription:Subscription

  constructor(private http: HttpClient, private recepieService: RecepieService, private storageService:StorageService, private authService:AuthService) { }

  ngOnInit(): void {
    this.subscription = this.authService.user.subscribe((user)=>{
      this.isLoggedin = user? true : false
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onSaveData() {
    this.storageService.SaveData()
  }

  onFetchData() {
    this.storageService.FetchData().subscribe()
  }

  onLogout(){
    this.authService.logout()
  }


}
