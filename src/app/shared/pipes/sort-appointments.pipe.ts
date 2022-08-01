import { Pipe, PipeTransform } from '@angular/core';
import { Appointment } from 'src/app/models/appointment.model';

@Pipe({
    name: 'sortAppointments',
})

/**
 * Pipe to order appointmets by appointment date
 */
export class SortAppointmentsPipe implements PipeTransform {
    transform(appointments: Appointment[]): Appointment[] {
        const arrToSort = [...appointments];
        const sortedArr = arrToSort.sort(
            (a, b) => Number(new Date(a.appointmentDate)) - Number(new Date(b.appointmentDate))
        );
        return sortedArr;
    }
}
