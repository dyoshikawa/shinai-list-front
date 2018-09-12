import firebase from '~/plugins/firebase'
import 'firebase/auth'

export default function auth() {
  return new Promise(resolve => {
    firebase.auth().onAuthStateChanged(user => {
      resolve(user || false)
    })
  })
}

export function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithRedirect(provider)
}
