/**
 * Appointment Model
 */
export class Appointment {
    public status: AppointmentStatus;
    public createdOn: string;

    constructor(
        public clientName: string,
        public appointmentDate: string,
        public appointmentTime: string,
        public phoneNumber: string,
        public notes: string
    ) {
        this.createdOn = Date.now().toString();
        this.status = AppointmentStatus.PENDING;
    }
}

/**
 * Appointment status
 */
export enum AppointmentStatus {
    COMPLETED = 'completed',
    PENDING = 'pending',
    CANCELED = 'canceled',
}
