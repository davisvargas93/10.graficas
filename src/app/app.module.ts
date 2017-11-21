import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//graficos
import { ChartsModule } from 'ng2-charts';

//Rutas 
import {app_routing} from './app.routes';

import { AppComponent } from './app.component';
import { GraficoLineasComponent } from './components/grafico-lineas/grafico-lineas.component';
import { GraficoBarrasComponent } from './components/grafico-barras/grafico-barras.component';
import { GraficoDonaComponent } from './components/grafico-dona/grafico-dona.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { GraficoRadarComponent } from './components/grafico-radar/grafico-radar.component';
import { GraficoPolarAreaComponent } from './components/grafico-polar-area/grafico-polar-area.component';
//libreria PDF

@NgModule({
  declarations: [
    AppComponent,
    GraficoLineasComponent,
    GraficoBarrasComponent,
    GraficoDonaComponent,
    NavbarComponent,
    HomeComponent,
    GraficoRadarComponent,
    GraficoPolarAreaComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    app_routing,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
