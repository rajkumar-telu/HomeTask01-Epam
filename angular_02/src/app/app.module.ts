import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ActiveModule } from './modules/active/active.module';
import { DeleteModule } from './modules/deleted/delete.module';
import {ComponentsModule} from './components/components.module';
import { FullNamePipe } from './pipes/full-name.pipe';
import { UserStatusPipe } from './pipes/user-status.pipe';
import { FontColorDirective } from './directives/font-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActiveModule,
    DeleteModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
