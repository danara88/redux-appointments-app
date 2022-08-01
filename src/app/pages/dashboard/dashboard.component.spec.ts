import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { StoreModule } from '@ngrx/store';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';
import { appReducers } from 'src/app/store/app.reducers';
import { environment } from 'src/environments/environment';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DashboardComponent],
            imports: [
                AngularFireModule.initializeApp(environment.firebase),
                StoreModule.forRoot(appReducers),
            ],
            providers: [AppointmentService],
        }).compileComponents();

        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
