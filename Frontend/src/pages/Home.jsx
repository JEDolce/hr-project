import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Trayectoria from '../components/Trayectoria';
import Proposal from '../components/Proposal';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Slider />
            <Trayectoria />
            <Proposal />
            <Footer />
        </div>
    )
}
