import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveComponent } from './active.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [{
  path: '',
  component: ActiveComponent
}]

@NgModule({
  declarations: [
    ActiveComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ComponentsModule
  ]
})
export class ActiveModule { 
  constructor() {
    console.log('ActiveModule constructor');
  }
}
