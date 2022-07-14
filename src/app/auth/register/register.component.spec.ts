import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RegisterComponent],
            imports: [ReactiveFormsModule],
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
        // Asset

        // Act
        component.ngOnInit();

        // Assert
        expect(component.formCustom.contains('completeName')).toBeTruthy();
        expect(component.formCustom.contains('emailAddress')).toBeTruthy();
        expect(component.formCustom.contains('password')).toBeTruthy();
    });
});
