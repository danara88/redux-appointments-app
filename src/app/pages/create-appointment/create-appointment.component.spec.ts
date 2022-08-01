import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { Appointment } from 'src/app/models/appointment.model';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';
import { appReducers } from 'src/app/store/app.reducers';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

import { CreateAppointmentComponent } from './create-appointment.component';

describe('CreateAppointmentComponent', () => {
    let component: CreateAppointmentComponent;
    let fixture: ComponentFixture<CreateAppointmentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CreateAppointmentComponent],
            imports: [
                ReactiveFormsModule,
                AngularFireModule.initializeApp(environment.firebase),
                StoreModule.forRoot(appReducers),
            ],
            providers: [AppointmentService],
        }).compileComponents();

        fixture = TestBed.createComponent(CreateAppointmentComponent);
        0;
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call createAppointment service when form is valid and submitted', () => {
        //Arrange
        const appointmentService = TestBed.get(AppointmentService);
        const spy = spyOn(appointmentService, 'createAppointment');
        const appointment: Appointment = new Appointment(
            'Test',
            '2022-11-11',
            '12:30',
            '8448778989',
            ''
        );
        //Act
        const { createdOn, status, ...data } = appointment;
        component.formCustom.setValue(data);
        component.createAppointment();
        setTimeout(() => {
            Swal.clickConfirm();
        }, 100);
        //Assert
        expect(component.formCustom.invalid).toBeFalsy();
        expect(spy).toHaveBeenCalled();
    });
});
