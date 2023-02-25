import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputMaskModule } from 'primeng/inputmask';

import { AdmissionRoutingModule } from './admission-routing.module';
import { AdmissionComponent } from './containers/admission/admission.component';
import { StepsComponent } from './components/steps/steps.component';
import { CustomerSummaryComponent } from './components/customer-summary/customer-summary.component';
import { ErrorMessageComponent } from '../../shared/components/error-message/error-message.component';

@NgModule({
  declarations: [
    AdmissionComponent,
    StepsComponent,
    CustomerSummaryComponent
  ],
  imports: [
    CommonModule,
    AdmissionRoutingModule,
    ReactiveFormsModule,

    InputMaskModule,

    ErrorMessageComponent
  ]
})
export class AdmissionModule { }
