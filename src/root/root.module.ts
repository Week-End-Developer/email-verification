import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './components/root.component';
import { RootRoutingModule } from './root-routing.module';


@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    RootRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
