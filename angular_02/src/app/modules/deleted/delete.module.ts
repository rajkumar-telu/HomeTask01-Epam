import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { DeleteComponent } from './delete.component';



@NgModule({
  declarations: [
    DeleteComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class DeleteModule { }
