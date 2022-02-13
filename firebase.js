import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD0PPtD-R6NoCPr0rxHGG6M8-J5Pv1SWMw",
  authDomain: "food-delivery-e53e2.firebaseapp.com",
  projectId: "food-delivery-e53e2",
  storageBucket: "food-delivery-e53e2.appspot.com",
  messagingSenderId: "341825324483",
  appId: "1:341825324483:web:31a64a370272b3d727a976",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
