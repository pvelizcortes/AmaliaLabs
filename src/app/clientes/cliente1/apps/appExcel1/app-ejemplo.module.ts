import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppEjemploComponent } from './app-ejemplo.component';
import { AppEjemploRoutingModule } from './app-ejemplo-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppEjemploComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppEjemploRoutingModule
  ]
})
export class AppEjemploModule {}