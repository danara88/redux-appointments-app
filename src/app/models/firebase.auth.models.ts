/**
 * Model from firebase to catch error auth response
 */
export class FirebaseAuthError {
    constructor(public code: number, public message: string, public errors: FirebaseErrors[]) {}
}

export class FirebaseErrors {
    constructor(public message: string, public domain: string, public reason: string) {}
}
