import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElsewhereRoutingModule } from './elsewhere-routing.module';
import { ElsewhereComponent } from './elsewhere.component';


@NgModule({
  declarations: [ElsewhereComponent],
  imports: [
    CommonModule,
    ElsewhereRoutingModule
  ]
})
export class ElsewhereModule { }
