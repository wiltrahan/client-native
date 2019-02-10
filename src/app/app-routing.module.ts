import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from "@angular/router";
import { AuthComponent } from "~/app/auth/auth.component";
import { ClientListComponent } from "~/app/clients/client-list/client-list.component";

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'client-list', component: ClientListComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}