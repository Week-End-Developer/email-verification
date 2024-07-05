import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureInnerPagesGuard } from './services/secure-inner-pages.guard';

export const routes: Routes = [
  {
    path: 'email-verification',
    loadChildren: () => import('../features/verification/verification.module')
    .then(m => m.VerificationModule)
  },
  {
    path: 'todo-list',
    loadChildren: () => import('../shared/todo-list/todo-list.module')
    .then(m => m.TodoListModule),
    canActivate: [SecureInnerPagesGuard],
  },
  {

    path: 'error',
    loadChildren: () =>
      import('../shared/error/error.module').then((m) => m.ErrorModule)
  },
  {
    path: '', redirectTo: 'email-verification', pathMatch: 'full'
  },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule { }
