import { addDoc, collection } from 'firebase/firestore';
import React, { useRef } from 'react';
import { firestore } from '../context/firebase';



const Test = () => {
  const nameRef = useRef();
  const ref = collection(firestore, "messages");

  const handlesave = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);

    let data = {
      Name:nameRef.current.value,
    }

    try{
      addDoc(ref, data);
    }
    catch(e){
      console.log(e);
    }
  }  

  return (
    <div>
      <form onSubmit={handlesave}>
        <label>Enter Name</label>
        <input type='text' ref={nameRef}></input>
        <button type='submit'>save</button>
      </form>
      
    </div>
  )
  }



export default Test
