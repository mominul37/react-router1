import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Contact = () => {
    return (
        <>
            <Navbar />
            <p>this is contact page</p>
            <h3>React Router</h3>
            <p>to learn react router concept to bulit pages and main page</p>
            <h4 className='font:bold text-9xl text-amber-700'>contact us:01234456789</h4>
                <div className="card bg-primary text-primary-content w-96">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn">Buy Now</button>
                        </div>
                    </div>
            </div>


            <Footer />
        </>
    );
};

export default Contact;