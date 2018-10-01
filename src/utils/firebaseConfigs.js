import firebase from 'firebase'
import 'firebase/firestore'

const prodConfig = {
    apiKey: "AIzaSyAUYNk7BotEDFv_lwq6-4j-W8wI7_U2uqA",
    authDomain: "portal-academico-bb296.firebaseapp.com",
    databaseURL: "https://portal-academico-bb296.firebaseio.com",
    projectId: "portal-academico-bb296",
    storageBucket: "portal-academico-bb296.appspot.com",
    messagingSenderId: "682404160676"
}

const devConfig = {
    apiKey: "AIzaSyAUYNk7BotEDFv_lwq6-4j-W8wI7_U2uqA",
    authDomain: "portal-academico-bb296.firebaseapp.com",
    databaseURL: "https://portal-academico-bb296.firebaseio.com",
    projectId: "portal-academico-bb296",
    storageBucket: "portal-academico-bb296.appspot.com",
    messagingSenderId: "682404160676"
}

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig

export const firebaseImpl = firebase.initializeApp(config)
export const firebaseDatabase = firebase.firestore()
export const firebaseAuth = firebase.auth()
