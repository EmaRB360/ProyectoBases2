import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import {LoginComponent} from './login/login.component';
import {InstructorPanelComponent} from './instructor-panel/instructor-panel.component';
import {ClientPanelComponent} from './client-panel/client-panel.component';
import {SupportPanelComponent} from './support-panel/support-panel.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'instructor-panel', component: InstructorPanelComponent },
  { path: 'client-panel', component: ClientPanelComponent },
  { path: 'support-panel', component: SupportPanelComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];
