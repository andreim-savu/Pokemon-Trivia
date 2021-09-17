import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';// Import the functions you need from the SDKs you need

/*
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh04lfxtn08vFk5Zq6aTHk_tWI-cfioew",
  authDomain: "pokemon-trivia-2add5.firebaseapp.com",
  projectId: "pokemon-trivia-2add5",
  storageBucket: "pokemon-trivia-2add5.appspot.com",
  messagingSenderId: "406416476061",
  appId: "1:406416476061:web:10e16f4dcf2ccd2c235174",
  measurementId: "G-7LQVD97CTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
