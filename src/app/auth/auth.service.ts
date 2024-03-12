import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, catchError, map, tap, throwError } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";

export interface responsedata {
    idToken: string,
    email: string,
    refershToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user = new BehaviorSubject<User>(null);
    private expiresTime:any;
    constructor(private http: HttpClient, private router: Router) { }

    autoLogin() {
        const user: {
            email: string,
            localId: string,
            tokenId: string,
            expiration: string
        } = JSON.parse(localStorage.getItem('userinfo'))
        if(!user){
            return
        }
        const expiration = new Date(user.expiration)
        const loadeduser = new User(user.email, user.localId, user.tokenId, expiration)
        if (loadeduser.token) {
            this.user.next(loadeduser)
            const expirationTime = new Date(user.expiration).getTime() - new Date().getTime()
            this.autoLogout(expirationTime)
        }
    }
    
    autoLogout(expiration:number){
        this.expiresTime = setTimeout(()=>{
            this.logout()
        },expiration)
    }

    signUp(email: string, password: string) {
        return this.http.post<responsedata>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCdRup3VGCZBXoatQ8-1KCrppbNfElcDrI',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }).pipe(catchError(this.resError), tap(responsedata => {
                this.userAuthenticate(responsedata.email, responsedata.localId, responsedata.idToken, +responsedata.expiresIn)
            }))
    }

    login(email: string, password: string) {
        return this.http.post<responsedata>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCdRup3VGCZBXoatQ8-1KCrppbNfElcDrI',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }).pipe(catchError(this.resError), tap(responsedata => {
                this.userAuthenticate(responsedata.email, responsedata.localId, responsedata.idToken, +responsedata.expiresIn)
            })
            )
    }

    logout() {
        this.user.next(null)
        this.router.navigate(['auth'])
        clearTimeout(this.expiresTime)
        localStorage.removeItem('userinfo')
    }

    private userAuthenticate(email: string, localId: string, tokenId: string, expiration: number) {
        const expirationid = new Date(new Date().getTime() + +expiration * 1000)
        const user = new User(email, localId, tokenId, expirationid)
        this.user.next(user)
        console.log(expiration)
        this.autoLogout(expiration*1000)
        localStorage.setItem('userinfo', JSON.stringify(user))
    }

    resError(errorRes: HttpErrorResponse) {
        let error = ''
        if (!errorRes || !errorRes.error.error.message) {
            error = 'no reason for error is detected'
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                error = 'Email Already Exists'
                break;
            case 'EMAIL_NOT_FOUND':
                error = 'email not found'
                break;
            case 'INVALID_PASSWORD':
                error = 'password is incorrect'
                break;
            case 'INVALID_LOGIN_CREDENTIALS':
                error = 'email or password is incorrect'
                break;
        }
        return throwError(error)
    }


}