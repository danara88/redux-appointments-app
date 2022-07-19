import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseAuthError } from 'src/app/models/firebase.auth.models';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public formCustom: FormGroup = new FormGroup({});

    constructor(
        private _fb: FormBuilder,
        private _authService: AuthService,
        private _router: Router,
        private _spinner: NgxSpinnerService
    ) {}

    ngOnInit(): void {
        this.createForm();
    }

    /**
     * Method to create the login form
     */
    createForm() {
        this.formCustom = this._fb.group({
            emailAddress: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        });
    }

    /**
     * Method to submit the login form
     * @returns
     */
    async loginUser() {
        if (this.formCustom.invalid) return;
        const { emailAddress, password } = this.formCustom.value;
        this._spinner.show();
        try {
            await this._authService.loginUserFirebase(emailAddress, password);
            this.formCustom.reset();
            this._router.navigateByUrl('/home');
            this._spinner.hide();
        } catch (error) {
            let errorObj = <FirebaseAuthError>error;
            this._spinner.hide();
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorObj.message,
            });
        }
    }
}
