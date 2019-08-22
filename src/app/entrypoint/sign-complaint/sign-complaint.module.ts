import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignComplaintRoutingModule } from './sign-complaint-routing.module';
import { SignComponent } from './sign/sign.component';


@NgModule({
  declarations: [SignComponent],
  imports: [
    CommonModule,
    SignComplaintRoutingModule
  ]
})
export class SignComplaintModule { }
