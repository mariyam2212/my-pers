import firebase from 'firebase/app';
import "firebase/auth"
import { auth } from './firebase'

export const register = async ({ email, password }) => {
  try {
    const resp = await auth.createUserWithEmailAndPassword(email, password);
    return resp.user;
  } catch (err) {
    console.log(err.code);
    console.log(err.message);
    return err;
  }
}

export const login = async ({ email, password }) => {
  try {
    const resp = await auth.signInWithEmailAndPassword(email, password);
    return resp.user;
  } catch (err) {
    console.log(err.code);
    console.log(err.message);
    return err;
  }
}