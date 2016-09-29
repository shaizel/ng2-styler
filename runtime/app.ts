import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { enableProdMode } from '@angular/core';

enableProdMode();

@Component({
    selector: 'test-app',
    template: `
        <router-outlet></router-outlet>
    `,
})

export class AppComponent { }