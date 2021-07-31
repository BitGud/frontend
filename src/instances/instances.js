import firebase from 'firebase/app'
import 'firebase/auth'
// import { io } from 'socket.io-client'

const firebaseConfig = {
  apiKey: 'AIzaSyA46ZCSUVS1v1rIF6vr-lTlWJTmREFC8Fw',
  authDomain: 'bitbud-2021.firebaseapp.com',
  projectId: 'bitbud-2021',
  storageBucket: 'bitbud-2021.appspot.com',
  messagingSenderId: '810477436884',
  appId: '1:810477436884:web:9f3c961e75aa0a80656041',
  measurementId: 'G-FEXFPHS7Q0',
}

if (firebase.apps.length === 0) {
  // Prevent initialising firebase again
  firebase.initializeApp(firebaseConfig)
}

// const socket = io(process.env.REACT_APP_API_URL || '' || 'http://localhost:3000', {
//   query: {
//     // Unable to get the uid from the firebase package on initial render :(
//     uid: localStorage.getItem('uid') || firebase.auth().currentUser?.uid || '',
//   },
// })

export default firebase
