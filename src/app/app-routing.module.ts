import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecepiesComponent } from './recepies/recepies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { StartComponent } from './recepies/start/start.component';
import { RecepieDetailsComponent } from './recepies/recepie-details/recepie-details.component';
import { EditComponent } from './recepies/recepie-details/edit/edit.component';
import { AuthComponent } from './auth/auth.component';
import { ResolverService } from './shared/resolver.service';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'recepies', pathMatch: 'full' },
  { path: 'recepies', component: RecepiesComponent, canActivate:[AuthGuardService], children:[
    {path: 'new',component:EditComponent},
    {path: '',component:StartComponent},
    {path: ':id',component: RecepieDetailsComponent, resolve:[ResolverService]},
    {path: ':id/edit',component: EditComponent, resolve:[ResolverService]},
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  {path: "auth", component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
