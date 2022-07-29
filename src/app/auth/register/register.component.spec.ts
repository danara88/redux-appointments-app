import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth/auth.service';
import { appReducers } from 'src/app/store/app.reducers';
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
                StoreModule.forRoot(appReducers),
            ],
            providers: [AuthService, FormBuilder],
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

    it('should send email and password to register user in firebase', () => {
        // Asset
        const completeName = 'Test';
        const email = 'test@test.com';
        const password = '123456';
        const termsAndConditions = true;
        const authService = TestBed.get(AuthService);
        const spy = spyOn(authService, 'createUserFirebase');

        // Act
        component.createForm();
        component.formCustom.controls['completeName'].setValue(completeName);
        component.formCustom.controls['emailAddress'].setValue(email);
        component.formCustom.controls['password'].setValue(password);
        component.formCustom.controls['termsAndConditions'].setValue(termsAndConditions);
        component.registerUser();

        // Assert
        expect(spy).toHaveBeenCalledWith(completeName, email, password);
    });
});
