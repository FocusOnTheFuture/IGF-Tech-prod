import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'intro', component: IntroPage },

  { path:  'home', component: MainPage},
//   { path: "terms-and-conditions", component: TermosCondicoesComponent },
//   { path: "privacy-policy", component: PoliticaPrivacidadeComponent },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {  scrollPositionRestoration: 'top', bindToComponentInputs: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {}