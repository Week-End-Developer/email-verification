import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [

  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },

  // {
  //   path: 'login',
  //   canActivate: [SecureInnerPagesGuard],
  // },

  {
    path: 'email-verification',
    loadChildren: () => import('../features/verification/verification.module').then(m => m.VerificationModule)
  },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule { }
