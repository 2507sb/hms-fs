import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase';
import Modal from '@mui/material/Modal';
import { makeStyles } from '@mui/styles';
import { Button, Input } from '@mui/material';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'white',
    border: '2px solid gray',
    boxShadow: '24px',
    padding: '32px' 
  },
}));

function Header() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modelStyle] = useState(getModalStyle);
  const [openSignin, setOpenSignin] = useState(false);
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();   
    };
  }, [email]);

  const signUp = async (event) => {
    event.preventDefault();
    try {
      const authUser = await auth.createUserWithEmailAndPassword(email, password);
      await db.collection('users').doc(authUser.user.email).set({
        owner_uid: authUser.user.uid,
        email: authUser.user.email,
      });
    } 
    catch (error) {
      alert(error.message);
    }
    setOpen(false);
  };

  const signIn = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setOpenSignin(false);
    } catch (error) {
      alert(error.message);
    }
    setOpen(false);
  };

  return (
    <div className="header">
      <Modal className="modal" open={open} onClose={() => setOpen(false)}>
        <div style={modelStyle} className={useStyles().paper}>
          <form className="app__signup" style={{ padding: '50px' }}>
            <Input placeholder="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button type="button" onClick={signUp} style={{ backgroundColor: 'gray' }}>
              Sign up
            </Button>
          </form>
        </div>
      </Modal>
      <Modal open={openSignin} onClose={() => setOpenSignin(false)}>
        <div style={modelStyle} className={useStyles().paper}>
          <form className="app__signup" style={{ padding: '50px' }}>
            <Input placeholder="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button type="button" onClick={signIn} style={{ backgroundColor: 'gray' }}>
              Sign In
            </Button>
          </form>
        </div>
      </Modal>
      <div className='header'>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img className='header__logo' alt='' src={logo} />
        </Link>
        <div className='header__center'>
          <div className='center__button'>Home</div>
          <div className='center__button'>Rooms & Suites</div>
          <div className='center__button'>Offers</div>
          <div className='center__button'>My Bookings</div>
          <div className='center__button'>Profile</div>
        </div>
        <div className='header__right'>
          {user ? (
            <div className='headerContainer'>
              <Button className='header__button' onClick={() => auth.signOut()}>Log Out</Button>
            </div>
          ) : (
            <>
              <div className='headerContainer'>
                <Button className='header__button' onClick={() => setOpen(true)}>Sign Up</Button>
              </div>
              <div className='headerContainer'>
                <Button className='header__button' onClick={() => setOpenSignin(true)}>Log In</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
