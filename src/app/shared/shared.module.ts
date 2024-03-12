import { NgModule } from "@angular/core";
import { OpenMenuDirective } from "./open-menu.directive";
import { SpinnerComponent } from "./spinner/spinner.component";

@NgModule({
    declarations: [
    OpenMenuDirective,
    SpinnerComponent,
    ],
    imports: [
        
    ],
    exports: [
    OpenMenuDirective,
    SpinnerComponent,
    ]
})
export class SharedModule{}