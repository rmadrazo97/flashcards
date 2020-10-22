/**
 * Firebase Login
 * Vuely comes with built in firebase login feature
 * You Need To Add Your Firsebase App Account Details Here
 */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase 
const config = {
    apiKey: "AIzaSyArKxBR8dL6xsvbu5E-JSBI7T_50qveIoc", // Your Api key will be here
    authDomain: "flashcards-ufm.firebaseapp.com", // Your auth domain
    databaseURL: "https://flashcards-ufm.firebaseio.com", // data base url
    projectId: "flashcards-ufm", // project id
    storageBucket: "flashcards-ufm.appspot.com", // storage bucket
    messagingSenderId: "536542610888" // messaging sender id
};

firebase.initializeApp(config);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const database = firebase.database();

export {
    auth,
    googleAuthProvider,
    githubAuthProvider,
    facebookAuthProvider,
    twitterAuthProvider,
    database
};
