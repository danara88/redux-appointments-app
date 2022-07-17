import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseAuthError } from 'src/app/models/firebase.auth.models';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    public formCustom: FormGroup = new FormGroup({});

    constructor(
        private _fb: FormBuilder,
        private _authService: AuthService,
        private _router: Router
    ) {}

    ngOnInit(): void {
        this.createForm();
    }

    /**
     * Method to create the register form
     */
    createForm() {
        this.formCustom = this._fb.group({
            completeName: ['', Validators.required],
            emailAddress: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            termsAndConditions: [false, [Validators.required, Validators.requiredTrue]],
        });
    }

    /**
     * Method to reegister a user
     * @returns
     */
    async registerUser() {
        if (this.formCustom.invalid) return;
        const { emailAddress, password } = this.formCustom.value;
        try {
            await this._authService.createUserFirebase(emailAddress, password);
            this.formCustom.reset();
            this._router.navigateByUrl('/home');
        } catch (error) {
            let errorObj = <FirebaseAuthError>error;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorObj.message,
            });
        }
    }
}
