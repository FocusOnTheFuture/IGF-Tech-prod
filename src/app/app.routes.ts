import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { NgModule } from '@angular/core';
import { QuemSomos } from './pages/quem-somos/quem-somos';
import { Solucoes } from './pages/solucoes/solucoes';
import { Produtos } from './pages/produtos/produtos';
import { Contatos } from './pages/contatos/contatos';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainPage},
  
  { path: "quem-somos", component: QuemSomos},
  { path: "solucoes", component: Solucoes },
  { path: "produtos", component: Produtos },
  { path: "contatos", component: Contatos },
  
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', bindToComponentInputs: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {}