import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ComponentsComponent } from './components/components.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import {SharedModule} from './shared/shared.module'


@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    ComponentsComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
