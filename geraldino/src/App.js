import React, { useState, useEffect } from 'react';
import './App.css';
import { FaWikipediaW, FaInstagram, FaFacebook } from 'react-icons/fa';
import geraldinoLogo from './images/ger_Logo.svg';

function App() {
    const [activeTab, setActiveTab] = useState('Hallo');
    const [ContentComponent, setContentComponent] = useState(null);

    useEffect(() => {
        switch (activeTab) {
            case 'Hallo':
                import('./HalloContent').then(module => {
                    setContentComponent(() => module.default);
                });
                break;
            case 'Musik':
                import('./MusikContent').then(module => {
                    setContentComponent(() => module.default);
                });
                break;
            case 'Kalender':
                import('./KalenderContent').then(module => {
                    setContentComponent(() => module.default);
                });
                break;
            case 'Über mich':
                import('./BioContent').then(module => {
                    setContentComponent(() => module.default);
                });
                break;
            default:
                setContentComponent(null);
        }
    }, [activeTab]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={geraldinoLogo} alt="GERALDINO" className="logo" />

                <nav className="navbar">
                    <ul>
                        <li>
                            <button onClick={() => setActiveTab('Hallo')} className={activeTab === 'Hallo' ? 'active' : ''}>
                                Hello
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveTab('Musik')} className={activeTab === 'Musik' ? 'active' : ''}>
                                Music
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveTab('Kalender')} className={activeTab === 'Kalender' ? 'active' : ''}>
                                Tour Dates
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveTab('Über mich')} className={activeTab === 'Über mich' ? 'active' : ''}>
                                Bio
                            </button>
                        </li>
                        <li className="social-icons">
                            <a href="https://de.wikipedia.org/wiki/Geraldino_(Kinderliedermacher)" target="_blank" rel="noopener noreferrer">
                                <FaWikipediaW size={24} />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a href="https://www.instagram.com/geraldino4080/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={24} />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a href="https://www.facebook.com/geraldinokindermusik" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={24} />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="content">
                {ContentComponent && <ContentComponent />}
            </main>
        </div>
    );
}

export default App;
