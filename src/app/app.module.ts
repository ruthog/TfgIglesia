import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';   // ReactiveFormsModule
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';  // para angular 5, VR
import { CommonModule } from '@angular/common'; // para que funcionen *ngIf, *ngFor ...

// import { HttpClient } from '@angular/common/http';    // Victor Robles
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { JsonpModule, Jsonp, Response } from '@angular/http';
// import { AuthInterceptor } from './Modelos/AuthInterceptor';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

// Componentes
import { AppComponent } from './app.component';
import { ListGruposComponent } from './Components/ListGrupos.component';
import { ListActividadesComponent } from './Components/ListActividades.component';
import { ListActividadesByIdComponent } from './Components/ListActividadesById.component';
import { FormAltaUsuariosComponent } from './Components/FormAltaUsuarios.component';
import { DatosUsuarioComponent } from './Components/DatosUsuario.component';
import { ActivUsuarioComponent } from './Components/ActivUsuario.component';
import { LoginComponent } from './Components/Login.component';
import { BlancoComponent } from './Components/Blanco.component';
import { HomeComponent } from './Components/Home.component';
import { DivComponent } from './Components/Div.component';
import { ErrorComponent } from './Components/Error.component';

// Servicios
import { GruposServicio } from './Servicios/grupos.service';
import { ActividadesServicio } from './Servicios/Actividades.service';
import { UsuariosServicio } from './Servicios/Usuarios.service';
import { ActivParticipanteServicio } from './Servicios/ActivParticipante.service';

@NgModule({
  declarations: [
    AppComponent,
    ListGruposComponent,
    ListActividadesByIdComponent,
    DivComponent,
    ErrorComponent,
    ListActividadesComponent,
    FormAltaUsuariosComponent,
    DatosUsuarioComponent,
    ActivUsuarioComponent,
    LoginComponent,
    BlancoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    HttpClientModule,    // para angular 5
    CommonModule      // para *ngIf, *ngFor ...
    // ReactiveFormsModule,
  ],
  providers: [
    appRoutingProviders,
    GruposServicio,
    ActividadesServicio,
    UsuariosServicio,
    ActivParticipanteServicio
    /*, { provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true, }*/

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
