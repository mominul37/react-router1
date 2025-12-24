import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <main className='min-h-[calc(100vh-285px)]'>
                <h1 className='font-bold text-4xl text-red-500'>Welcome to Home </h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est volupt
                    ate ducimus saepe fugit, officiis maxime rerum voluptatem
                    dolore accusantium id a voluptates quo, tempora assumenda autem. Fug
                    iat dolor placeat veniam.</p>
                <div className="card bg-primary text-primary-content w-96">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn">Buy Now</button>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    );
};

export default Home;