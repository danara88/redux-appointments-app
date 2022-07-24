/**
 * User model
 */
export class User {
    static getFirebaseUser(firebaseUser: {
        uid: string;
        name: string;
        email: string;
        createdOn: string;
    }) {
        return new User(
            firebaseUser.uid,
            firebaseUser.name,
            firebaseUser.email,
            firebaseUser.createdOn
        );
    }
    constructor(
        public uid: string,
        public name: string,
        public email: string,
        public createdOn: string
    ) {}
}
