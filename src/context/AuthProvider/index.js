import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { firebase } from '../../instances'
import AuthContext from '../AuthContext'
import axios from '../../instances/axios'

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [uid, setUid] = useState('')
  const history = useHistory()

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      setCurrentUser(user)
      if (user) {
        setIsLoggedIn(true)
        setUid(user.uid)
      } else {
        setIsLoggedIn(false)
      }
      setIsLoading(false)
    })
    return unsubscribe
  }, [])

  const signIn = async (email, password) => {
    try {
      const userCred = await firebase.auth().signInWithEmailAndPassword(email, password)
      localStorage.setItem('uid', userCred.user.uid)
      history.push('settings')
      return Promise.resolve({
        email: userCred.user.email,
        uid: userCred.user.uid,
        name: userCred.user.displayName,
      })
    } catch (err) {
      return Promise.reject(err)
    }
  }

  const signInWithGithub = async () => {
    try {
      const provider = new firebase.auth.GithubAuthProvider()
      const userCred = await firebase.auth().signInWithPopup(provider)
      localStorage.setItem('uid', userCred.user.uid)

      const userObj = {
        uid: userCred.user.uid,
        displayName: userCred.user.displayName,
        email: userCred.user.email,
        photoUrl: userCred.user.photoURL,
        githubUsername: userCred?.additionalUserInfo?.username ?? '',
        lastCommit: new Date(),
        webhooks: [],
        lastShock: new Date(),
      }

      await axios.post('/user', userObj)

      history.push('settings')
      return Promise.resolve({
        email: userCred.user.email,
        uid: userCred.user.uid,
        name: userCred.user.displayName,
      })
    } catch (err) {
      return Promise.reject(err)
    }
  }

  const signUp = async (email, password) => {
    try {
      const userCred = await firebase.auth().createUserWithEmailAndPassword(email, password)
      localStorage.setItem('uid', userCred.user.uid)

      const userObj = {
        uid: userCred.user.uid,
        displayName: userCred.user.displayName,
        email: userCred.user.email,
        photoUrl: userCred.user.photoURL,
        githubUsername: '',
        lastCommit: new Date(),
        webhooks: [],
        lastShock: new Date(),
      }

      await axios.post('/user', userObj)

      history.push('settings')
      return Promise.resolve({
        email: userCred.user.email,
        uid: userCred.user.uid,
        name: userCred.user.displayName,
      })
    } catch (err) {
      return Promise.reject(err)
    }
  }

  const signOut = async () => {
    try {
      await firebase.auth().signOut()
      return Promise.resolve(true)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  const obj = {
    currentUser,
    isLoggedIn,
    isLoading,
    uid,
    signIn,
    signOut,
    signUp,
    signInWithGithub,
  }

  const { children } = props

  return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>
}

export default AuthProvider
