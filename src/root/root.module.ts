import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './components/root.component';
import { RootRoutingModule } from './root-routing.module';
import { SecureInnerPagesGuard } from './services/secure-inner-pages.guard';
import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    RootRoutingModule
  ],
  providers: [
    SecureInnerPagesGuard,
    AuthGuard,
    AuthService
  ],
  bootstrap: [RootComponent]
})
export class RootModule { }
