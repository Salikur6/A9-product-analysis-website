import React from 'react';

const Review = ({ review }) => {
    const { name, post, rating, img } = review;

    return (

        <div className="gap-3 m-3  my-5 col-lg-3 col-md-5 card border-2 border-warning bg-dark text-white">
            <div className='col-md-12 py-3 px-1'>
                <div className='d-flex mb-3'>
                    <img width='70px' height='70px' className='rounded-pill me-2' src={img} alt="" />
                    <h4 className='fw-bold'>{name}</h4>
                </div>
                <p>{post}</p>
                <p className='fw-bold'><small>Rating: {rating}</small></p>
            </div>
        </div>
    );
};

export default Review;