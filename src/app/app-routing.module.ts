import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from "@angular/router";
import { AuthComponent } from "~/app/auth/auth.component";
import { ClientListComponent } from "~/app/clients/client-list/client-list.component";
import { ClientInfoComponent } from "~/app/clients/client-info/client-info.component";
import { NewClientFormComponent } from "~/app/clients/new-client-form/new-client-form.component";
import { EditClientFormComponent } from "~/app/clients/edit-client-form/edit-client-form.component";
import { NavTabsComponent } from "~/app/nav-tabs/nav-tabs.component";
import { CalendarComponent } from "~/app/calendar/calendar.component";

// const routes: Routes = [
//   { path: '', component: AuthComponent },
//   { path: 'client', component: ClientInfoComponent, 
//     children: [
//       { path: 'edit-client-form', component: EditClientFormComponent, outlet: 'editClientForm'}
//     ] 
//   },
//   { path: 'nav-tabs',  component: NavTabsComponent, 
//     children: [
//       { path: 'client-list', component: ClientListComponent, outlet: 'clientList' },
//       { path: 'new-client-form', component: NewClientFormComponent, outlet: 'newClientForm' },
//       { path: 'calendar', component: CalendarComponent, outlet: 'calendar' }
//     ] 
//   }
// ];

const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'clients',
    children: [
      {
        path: 'nav-tabs',
        component: NavTabsComponent,
        children: [
          { path: 'client-list', component: ClientListComponent, outlet: 'clientList' },
          { path: 'new-client-form', component: NewClientFormComponent, outlet: 'newClientForm' },
          { path: 'calendar', component: CalendarComponent, outlet: 'calendar' }
        ]
      },
      { path: ':mode', component: EditClientFormComponent },
      { path: '', redirectTo: '/clients/nav-tabs', pathMatch: 'full'}
    ],
  },
  { path: 'client', component: ClientInfoComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}