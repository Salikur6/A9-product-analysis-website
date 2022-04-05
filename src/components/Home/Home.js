import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {

    const [reviews] = useReviews();
    const revSlice = reviews.slice(0, 3);

    return (
        <div>
            <div className='row my-5 align-items-center home-content'>
                <div className="col-lg-7 col-md-7 order-1">
                    <h1 className='fw-bold'>Your next Laptop</h1>
                    <h1 className='fw-bold text-primary mb-4'>Your best Laptop</h1>
                    <p className='mb-4'>Laptops combine all the input/output components and capabilities of a desktop computer, including the display screen, small speakers, a keyboard, data storage device.</p>
                    <button className='fw-bold btn btn-primary live-btn'>Live Demo</button>
                </div>
                <div className="col-lg-5 col-md-5 order-2">
                    <div>
                        <img width='100%' height='' src="https://media.istockphoto.com/photos/modern-laptop-with-empty-screen-on-white-background-mockup-design-picture-id1182241805?b=1&k=20&m=1182241805&s=612x612&w=0&h=8LGcGIlPCE1pEOKOqrN4WP-UsXobLqc4EnqC71niFrc=" alt="" />
                    </div>
                </div>
            </div>

            <div className='customer-reviews row mt-5 g-3 justify-content-center'>

                <h2 className='text-center fw-bold mt-5'>Customer Reviews: ({revSlice.length})</h2>

                {
                    reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                }


            </div>
            <div className='d-flex justify-content-center'>
                <Link to='/reviews' className='my-4 btn btn-primary px-5 fw-bold'>See All Reviews</Link>
            </div>
        </div>
    );
};

export default Home;