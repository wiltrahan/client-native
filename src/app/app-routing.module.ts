import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from "@angular/router";
import { AuthComponent } from "~/app/auth/auth.component";
import { ClientListComponent } from "~/app/clients/client-list/client-list.component";
import { ClientInfoComponent } from "~/app/clients/client-info/client-info.component";
import { NewClientFormComponent } from "~/app/clients/new-client-form/new-client-form.component";
import { EditClientFormComponent } from "~/app/clients/edit-client-form/edit-client-form.component";

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'client-list', component: ClientListComponent },
  { path: 'client', component: ClientInfoComponent },
  { path: 'new-client-form', component: NewClientFormComponent },
  { path: 'edit-client-form', component: EditClientFormComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}