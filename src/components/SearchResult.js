import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import './SearchResult.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function SearchResult({ img, location, title, description, star, price, total }) {
  return (
    <div className='searchresult'>
      <img src={img} alt='' />
      <div className='searchresult__info'>
        <div className='searchresult__infotop'>
          <p>{location}</p>
          <p>{title}</p>
          <p>-----</p>
          <p>{description}</p>
        </div>
        <div className='searchresult__infobottom'>
          <div className='searchresult__stars'>
            <StarIcon className='searchresult__star' />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className='searchresults__price'>
            <h2>Rs{price}/night</h2>
            <p>Rs{total} total</p>
            <Link to="/contact"> {/* Link to the contact page */}
              <button className="searchresult__button">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
