import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='bg-light p-4 my-5 border rounded'>
                <h2 className='fw-bold'>1. What is context API ?</h2>
                <p> Context is primarily used when some data needs to be accessible by many components at different nesting levels. Contaxt api is a very powerful and very useful thing. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context. Context API is the way to create global variables that can be passed around the component tree. Context API is an alternative to passing props manually in a component tree.</p>
            </div>

            <div className='bg-light p-4 my-5 border rounded'>
                <h2 className='fw-bold'>2. What is Semantic tag.</h2>
                <p>Semantic HTML tags provide ingormation about the contents of those tags that goes beyond just how they look on a page. In the new version of html join some new tags that is Semantic tag. Some Semantic tag is header, nav, section, article, aside, footer etc. Semantic elements should use for greater accessibility. Overall, semantic elements also lead to more consistent code. By creating a standard semantic element, it makes it easier for everyone.</p>
            </div>

        </div>
    );
};

export default Blogs;