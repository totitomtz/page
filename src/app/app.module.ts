import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './content/inicio/inicio.component';

/*servicio*/
import { CargarscriptsService } from './cargarscripts.service';
/* rutas*/
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { NosotrosComponent } from './content/nosotros/nosotros.component';
import { ServiciosComponent } from './content/servicios/servicios.component';
import { ContactoComponent } from './content/contacto/contacto.component';
import { MantenimientoComponent } from './content/servicios/mantenimiento/mantenimiento.component';
import { ComponentespcComponent } from './content/servicios/componentespc/componentespc.component';
import { CotizacionesComponent } from './content/servicios/cotizaciones/cotizaciones.component';
import { ProcesadoresComponent } from './content/servicios/componentespc/procesadores/procesadores.component';
import { TarjetasGraficasComponent } from './content/servicios/componentespc/tarjetas-graficas/tarjetas-graficas.component';
import { MemoriasRamComponent } from './content/servicios/componentespc/memorias-ram/memorias-ram.component';
import { MemoriasSsdHddComponent } from './content/servicios/componentespc/memorias-ssd-hdd/memorias-ssd-hdd.component';
import { FuentesDePoderComponent } from './content/servicios/componentespc/fuentes-de-poder/fuentes-de-poder.component';
import { VentiladoresComponent } from './content/servicios/componentespc/ventiladores/ventiladores.component';
import { GabinetesComponent } from './content/servicios/componentespc/gabinetes/gabinetes.component';
const appRoutes: Routes=[
  {path:'', component:InicioComponent},
  {path:'inicio', component: InicioComponent},
  {path:'nosotros',component: NosotrosComponent},
  {path:'servicios', component:ServiciosComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'mantenimiento',component:MantenimientoComponent},
  {path:'componentes',component:ComponentespcComponent},
  {path:'cotizaciones',component:CotizacionesComponent},
  {path:'procesadores',component:ProcesadoresComponent},
  {path:'tarjetas graficas',component:TarjetasGraficasComponent},
  {path:'memorias ram', component:MemoriasRamComponent},
  {path:'memorias ssd hdd',component:MemoriasSsdHddComponent},
  {path:'fuentes de poder',component:FuentesDePoderComponent},
  {path:'ventiladores',component:VentiladoresComponent},
  {path:'gabinetes', component:GabinetesComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NavbarComponent,
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactoComponent,
    MantenimientoComponent,
    ComponentespcComponent,
    CotizacionesComponent,
    ProcesadoresComponent,
    TarjetasGraficasComponent,
    MemoriasRamComponent,
    MemoriasSsdHddComponent,
    FuentesDePoderComponent,
    VentiladoresComponent,
    GabinetesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
   , FormsModule,
   AngularFireModule.initializeApp({ apiKey: "AIzaSyA_f5xur27tja7EYMyHh0FTH6MJXLl-des",
   authDomain: "oneclick-a849a.firebaseapp.com",
   projectId: "oneclick-a849a",
   storageBucket: "oneclick-a849a.appspot.com",
   messagingSenderId: "561333718629",
   appId: "1:561333718629:web:94823ad92c758b8b31008c",
   measurementId: "G-P609FENTR4"}),
  ],
  providers: [
    CargarscriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
