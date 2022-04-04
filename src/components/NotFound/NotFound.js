import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className='px-4 py-4 mt-5 bg-light '>
            <div className='row my-5 py-5'>
                <div className='col-lg-6 order-1 order-md-1 px-5 mb-5'>
                    <p className='uppercase fw-bold'>
                        Error 404
                    </p>
                    <h2 className='mb-4 fw-bold'>
                        Oops! The page you're looking for isn't here.
                    </h2>
                    <p className='fw-bold mb-4'>
                        You might have the wrong address, or the page may have moved.
                    </p>
                    <button className='btn btn-primary text-white'>
                        <Link className='text-white text-decoration-none' to='/'>Back to homepage</Link>
                    </button>
                </div>
                <div className='col-lg-6 order-2 order-md-2'>
                    <div className='rounded py-4'>
                        <img className='w-75 ms-5'
                            src='https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg'
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;