import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recepie } from "../recepies/recepie.model";
import { Observable } from "rxjs";
import { RecepieService } from "../recepies/recepie.service";
import { StorageService } from "./storage.service";

@Injectable({
    providedIn: 'root'
})
export class ResolverService implements Resolve<Recepie[]>{

    constructor(private recepieService: RecepieService, private storageService: StorageService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recepie[] | Observable<Recepie[]> | Promise<Recepie[]> {
        const recepies:Recepie[] = this.recepieService.getRecepies()
        if (recepies.length === 0) {
            return this.storageService.FetchData()
        } else {
            return recepies
        }
    }
}