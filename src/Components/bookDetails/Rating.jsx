import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating, editable, onRatingChange }) => {
  const [currentRating, setCurrentRating] = useState(rating);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    setCurrentRating(rating);
  }, [rating]);

  const handleClick = (ratingValue) => {
    if (editable) {
      setCurrentRating(ratingValue);
      onRatingChange(ratingValue);
    }
  };

  return (
    <div className='flex mt-2'>
        <p className='mx-2 mt-1 font-bold poppins-semibold'>Rating:</p>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <FaStar
              size={30}
              color={ratingValue <= (hover || currentRating) ? "#ffc107" : "#e4e5e9"}
              onClick={() => handleClick(ratingValue)}
              onMouseEnter={() => editable && setHover(ratingValue)}
              onMouseLeave={() => editable && setHover(0)}
              style={{ cursor: editable ? 'pointer' : 'default' }}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
