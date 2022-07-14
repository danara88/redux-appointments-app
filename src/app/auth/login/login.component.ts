import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public formCustom: FormGroup = new FormGroup({});

    constructor(private _fb: FormBuilder) {}

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
    loginUser() {
        if (this.formCustom.invalid) return;
        console.log(this.formCustom.value);
    }
}
