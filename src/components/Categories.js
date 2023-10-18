import React from 'react';
import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';
import four from '../assets/four.png';
import five from '../assets/five.png';

const items = [
  { image: one, text: 'Wi-fi' },
  { image: two, text: 'Soft Drinks' },
  { image: three, text: 'Bakery Items' },
  { image: four, text: 'Fast Food' },
  { image: five, text: 'Shopping' },
];

function Categories() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', padding: '15px', backgroundColor: '#fff', marginBottom: '10px' }}>
      {items.map((item, index) => (
        <div key={index} style={{ alignItems: 'center', marginRight: '150px' }}>
          <img src={item.image} alt="" style={{ width: '50px', height: '50px', resizeMode: 'contain' }} />
          <h5 style={{ fontFamily: 'Lexend', fontSize: '16px', fontWeight: '400', lineHeight: '20px', letterSpacing: '0.05em', textAlign: 'center' }}>{item.text}</h5>
        </div>
      ))}
    </div>
  );
}

export default Categories;
