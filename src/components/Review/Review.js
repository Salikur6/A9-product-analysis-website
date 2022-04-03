import React from 'react';

const Review = ({ review }) => {
    const { name, post, rating } = review;
    return (
        <div className="gap-3 m-3 col-lg-3 col-md-5 border">
            <div className='col-md-12'>
                <h3>Name: {name}</h3>
                <p>{post}</p>
                <p><small>Rating: {rating}</small></p>
            </div>
        </div>
    );
};

export default Review;