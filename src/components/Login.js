import React, { useState, useEffect } from 'react';
import './Login.css';
import { Button } from '@mui/material';
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Login() {
    const [state, dispatch] = useStateValue();

    

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
                
                auth.onAuthStateChanged(user => {
                    user(user);
                  })
            }
        ).catch((error) => {
            alert(error.message);
        });
    }

  return (
    <div className='login'>
    <div className="login__container">
    <img src="https://cdn.bfldr.com/5H442O3W/at/pl546j-7le8zk-btwjnu/Slack_RGB.png?auto=webp&format=png" alt="Slack Logo" />    
    <h1> Sign in to Tech Stack</h1>
    <p>techstack.slack.com</p>

    <Button onClick={signIn}>Sign In with Google</Button>

    </div>    
    </div>
  )
}

export default Login