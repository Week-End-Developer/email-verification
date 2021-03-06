import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { VerificationRoutingModule } from './verification.routing.module';
import { EmailVerificationSliderComponent } from './components/email-verification-slider/email-verification-slider.component';
import { EmailVerificationCheckSectionComponent } from './components/email-verification-check-section/email-verification-check-section.component';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
    declarations: [
        EmailVerificationComponent,
        EmailVerificationSliderComponent,
        EmailVerificationCheckSectionComponent
    ],
    imports: [
        CommonModule,
        VerificationRoutingModule,
        CountdownModule
    ],
    exports: [],
    providers: [],
})
export class VerificationModule { }