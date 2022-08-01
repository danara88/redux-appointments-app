import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';
import { appReducers } from 'src/app/store/app.reducers';
import { environment } from 'src/environments/environment';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HomeComponent],
            imports: [
                RouterTestingModule,
                AngularFireModule.initializeApp(environment.firebase),
                StoreModule.forRoot(appReducers),
            ],
            providers: [AppointmentService],
        }).compileComponents();

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // it('should call getAppointments when component init', () => {
    //     //Arrange
    //     const appointmentService = TestBed.get(AppointmentService);
    //     const spy = spyOn(appointmentService, 'getAppointments');
    //     //Act
    //     component.ngOnInit();
    //     fixture.detectChanges();
    //     //Assert
    //     expect(spy).toHaveBeenCalled();
    // });
});
