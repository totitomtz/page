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
const appRoutes: Routes=[{path:'Inicio', component: InicioComponent},



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
  ],
  providers: [
    CargarscriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
