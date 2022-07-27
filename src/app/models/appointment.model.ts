/**
 * Appointment Model
 */
export class Appointment {
    public createdOn: string;

    constructor(
        public clientName: string,
        public appointmentDate: string,
        public appointmentTime: string,
        public phoneNumber: string,
        public notes: string
    ) {
        this.createdOn = Date.now().toString();
    }
}
