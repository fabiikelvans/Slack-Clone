import React, {useState} from 'react';
import db from '../firebase';
import { useStateValue } from '../StateProvider';
import './ChatInput.css';
import firebase from 'firebase/compat/app';

function ChatInput({channelName, channelId}) {
    const[input, setInput] = useState("");
    const [{user}] = useStateValue();

    
    const sendMessage = (e) => {
        e.preventDefault();

        if(channelId) {
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL,

            });

        }
    }

    console.log(user);

  return (
    <div className="chat__input">
    <form >
        <input type="text" value={input} onChange={e => setInput(e.target.value)} 
        placeholder={`Message #${channelName?.toLowerCase()}`}
        /></form>    
        <button type='submit' onClick={sendMessage}>Send</button>
    </div>
  )
}

export default ChatInput