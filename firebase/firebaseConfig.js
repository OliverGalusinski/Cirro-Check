// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, sendEmailVerification} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export class Authentication{
    static async registerWithEmailAndPassword(email, password) {
    try {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async () => {
                await sendEmailVerification(auth.currentUser, {
                    handleCodeInApp: true,
                    url: 'https://cirro-check.firebaseapp.com',
                })
                    .then(() => {
                        alert('Verification email has been sent');
                    })
                    .catch((err) => {
                        alert(err.message)
                    });
            })
            .catch((err) => {
                alert(err.message)
            })
    } catch (error) {
        alert(error.message);
    }
}

static registerWithPhone(phoneNumber){
    auth.useDeviceLanguage();

}

    static signInWithEmailAndPassword(email, password, router){
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                if (user.emailVerified){
                    console.log("Signed in " + user.email)
                    router.push("Home/Homepage")
                }else{
                    router.push("Authentication/VerificateEmail")
                    this.signOut()
                    throw new Error('Please validate your Email!')
                }
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                alert(errorMessage)
            });
    }

    static signOut(router, pushPath){
        signOut(auth).then(() => {
            console.log("Signed out!");
            if(router !== undefined && pushPath !== undefined)
                router.push(pushPath)
        }).catch((error) => {
            console.log(error.message);
        })
    }
}