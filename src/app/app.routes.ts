import { Routes } from '@angular/router';
import { MainComponent } from './Pages/main/main.component';
import { ProComponent } from './Pages/pro/pro.component';
import { UnexistantComponent } from './Pages/unexistant/unexistant.component';

export const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'pro', component: ProComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: UnexistantComponent },
];