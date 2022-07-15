import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private _auth: AngularFireAuth) {}

    /**
     * Method to register a user in firebase
     * @param email
     * @param password
     * @returns
     */
    createUserFirebase(email: string, password: string): Promise<firebase.auth.UserCredential> {
        return this._auth.createUserWithEmailAndPassword(email, password);
    }

    /**
     * Method to login user in firebase
     * @param email
     * @param password
     * @returns
     */
    loginUserFirebase(email: string, password: string): Promise<firebase.auth.UserCredential> {
        return this._auth.signInWithEmailAndPassword(email, password);
    }

    /**
     * Methos to logout a user from firebase
     * @returns
     */
    logoutFirebase(): Promise<void> {
        return this._auth.signOut();
    }
}
