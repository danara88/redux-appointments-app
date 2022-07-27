import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAppointmentRoutingModule } from './create-appointment-routing.module';
import { CreateAppointmentComponent } from './create-appointment.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [CreateAppointmentComponent],
    imports: [CommonModule, CreateAppointmentRoutingModule, LayoutModule, SharedModule],
})
export class CreateAppointmentModule {}
