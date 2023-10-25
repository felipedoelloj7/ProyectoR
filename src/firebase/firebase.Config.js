
import { initializeApp } from "firebase/app";

const firebaseConfig = {
apiKey: "AIzaSyAVdWrmy_5xsQ28FSP8KpIWOU7ChDrTIMc",
authDomain: "entregareact-e-comme.firebaseapp.com",
projectId: "entregareact-e-comme",
storageBucket: "entregareact-e-comme.appspot.com",
messagingSenderId: "954856744939",
appId: "1:954856744939:web:e51dad450799305c5a5bae"
};

const app = initializeApp(firebaseConfig);

export { app };