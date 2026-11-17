import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Videos from './components/Videos';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Model from './components/Model'
import ChatBot from "./components/Chatbot.tsx";
function App() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        // Update page title
        document.title = "MolKet | Quantum Molecular Solutions";

        // Arriving from another page with a hash (e.g. /#team): scroll once sections have rendered
        if (window.location.hash.length > 1) {
            const id = window.location.hash.substring(1);
            const scrollToHash = () => setTimeout(() => {
                const element = document.getElementById(id);
                if (!element) return;
                const targetTop = () => element.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: targetTop(), behavior: 'smooth' });
                // Lazy content above the target can still grow during the scroll; correct once it settles
                setTimeout(() => {
                    if (Math.abs(element.getBoundingClientRect().top - 80) > 10) {
                        window.scrollTo({ top: targetTop(), behavior: 'smooth' });
                    }
                }, 1500);
            }, 300);
            // Wait for images to finish loading so the target doesn't move after scrolling
            if (document.readyState === 'complete') scrollToHash();
            else window.addEventListener('load', scrollToHash, { once: true });
        }

        // Smooth scroll functionality
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLAnchorElement;
            if (target && target.tagName === 'A' && target.href.includes('#')) {
                const id = target.getAttribute('href');
                if (id && id.startsWith('#') && id.length > 1) {
                    e.preventDefault();
                    const element = document.getElementById(id.substring(1));
                    if (element) {
                        window.scrollTo({
                            top: element.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        };

        // Show/hide back to top button.tsx based on scroll position
        const handleScroll = () => {
            // Show the button.tsx only if the user has scrolled down more than 200px (adjust as needed)
            if (window.scrollY > 200) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        document.addEventListener('click', handleAnchorClick);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('click', handleAnchorClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Videos />
            <HowItWorks />
            <Model />
            <Team />
            <Contact />
            <Footer />
            <ChatBot />

            {/*/!* Back to top button.tsx - conditionally rendered *!/*/}
            {/*{showBackToTop && (*/}
            {/*    <a*/}
            {/*        href="#home"*/}
            {/*        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 z-50"*/}
            {/*    >*/}
            {/*        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">*/}
            {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />*/}
            {/*        </svg>*/}
            {/*    </a>*/}
            {/*)}*/}
        </div>
    );
}

export default App;