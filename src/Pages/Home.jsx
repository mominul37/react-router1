
import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PlantCard from '../Components/PlantCard';

const Home = () => {
    const [plants, setPlants] = useState([])
     useEffect (
        () => {
            fetch('https://openapi.programming-hero.com/api/plants')
                .then(res => res.json())
                .then(data => setPlants(data?.plants))
        }, [])
        console.log(plants)
    return (

        <>
            <Navbar />
            <main className='min-h-[calc(100vh-285px)]'>
                <h1>Welcome to Home Page</h1>
                <p>this is home page</p>
                <p>Plants Card</p>
                {plants.map(plants => (
                    
                    <p key={plants.id}>{plants.name}</p>
                   
                ))}
                <PlantCard key={plants.id} plant={plants}/>
            </main>
            <Footer />
        </>
    );
};

export default Home;