import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Store } from '@ngrx/store';
import firebase from 'firebase/compat/app';
import { map, Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { setUser, unsetUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public userAuthSubs: Subscription = new Subscription();
    private _user: User | null = new User('', '', '', '');

    get user() {
        return { ...this._user };
    }

    constructor(
        private _auth: AngularFireAuth,
        private _firestore: AngularFirestore,
        private store$: Store<AppState>
    ) {}

    /**
     * Method to listen firebase authentication
     */
    initAuthListener(): void {
        this._auth.authState.subscribe((firebaseUser) => {
            if (firebaseUser) {
                const uid = firebaseUser.uid;
                this.userAuthSubs = this._firestore
                    .doc(`${uid}/user`)
                    .valueChanges()
                    .subscribe((user: any) => {
                        this._user = User.getFirebaseUser(user);
                        this.store$.dispatch(setUser({ user: this._user }));
                    });
            } else {
                this.userAuthSubs.unsubscribe();
                this._user = null;
                this.store$.dispatch(unsetUser());
            }
        });
    }

    /**
     * Method to verify if the firebase user is autheticated or not
     * @returns
     */
    isAuth(): Observable<boolean> {
        return this._auth.authState.pipe(map((user) => user !== null));
    }

    /**
     * Method to register a user in firebase
     * @param email
     * @param password
     * @returns
     */
    createUserFirebase(name: string, email: string, password: string): Promise<void> {
        return this._auth.createUserWithEmailAndPassword(email, password).then((firebaseUser) => {
            const uid = firebaseUser.user!.uid;
            const user = new User(uid, name, email, Date.now().toString());
            return this._firestore.doc(`${uid}/user`).set({
                ...user,
            });
        });
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
