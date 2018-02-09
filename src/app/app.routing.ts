import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
// Home
import { ListGruposComponent } from './Components/ListGrupos.component';
import { ListActividadesByIdComponent } from './Components/ListActividadesById.component';
import { ListActividadesComponent } from './Components/ListActividades.component';
import { ErrorComponent } from './Components/Error.component';
import { FormAltaUsuariosComponent } from './Components/FormAltaUsuarios.component';
import { DatosUsuarioComponent } from './Components/DatosUsuario.component';
import { LoginComponent } from './Components/Login.component';
import { BlancoComponent } from './Components/Blanco.component';
import { DivComponent } from './Components/Div.component';
import { ActivUsuarioComponent } from './Components/ActivUsuario.component';
import { HomeComponent } from './Components/Home.component';

const appRutas: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Home', component: HomeComponent },
    { path: 'ListGrupos', component: ListGruposComponent },
    { path: 'ListActividadesById/:idGrupo', component: ListActividadesByIdComponent },
    { path: 'ListActividades/:id', component: ListActividadesComponent },
    { path: 'AltaUsuarios', component: FormAltaUsuariosComponent },
    { path: 'AltaUsuarios/:id', component: FormAltaUsuariosComponent },
    { path: 'DatosUsuario/:id', component: DatosUsuarioComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'Blanco/:id', component: BlancoComponent },
    { path: 'ActivUsu', component: ActivUsuarioComponent },
    { path: '**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];       // Carga servs del router pa q rutas funcionen
export const routing: ModuleWithProviders = RouterModule.forRoot(appRutas);
