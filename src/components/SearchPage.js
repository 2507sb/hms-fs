import React, { useState, useEffect } from 'react';
import './SearchPage.css';
import { Button } from '@mui/material';
import SearchResult from './SearchResult';
import firebase from 'firebase/compat/app';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const rooms = [
  {
    img: "https://tse3.mm.bing.net/th?id=OIP._XuZby4A43FdQhGGOy_avwHaEK&pid=Api&P=0&h=180",
    location: "Mumbai",
    title: "Two rooms",
    description: "Nice place",
    star: "4",
    price: 1500,
    total: 1500,
  },
  {
    img: "http://4.bp.blogspot.com/-G6PtlmfrVS4/TrVS5bmKMRI/AAAAAAAACAU/ZA98HniWDhc/s1600/hotel-room.jpg",
    location: "Mumbai",
    title: "Two rooms",
    description: "Nice place",
    star: "4",
    price: 1500,
    total: 1500,
  },
  {
    img: "https://tse3.mm.bing.net/th?id=OIP.TGE0FYNmfqwFBJmB5yyDIAHaEb&pid=Api&P=0&h=180",
    location: "Mumbai",
    title: "Two rooms",
    description: "Nice place",
    star: "4",
    price: 1200,
    total: 1200,
  },
];

function SearchPage() {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      setUserEmail(currentUser.email);
    }
  }, []);

  return (
    <div className='searchpage'>
      <div className='searchpage__data'>
        <Button variant="outlined">{userEmail}</Button>
      </div>
      {rooms.map((data, index) => (
        <SearchResult
          key={index}
          img={data.img}
          price={data.price}
          location={data.location}
          title={data.title}
          description={data.description}
          star={data.star}
          total={data.total}
        />
      ))}
    </div>
  );
}

export default SearchPage;
