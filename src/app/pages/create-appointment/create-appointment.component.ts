import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Appointment } from 'src/app/models/appointment.model';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-create-appointment',
    templateUrl: './create-appointment.component.html',
    styleUrls: ['./create-appointment.component.scss'],
})
export class CreateAppointmentComponent implements OnInit {
    public formCustom: FormGroup = new FormGroup({});
    public phoneNumberRegex: RegExp =
        /^(?:\+?[-.●]?)?\(?([2-9][0-9]{2})\)?[-.●\s]?([0-9]{3})[-.●\s]?([0-9]{4})$/;

    constructor(
        private _fb: FormBuilder,
        private _appointmentService: AppointmentService,
        private _spinner: NgxSpinnerService
    ) {}

    ngOnInit(): void {
        this.initForm();
    }

    /**
     * Method to initialize the form
     */
    private initForm(): void {
        this.formCustom = this._fb.group({
            clientName: ['Beto Hernandez', Validators.required],
            appointmentDate: [null, Validators.required],
            appointmentTime: [null, Validators.required],
            phoneNumber: [
                '8445677887',
                [Validators.required, Validators.pattern(this.phoneNumberRegex)],
            ],
            notes: ['Ejemplo'],
        });
    }

    /**
     * Method to create an appointment when the form is submitted
     * @returns
     */
    public async createAppointment() {
        if (this.formCustom.invalid) return;
        this._spinner.show();
        const { clientName, appointmentDate, appointmentTime, notes, phoneNumber } =
            this.formCustom.value;
        const appointment = new Appointment(
            clientName,
            appointmentDate,
            appointmentTime,
            phoneNumber,
            notes
        );
        try {
            await this._appointmentService.createAppointment(appointment);
            this.formCustom.reset();
            this._spinner.hide();
            Swal.fire({
                icon: 'success',
                text: 'The appointment was created !',
            });
        } catch (error) {
            this._spinner.hide();
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong',
            });
        }
    }
}
