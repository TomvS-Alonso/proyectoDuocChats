import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { loginComponent } from './login/login.component';
import { principalComponent } from './principal/principal.component';

const routes: Routes = [
  {
    path: 'login',
    component: loginComponent 
  },
  {
    path: 'principal',
    component: principalComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
