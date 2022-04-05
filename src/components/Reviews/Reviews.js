import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReviews();


    return (
        <div className=''>
            <h2 className='text-center my-5 fw-bold'>Customer All Reviews: ({reviews.length})</h2>
            <div className='row justify-content-center'>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>

    );
};

export default Reviews;