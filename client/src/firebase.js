import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAsqrCd_807v_7jv12cI3-Cb0GcuB88GSs",
    authDomain: "reddit-clone-9ee21.firebaseapp.com",
    databaseURL: "https://reddit-clone-9ee21.firebaseio.com",
    projectId: "reddit-clone-9ee21",
    storageBucket: "reddit-clone-9ee21.appspot.com",
    messagingSenderId: "407308615695"
};

firebase.initializeApp(config);

export default firebase;