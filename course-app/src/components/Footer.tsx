    import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import '../styles/Footer.css';

    type Props = {};

    const Footer = (props: Props) => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        alert(`Thank you for subscribing!`);
        // You can clear the input field by resetting the state
        setEmail('');
    };

    return (
        <div className="FooterContainer">
        <footer className="flex flex-col space-y-5 justify-center m-2 footerContent">
            <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
            <div className="bg-white-800 text-black p-2">
                <div className="container mx-auto flex justify-center items-center">
                {/* <Link to={'/'}  className="text-lg hover:text-white-900">Child Adoption System</Link> */}
                </div>
            </div>
            </nav>
            <div className="flex justify-center space-x-5">
            {/* ... (your social media icons) */}
            <div className="flex justify-center space-x-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
            </a>
            <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
            </a>
            </div>













            </div>

            <div className="newsletter-container">
            <h2 className="text-center text-white-900 font-medium">Subscribe to Our Newsletter</h2>

            <form
                className="flex justify-center items-center"
                onSubmit={(e) => {
                e.preventDefault();
                handleSubscribe();
                }}
            >
                <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <button type="submit" className="subscribe-btn">
                Subscribe
                </button>
            </form>
            </div>

            <p className="text-center text-white-900 font-medium">© 2023 Company Ltd. All rights reserved.</p>
        </footer>
        </div>
    );
    };

    export default Footer;
