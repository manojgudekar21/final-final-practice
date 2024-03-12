import { Injectable } from "@angular/core";
import { RecepieService } from "../recepies/recepie.service";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Recepie } from "../recepies/recepie.model";
import { exhaustMap, map, take, tap } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(private http: HttpClient, private recepieService: RecepieService, private authService:AuthService) { }

    SaveData() {
        const recepies = this.recepieService.getRecepies()
        this.http.put('https://final-final-practice-default-rtdb.firebaseio.com/posts.json', recepies)
            .subscribe((recepies) => {
                console.log(recepies)
            })
    }

    FetchData() {
        return this.authService.user.pipe(take(1),exhaustMap(user=>{
            return this.http.get<Recepie[]>('https://final-final-practice-default-rtdb.firebaseio.com/posts.json',
            {
                params: new HttpParams().set('auth', user.token)
            })

        }),map(recepies=>{
            return recepies.map(recepie=>{
                return {...recepie, ingridents:recepie.ingridents? recepie.ingridents : []}
            })
        }),tap(recepies=>{
            this.recepieService.recepiesFromdb(recepies)
        }))  
    }

}