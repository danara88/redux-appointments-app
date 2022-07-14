import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private _auth: AngularFireAuth) {}

    /**
     *
     * @param email
     * @param password
     * @returns
     */
    createUserFirebase(email: string, password: string): Promise<firebase.auth.UserCredential> {
        return this._auth.createUserWithEmailAndPassword(email, password);
    }
}
