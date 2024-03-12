import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, responsedata } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @ViewChild('formdata') formData: NgForm
  isLogin = true
  isLoadingMode = false
  error = null;

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const email = this.formData.value.email
    const password = this.formData.value.password

    let subobs: Observable<responsedata>;
    this.isLoadingMode = true

    if (this.isLogin) {
      subobs = this.authService.login(email, password)
    } else {
      subobs = this.authService.signUp(email, password)
    }

    subobs.subscribe((responseData) => {
      console.log(responseData)
      this.router.navigate(['/recepies'])
      this.isLoadingMode = false
    }, (errorRes) => {
      this.error = errorRes
      this.isLoadingMode = false
    })

  }

  onSwitchButton() {
    this.isLogin = !this.isLogin
  }

}
