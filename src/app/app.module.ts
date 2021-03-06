import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard';
import { CalculadoraModule } from './calculadora';
import { ConversorModule } from './conversor';
import { TarefasModule } from './tarefas';
import { JogoDaVelhaModule } from './jogo-da-velha';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DashboardModule, 
    CalculadoraModule,
    ConversorModule,
    AppRoutingModule,
    TarefasModule,
    JogoDaVelhaModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
