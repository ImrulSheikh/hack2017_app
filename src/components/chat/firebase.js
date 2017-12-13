import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCxEVAKGBTGr6m2iLcLG2wRvMKo4UvUSiA",
    authDomain: "hack2017-seekasia.firebaseapp.com",
    databaseURL: "https://hack2017-seekasia.firebaseio.com",
    projectId: "hack2017-seekasia",
    storageBucket: "hack2017-seekasia.appspot.com",
    messagingSenderId: "372910599547"
  };

export default () =>  {
    firebase.initializeApp(config);
    return firebase;
};

