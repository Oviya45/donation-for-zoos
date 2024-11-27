import React, { useState } from 'react';
import './App.css';

function App() {
    const [modalVisible, setModalVisible] = useState(false);
    const [receiptText, setReceiptText] = useState('');

    
    const askForAmount = (zooName) => {
        let amount = prompt(`Enter the amount you wish to donate to ${zooName}:`, "");

        if (amount !== null && !isNaN(amount) && amount > 0) {
            showReceipt(zooName, amount);  
        } else {
            alert("Please enter a valid donation amount.");
        }
    };

    
    const showReceipt = (zooName, amount) => {
        const receipt = `You have successfully donated ₹${amount} to ${zooName}. 
        Your support helps in conserving endangered species.`;
        setReceiptText(receipt); 
        setModalVisible(true);   
    };

    
    const closeModal = () => {
        setModalVisible(false);  
    };

    return (
        <div className="App">
            {/* Header Section */}
            <header>
                <h1>Animal Protection</h1>
                <p>Donate to save endangered species in Indian Zoos</p>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* Homepage Section */}
            <section id="home">
                <div className="hero-text">
                    <h2>Welcome to Animal Protection</h2>
                    <p>Join us in helping conserve endangered species across India’s zoos. Your donation can make a difference!</p>
                </div>

                <div className="zoos-container">
                    {/* National Zoological Park */}
                    <div className="zoos-list">
                        <h3>National Zoological Park, Delhi</h3>
                        <p className="description">Known for conservation efforts for Bengal Tigers, Indian Rhinos, and Red Pandas.</p>
                        <button className="donate-btn" onClick={() => askForAmount('National Zoological Park, Delhi')}>Donate</button>
                    </div>

                    {/* Arignar Anna Zoological Park */}
                    <div className="zoos-list">
                        <h3>Arignar Anna Zoological Park, Chennai</h3>
                        <p className="description">Specializes in breeding programs for Asiatic Lions, Slender Lorises, and Indian Star Turtles.</p>
                        <button className="donate-btn" onClick={() => askForAmount('Arignar Anna Zoological Park, Chennai')}>Donate</button>
                    </div>

                    {/* Mysore Zoo */}
                    <div className="zoos-list">
                        <h3>Mysore Zoo, Karnataka</h3>
                        <p className="description">Renowned for preserving Indian Wolves, Gaurs, and King Cobras.</p>
                        <button className="donate-btn" onClick={() => askForAmount('Mysore Zoo, Karnataka')}>Donate</button>
                    </div>

                    {/* Alipore Zoological Gardens */}
                    <div className="zoos-list">
                        <h3>Alipore Zoological Gardens, Kolkata</h3>
                        <p className="description">Focuses on conservation of Royal Bengal Tigers, Indian Elephants, and Gharials.</p>
                        <button className="donate-btn" onClick={() => askForAmount('Alipore Zoological Gardens, Kolkata')}>Donate</button>
                    </div>

                    {/* Nandankanan Zoological Park */}
                    <div className="zoos-list">
                        <h3>Nandankanan Zoo, Odisha</h3>
                        <p className="description">Famous for its breeding program for white tigers and gharials.</p>
                        <button className="donate-btn" onClick={() => askForAmount('Nandankanan Zoo, Odisha')}>Donate</button>
                    </div>

                    {/* Indira Gandhi Zoological Park */}
                    <div className="zoos-list">
                        <h3>Indira Gandhi Zoological Park, Vizag</h3>
                        <p className="description">Hosts conservation projects for wild dogs, panthers, and mouse deer.</p>
                        <button className="donate-btn" onClick={() => askForAmount('Indira Gandhi Zoological Park, Vizag')}>Donate</button>
                    </div>

                    {/* Sakkarbaug Zoological Garden */}
                    <div className="zoos-list">
                        <h3>Sakkarbaug Zoo, Gujarat</h3>
                        <p className="description">Specialized in Asiatic Lion conservation and breeding programs.</p>
                        <button className="donate-btn" onClick={() => askForAmount('Sakkarbaug Zoo, Gujarat')}>Donate</button>
                    </div>

                    {/* Padmaja Naidu Zoo */}
                    <div className="zoos-list">
                        <h3>Padmaja Naidu Zoo, Darjeeling</h3>
                        <p className="description">Protects snow leopards, red pandas, and Himalayan wolves.</p>
                        <button className="donate-btn" onClick={() => askForAmount('Padmaja Naidu Zoo, Darjeeling')}>Donate</button>
                    </div>
                </div>
            </section>

            {/* Modal Overlay */}
            {modalVisible && (
                <>
                    <div className="overlay" id="overlay"></div>
                    <div className="modal" id="modal">
                        <h3>Thank You for Donating!</h3>
                        <p id="receipt">{receiptText}</p> {/* Display receipt message */}
                        <button className="close-btn" onClick={closeModal}>Close</button>
                    </div>
                </>
            )}

            {/* About Section */}
            <section id="about">
                <h2>About Us</h2>
                <p>Animal Protection is a non-profit organization focused on supporting zoos in India to conserve endangered species and promote wildlife protection initiatives.</p>
            </section>

            {/* Contact Section */}
            <section id="contact">
                <h2>Contact Us</h2>
                <p>We would love to hear from you! Whether you have questions, feedback, or just want to learn more about our mission, feel free to reach out.</p>

                <div>
                    <h3>Send Us a Message</h3>
                    <form action="submit_form.php" method="POST">
                        <label for="name">Your Name:</label><br />
                        <input type="text" id="name" name="name" placeholder="Enter your name" required /><br /><br />

                        <label for="email">Your Email:</label><br />
                        <input type="email" id="email" name="email" placeholder="Enter your email" required /><br /><br />

                        <label for="message">Your Message:</label><br />
                        <textarea id="message" name="message" placeholder="Write your message" required></textarea><br /><br />

                        <button type="submit" className="send-btn">Send Message</button>
                    </form>
                </div>
            </section>

            {/* Social Media Section */}
            <div className="social-media">
                <h3>Follow Us</h3>
                <p>Stay connected with us through our social media channels:</p>
                <ul>
                    <li><a href="https://www.facebook.com/animalprotection" target="_blank">Facebook</a></li>
                    <li><a href="https://www.instagram.com/animalprotection" target="_blank">Instagram</a></li>
                    <li><a href="https://www.twitter.com/animalprotection" target="_blank">Twitter</a></li>
                    <li><a href="https://www.linkedin.com/company/animalprotection" target="_blank">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    );
}

export default App;


