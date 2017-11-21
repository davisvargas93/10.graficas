import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  HomeComponent } from "./components/home/home.component";
import {  GraficoLineasComponent } from "./components/grafico-lineas/grafico-lineas.component";
import {  GraficoBarrasComponent } from "./components/grafico-barras/grafico-barras.component";
import { GraficoDonaComponent  } from "./components/grafico-dona/grafico-dona.component";
import { GraficoRadarComponent  } from "./components/grafico-radar/grafico-radar.component";
import { GraficoPolarAreaComponent  } from "./components/grafico-polar-area/grafico-polar-area.component";

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'graficos-lineas', component: GraficoLineasComponent },
    { path: 'graficos-barras', component: GraficoBarrasComponent },
    { path: 'graficos-dona', component: GraficoDonaComponent },
    { path: 'graficos-radar', component: GraficoRadarComponent },
    { path: 'graficos-polar-area', component: GraficoPolarAreaComponent },
    { path: '**', pathMatch: 'full', redirectTo:'home' },
];

export const app_routing = RouterModule.forRoot(app_routes,{useHash:true});
