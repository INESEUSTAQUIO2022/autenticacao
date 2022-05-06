import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCtH5FzY-pZzqbDWJRtNOmCb2MMvac181Y",
  authDomain: "exemplo-autenticacao-b1193.firebaseapp.com",
  projectId: "exemplo-autenticacao-b1193",
  storageBucket: "exemplo-autenticacao-b1193.appspot.com",
  messagingSenderId: "1066018654832",
  appId: "1:1066018654832:web:1572b7198296972e5ac2b5"
};

export const firebaseApp = initializeApp(firebaseConfig)
