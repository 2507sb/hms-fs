import React from 'react';
import './Home.css';
import Categories from './Categories';
import Banner from './Banner';
import Card from './Card';
import Footer from './Footer';

let p1 = require("../assets/h1.jpg");
let p2 = require("../assets/h2.jpeg");
let p3 = require("../assets/h3.jpeg");
let p4 = require("../assets/h4.jpeg");

function Home() {
  return (
    <div className='home'>
      <Banner />
      <br></br>
      <div className="home__categories">
        <div style={{
          display: 'flex', alignItems: "flex-end", justifyContent: "center",
          flexDirection: "column", marginTop: "180px", marginBottom: "90px", height: "15vh"
        }}>
          <div style={{ background: "#EB8A04", height: "170px", width: "1100px", zIndex: "-1", position: "absolute" }}></div>
          <div style={{
            display: 'flex', alignItems: "center", justifyContent: "center",
            flexDirection: "column", marginRight: "480px", background: "transparent", zIndex: "-1"
          }}>
            <h1 style={{ color: "white", marginBottom: "0px" }} className='quote__h1'>Full service,at your disposal</h1>
            <h4 style={{
              display: 'flex', alignItems: "center", justifyContent: "center",
              marginTop: "0px", color: "gray"
            }} className='quote__h4'>More than you can Imagine</h4>
          </div>
        </div>
        <br></br>
        <Categories />
        <div style={{
          display: '', alignItems: "center", justifyContent: "center",
          flexDirection: "column", marginTop: "60px", marginBottom: "120px", height: "15vh"
        }}>
          <div style={{ background: "#EB8A04", height: "170px", width: "1100px", zIndex: "-1", position: "absolute" }}></div>
          <div style={{
            display: 'flex', alignItems: "center", justifyContent: "center",
            flexDirection: "column", marginRight: "480px", background: "transparent", zIndex: "-1"
          }}>
            <h1 style={{ color: "white", marginBottom: "0px" }} className='quote__h1'>Choose What's Best for you</h1>
            <h4 style={{
              display: 'flex', alignItems: "center", justifyContent: "center",
              marginTop: "0px", color: "gray"
            }} className='quote__h4'>Make your Vacation Comfortable.</h4>
          </div>
        </div>
      </div>
      <div className='home__section'>
        <Card src={p1} title="Sri Pranams International Hotel" description=" Sri Pranams International Hotel in Bhimavaram. The hotel is strategically located in P P Road. Having been established in the year 2006, this hospitality destination has grown to become the ideal place for travelers and those on business to feel at home when in the city. Many have also reviewed the hotel to be among  " />
        <Card src={p2} title=" Abhilasha Pride" description=" Abhilasha pride in vizag. The hotel is strategically located in P P Road. Having been established in the year 2006, this hospitality destination has grown to become the ideal place for travelers and those on business to feel at home when in the city. Many have also reviewed the hotel to be among the sought after Hotels in Bhimavaram. The hotel fun " />
        <Card src={p3} title="Hotel Peacock" description="Hotel peacock in hyderabad. The hotel is strategically located in P P Road. Having been established in the year 2006, this hospitality destination has grown to become the ideal place for travelers and those on business to feel at home when in the city. Many have also reviewed the hotel to be among the sought after Hotels in " />
        <Card src={p4} title="A comfort Hotel" description=" A comfort Hotel in vijayawada. The hotel is strategically located in P P Road. Having been established in the year 2006, this hospitality destination has grown to become the ideal place for travelers and those on business to feel at home when in the city. Many have also reviewed the hotel to be among the sought after Hotels in Bhima " />
      </div>
      <div><br></br><br></br>
        <h1 className='quotes__card__'>
          Celebrated as one of the city's best is, Sri Pranams International Hotel in Bhimavaram. 
        </h1>
      </div>
      <div>
        <div style={{
          display: 'flex', alignItems: "flex-end", justifyContent: "center",
          flexDirection: "column", marginTop: "60px", marginBottom: "120px", height: "15vh"
        }}>
          <div style={{ background: "#EB8A04", height: "170px", width: "1100px", zIndex: "-1", position: "absolute" }}></div>
          <div style={{
            display: 'flex', alignItems: "center", justifyContent: "center",
            flexDirection: "column", marginRight: "480px", background: "transparent", zIndex: "-1"
          }}>
            <h1 style={{ color: "white", marginBottom: "0px" }} className='quote__h1'>Luxury Redefined</h1>
            <h4 style={{
              display: 'flex', alignItems: "center", justifyContent: "center",
              marginTop: "0px", color: "gray"
            }} className='quote__h4'>Luxury is personal</h4>
          </div>
        </div>
      </div>
      <div className='some__quotes'>
        <h4>With the aim of pampering its guests to a thrilling experience, the hotel features a plethora of services which include Number Of Rooms 34 Roooms, Doctor On Call , Internet Access , Laundry Service , Air Conditioned Rooms , Banquet Facilities , Wifi Service/wireless Internet , Check Out Time 00:00, Distance In (kms) From The Airport 60 Kms, 24 Hour Concierge/help Desk yes, Valet Parking . The hotel is also classified as a destination to resort to when in need of Hotels, Hotels (Rs 1r order food online at the single click of a button.</h4>
      </div>
      <div>
        <div style={{
          display: '', alignItems: "center", justifyContent: "center",
          flexDirection: "column", marginTop: "60px", marginBottom: "120px", height: "15vh"
        }}>
          <div style={{ background: "#EB8A04", height: "170px", width: "1100px", zIndex: "-1", position: "absolute" }}></div>
          <div style={{
            display: 'flex', alignItems: "center", justifyContent: "center",
            flexDirection: "column", marginRight: "480px", background: "transparent", zIndex: "1"
          }}>
            <h1 style={{ color: "white", marginBottom: "0px" }} className='quote__h1'>They Loved our Hospitality</h1>
            <h4 style={{
              display: 'flex', alignItems: "center", justifyContent: "center",
              marginTop: "0px", color: "gray"
            }} className='quote__h4'>Explore the World with ease</h4>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
