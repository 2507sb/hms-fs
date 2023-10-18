import React, { useState } from 'react';
import './Banner.css';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


import vectorImage from '../assets/vector.png';
import adultImage from '../assets/adult.png';
import childImage from '../assets/child.png';

function Banner() {
  const email=firebase.auth().currentUser?.email;


  const navigate = useNavigate();

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
  });

  const [showSearch, setShowSearch] = useState(false);

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
    }));
  };

  const handle = () => {
    navigate('/search');
  };

  return (
    <>
      <div className="banner">
        <div className="banner__search">

          {showSearch && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              minDate={new Date()}
            />
          )}
        </div>
        <div className="banner__info">
          <h4>Enjoy Your Vacation with HOTELS GROUP</h4>
          <h1 style={{ marginTop: '0px', color: '#EB8A04' }}>
            Let us plan you a perfect International Holiday
          </h1>
          <button onClick={handle}>Explore Now</button>
        </div>
      </div>

      <div className="booking__div"></div>

      <div className="booking">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <div className="banner__main__div">
            <div className="booking__header">
              <img className="booking__vector" alt="" src={vectorImage} />
              <h4>Arrival Date</h4>
              <img
                className="booking__vector2"
                src="https://img.icons8.com/ios-filled/24/000000/sort-down.png"
                alt=""
                onClick={() => setShowSearch(true)}
              />
            </div>
            <div className="booking__bof">
              <h2>{`${format(date[0].startDate, 'dd MMM')}`}</h2>
              <h4>{`${format(date[0].startDate, 'EEEE')}`}</h4>
            </div>
          </div>

          <div className="banner__main__div">
            <div className="booking__header">
              <img className="booking__vector" alt="" src={vectorImage} />
              <h4>Check Out</h4>
              <img
                className="booking__vector2"
                src="https://img.icons8.com/ios-filled/24/000000/sort-down.png"
                alt=""
                onClick={() => setShowSearch(false)}
              />
            </div>
            <div className="booking__bof">
              <h2>{`${format(date[0].endDate, 'dd MMM')}`}</h2>
              <h4>{`${format(date[0].endDate, 'EEEE')}`}</h4>
            </div>
          </div>

          <div className="banner__main__div">
            <div className="booking__header">
              <img className="booking__vector" alt="" src={adultImage} />
              <h4>Adults</h4>
            </div>
            <div className="booking__bo">
              <h2>{`${options.adult}`}</h2>
              <div className="booking__noooo">
                <div onClick={() => handleOption('adult', 'i')}>
                  <img
                    src="https://img.icons8.com/material/24/000000/sort-up.png"
                    alt=""
                    style={{ height: '28px' }}
                  />
                </div>
                <div>
                  <button
                    style={{ border: 'none', background: 'transparent' }}
                    disabled={options.adult <= 1}
                    onClick={() => handleOption('adult', 'd')}
                  >
                    <img
                      src="https://img.icons8.com/ios-filled/24/000000/sort-down.png"
                      alt=""
                      style={{ height: '24px' }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="banner__main__div">
            <div className="booking__header">
              <img className="booking__vector" alt="" src={childImage} />
              <h4>Children</h4>
            </div>
            <div className="booking__bo">
              <h2>{`${options.children}`}</h2>
              <div className="booking__noooo">
                <div onClick={() => handleOption('children', 'i')}>
                  <img
                    src="https://img.icons8.com/material/24/000000/sort-up--v2.png"
                    alt=""
                    style={{ height: '28px' }}
                  />
                </div>
                <div>
                  <button
                    style={{ border: 'none', background: 'transparent' }}
                    disabled={options.children <= 0}
                    onClick={() => handleOption('children', 'd')}
                  >
                    <img
                      src="https://img.icons8.com/ios-filled/24/000000/sort-down.png"
                      alt=""
                      style={{ height: '24px' }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="banner__main__div" style={{ paddingTop: '0px' }}>
            <div className="booking__button">
              <button onClick={handle}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
