import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app';

import { routing } from './app.routes';

import { HomeComponent } from './components/home';
import { CardComponent } from './components/card';
import { PanelComponent } from './components/panel';

@NgModule({
    imports: [ BrowserModule, HttpModule, routing ],
    declarations: [
        AppComponent,
        HomeComponent,
        CardComponent,
        PanelComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [  ]
})
export class AppModule {}