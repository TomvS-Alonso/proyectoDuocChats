import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { chatComponent } from './chat/chat.component';
import { loginComponent } from './login/login.component';
import { opcionesComponent } from './opciones/opciones.component';
import { perfilComponent } from './perfil/perfil.component';
import { principalComponent } from './principal/principal.component';
import { registroComponent } from './registro/registro.component';
import { solicitudesComponent } from './solicitudes/solicitudes.component';

const routes: Routes = [
  {
    path: '',
    component: loginComponent 
  },
  {
    path: 'principal',
    component: principalComponent
  },
  {
    path: 'chat',
    component: chatComponent
  },
  {
    path: 'solicitudes',
    component: solicitudesComponent
  },
  {
    path: 'opciones',
    component: opcionesComponent
  },
  {
    path: 'registro',
    component: registroComponent
  },
  {
    path: 'perfil',
    component: perfilComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
