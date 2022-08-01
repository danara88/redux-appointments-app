import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { SortAppointmentsPipe } from './pipes/sort-appointments.pipe';

@NgModule({
    declarations: [SortAppointmentsPipe],
    imports: [CommonModule, NgxSpinnerModule],
    exports: [NgxSpinnerModule, ReactiveFormsModule, SortAppointmentsPipe],
})
export class SharedModule {}
