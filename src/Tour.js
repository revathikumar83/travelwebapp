import React, { useState } from 'react';
import './Tour.css';

const Tour = ({ id, image, city, desc, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img className="image" src={image} alt={city} />
      <footer>
        <div className="tour-info">
          <h4 className="tour-city">{city}</h4>
          <h4 className="tour-price">price: {price}</h4>
         
        </div>
        <p>{desc}</p>
      <p>
          {readMore ? desc : `${desc.substring(0, 200)}...`}
          <button className="readmore" onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;