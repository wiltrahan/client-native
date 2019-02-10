import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientInfoComponent } from './clients/client-info/client-info.component';
import { NewClientFormComponent } from './clients/new-client-form/new-client-form.component';
import { EditClientFormComponent } from './clients/edit-client-form/edit-client-form.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AuthComponent } from './auth/auth.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule
    ],
    declarations: [
        AppComponent,
        ClientListComponent,
        ClientInfoComponent,
        NewClientFormComponent,
        EditClientFormComponent,
        CalendarComponent,
        AuthComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
