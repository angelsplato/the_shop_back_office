import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCOylAXoN2BK3pv7Y_wGvyrvXHnjEz2WdI",
    authDomain: "theshop-12209.firebaseapp.com",
    databaseURL: "https://theshop-12209.firebaseio.com",
    projectId: "theshop-12209",
    storageBucket: "theshop-12209.appspot.com",
    messagingSenderId: "407315234422",
    appId: "1:407315234422:web:ec0b15942d212a6d0be957",
    measurementId: "G-CQ01G7C8BJ"
  };
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();