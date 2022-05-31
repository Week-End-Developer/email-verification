import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './components/error404/error404.component';
import { FeatureRoutingModule } from './error-routing.module';

@NgModule({
    declarations: [
        Error404Component
    ],
    imports: [
        CommonModule,
        FeatureRoutingModule
    ],
    exports: [],
    providers: [],
})
export class ErrorModule { }