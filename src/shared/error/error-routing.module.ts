import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
    {
        path: '404',
        component: Error404Component,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }
