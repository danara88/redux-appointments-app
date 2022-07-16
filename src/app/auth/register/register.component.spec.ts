import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RegisterComponent],
            imports: [
                ReactiveFormsModule,
                AngularFireModule.initializeApp(environment.firebase),
                RouterTestingModule,
            ],
            providers: [AuthService],
        }).compileComponents();

        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should contain correct register form fields', () => {
        // Act
        component.ngOnInit();

        // Assert
        expect(component.formCustom.contains('completeName')).toBeTruthy();
        expect(component.formCustom.contains('emailAddress')).toBeTruthy();
        expect(component.formCustom.contains('password')).toBeTruthy();
    });
});
