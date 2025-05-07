
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from './firebase';


const ref = collection(firestore, "users");


export function CreateNewUser(data){


       return addDoc(ref, data);
}



export function LoginUser(data){

    return addDoc(ref, data);
}


