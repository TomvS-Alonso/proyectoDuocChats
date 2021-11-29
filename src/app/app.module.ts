import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { principalComponent } from './principal/principal.component';
import { loginComponent } from './login/login.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { chatComponent } from './chat/chat.component';
import { registroComponent } from './registro/registro.component';
import { perfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    principalComponent,
    loginComponent,
    NavBarComponent,
    chatComponent,
    registroComponent,
    perfilComponent 
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy,}],
  bootstrap: [AppComponent],
})
export class AppModule {}
