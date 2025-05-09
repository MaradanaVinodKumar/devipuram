
import { addDoc, collection } from 'firebase/firestore';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';

import { auth, firestore } from './firebase';


const ref = collection(firestore, "users");


export function CreateNewUser(data){


       return addDoc(ref, data);
}


export async function RegisterUser(email,password){
    return await createUserWithEmailAndPassword(auth, email, password);
}

export async function signInUser(email,password){
    return await signInWithEmailAndPassword(auth, email, password);
}

export function LoginUser(data){

    return addDoc(ref, data);
}


