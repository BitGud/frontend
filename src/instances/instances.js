import firebase from 'firebase/app'
import 'firebase/auth'
import { io } from 'socket.io-client'

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
}

if (firebase.apps.length === 0) {
  // Prevent initialising firebase again
  firebase.initializeApp(firebaseConfig)
}

const socket = io(process.env.REACT_APP_API_URL || '' || 'http://localhost:3000', {
  query: {
    // Unable to get the uid from the firebase package on initial render :(
    uid: localStorage.getItem('uid') || firebase.auth().currentUser?.uid || '',
  },
})

export { socket, firebase }
