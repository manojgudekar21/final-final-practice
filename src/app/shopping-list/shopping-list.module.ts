import { NgModule } from "@angular/core";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        ShoppingListRoutingModule
    ],
    exports: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ]
})
export class ShoppingListModule { }