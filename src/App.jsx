import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

const THEME_STORAGE_KEY = 'theme';

const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'dark';

    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
        return stored;
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }

    return 'light';
};

function App() {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;
        root.dataset.theme = theme;
        window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <div className="app">
            <Navbar theme={theme} onToggleTheme={toggleTheme} />
            <main>
                <Hero />
                <SocialProof />
                <Features />
                <UseCases />
                <Pricing />
                <FAQ />
                <CallToAction />
            </main>
            <Footer />
            <CookieConsent />
        </div>
    );
}

export default App;
