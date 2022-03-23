import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './components/Chat';
import { useState } from 'react';
import Login from './components/Login';
import { useStateValue } from './StateProvider';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './firebase';


function App() {

  const [{user}, dispatch] = useStateValue();
  const [isuser, setUser] = useState({});


  onAuthStateChanged(auth, (currentUser) =>{
    setUser(currentUser);
  })
 
  return (
    <div className="App">
      <Router>
        {!user ?  (
          <Login />
        ) : (
          <>
      <Header/>
      <div className="app__body">
        <Sidebar/>
        <Routes>
          <Route path='/room/:roomId' element={<Chat/>}></Route>
          
          <Route path='/' element={<h1>Hello</h1>}></Route>
        </Routes>
        </div>
        </>
          )}
        </Router>
    </div>
  );
}

export default App;
