import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admission',
    loadChildren: () =>
      import('./modules/admission/admission.module').then((m) => m.AdmissionModule),
  },
  {
    path: '**',
    redirectTo: 'admission'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
