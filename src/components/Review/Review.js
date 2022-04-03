import React from 'react';

const Review = ({ review }) => {
    const { name, post, rating } = review;
    return (
        <div className="gap-3 m-3  my-5 col-lg-3 col-md-5 card border-2 border-warning bg-dark text-white">
            <div className='col-md-12 py-3 px-2'>
                <h3 className='fw-bold'>Name: {name}</h3>
                <p>{post}</p>
                <p className='fw-bold'><small>Rating: {rating}</small></p>
            </div>
        </div>
    );
};

export default Review;