import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';
import { Appointment } from 'src/app/models/appointment.model';
import { AuthService } from '../auth/auth.service';
import firebase from 'firebase/compat/app';

@Injectable({
    providedIn: 'root',
})
export class AppointmentService {
    constructor(private _firestore: AngularFirestore, private _authService: AuthService) {}

    /**
     * Method to create an appointment
     * @param appointment
     * @returns
     */
    createAppointment(
        appointment: Appointment
    ): Promise<DocumentReference<firebase.firestore.DocumentData>> {
        const uid = this._authService.user.uid;
        const { ...data } = appointment;
        return this._firestore
            .doc(`${uid}/appointments`)
            .collection('items')
            .add({
                ...data,
            });
    }
}
