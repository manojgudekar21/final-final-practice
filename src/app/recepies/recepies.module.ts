import { NgModule } from "@angular/core";
import { EditComponent } from "./recepie-details/edit/edit.component";
import { RecepieDetailsComponent } from "./recepie-details/recepie-details.component";
import { RecepieItemComponent } from "./recepie-list/recepie-item/recepie-item.component";
import { RecepieListComponent } from "./recepie-list/recepie-list.component";
import { StartComponent } from "./start/start.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { RecepiesRoutingModule } from "./recepies-routing-module";
import { RecepiesComponent } from "./recepies.component";

@NgModule({
    declarations: [
        RecepiesComponent,
        RecepieDetailsComponent,
        EditComponent,
        RecepieListComponent,
        RecepieItemComponent,
        StartComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        RecepiesRoutingModule
    ],
    exports: [
        RecepieDetailsComponent,
        EditComponent,
        RecepieListComponent,
        RecepieItemComponent,
        StartComponent,
        RouterModule
    ]
})
export class RecepiesModule {

}