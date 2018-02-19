import { Routes, RouterModule, Router } from '@angular/router';
import { AboutComponent, PortafolioComponent, PortfolioItemComponent,SearchComponent } from './components/index.paginas';

const routes: Routes = [
  { path: 'home', component: PortafolioComponent},
  { path: 'producto/:id', component: PortfolioItemComponent},
  { path: 'about', component: AboutComponent },
  { path: 'buscar/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }];

export const routedComponents = RouterModule.forRoot(routes, {useHash:true});
