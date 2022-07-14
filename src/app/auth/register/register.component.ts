import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    public formCustom: FormGroup = new FormGroup({});

    constructor(private _fb: FormBuilder) {}

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
     * Method to submit the registration form
     * @returns
     */
    registerUser() {
        if (this.formCustom.invalid) return;
        console.log(this.formCustom.value);
    }
}
