import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="hero" style={{
            height: '60vh',
            textAlign: 'center'
        }}>
            <Navigation />
            <h1 className="display-3">Welcome!</h1>
            <p className="lead">This project was created by <a href="https://tarheels.live/arsj523/">COMP 523 Team J</a></p>
        </div>
    )
}

export default Home;