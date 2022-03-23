import { AccessTime, HelpOutline, Logout, Search } from '@mui/icons-material';
import { Avatar, Button } from '@mui/material';
import React from 'react';
import './Header.css';
import { useStateValue } from '../StateProvider';
import firebase from 'firebase/compat/app';


function Header() {
    const [{user}] = useStateValue();

    const signOut = () => {
        firebase.auth().signOut();
    }

  return (
    <div className='header'>
        <div className="header__left">
            <Avatar className='header__avatar' alt={user?.displayName} src={user?.photoUrl} />
             <AccessTime/>
            </div>

        <div className="header__search">
            <Search/>
            </div>

        <div className="header__right">
            
            <Button onClick={signOut}>
            <Logout/>
            </Button>
            </div>
        </div>
  )
}

export default Header