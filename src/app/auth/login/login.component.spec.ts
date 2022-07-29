import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth/auth.service';
import { appReducers, AppState } from 'src/app/store/app.reducers';
import { environment } from 'src/environments/environment';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [
                ReactiveFormsModule,
                AngularFireModule.initializeApp(environment.firebase),
                RouterTestingModule,
                StoreModule.forRoot(appReducers),
            ],
            providers: [AuthService, FormBuilder],
        }).compileComponents();

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create correct login form fields', () => {
        //Act
        component.ngOnInit();

        // Assert
        expect(component.formCustom.contains('emailAddress'));
        expect(component.formCustom.contains('password'));
    });

    it('should send email and password to login user in firebase', () => {
        // Asset
        const email = 'test@test.com';
        const password = '123456';
        const authService = TestBed.get(AuthService);
        const spy = spyOn(authService, 'loginUserFirebase');

        // Act
        component.createForm();
        component.formCustom.controls['emailAddress'].setValue(email);
        component.formCustom.controls['password'].setValue(password);
        component.loginUser();

        // Assert
        expect(spy).toHaveBeenCalledWith(email, password);
    });
});
