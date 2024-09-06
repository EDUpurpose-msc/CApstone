import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import axios from "axios";
import '../styles/home.css';
import 'boxicons/css/boxicons.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



function Home() {
    // User authentication and loading state
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(location.state?.user);
    const [loading, setLoading] = useState(!user);
    

    useEffect(() => {
        if (!user) {
            axios.get('http://localhost:3001/user', { withCredentials: true })
                .then(response => {
                    if (response.data.user) {
                        setUser(response.data.user);
                    } else {
                        navigate("/login");
                    }
                })
                .catch(() => navigate("/login"))
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [user, navigate]);

    if (loading) {
        return <center><h1>Loading...</h1></center>;
    }

    //logic 
    const showContent = (sectionId) => {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.style.display = section.id === sectionId ? 'block' : 'none';
        });
    };

    const toggleDropdown = () => {
        const dropdown = document.getElementById('dropdown');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    };

    const closeDropdown = (event) => {
        const dropdown = document.getElementById('dropdown');
        if (!document.getElementById('user-profile').contains(event.target)) {
            dropdown.style.display = 'none';
        }
    };
    const handleCategoryClick = (path) => {
        navigate(path);
    };

    window.addEventListener('click', closeDropdown);

    return (
        <div className="main-body">
            <aside className="sidebar">
                <img src="/denr.png" alt="Sidebar Logo" />
                <a href="#home" className="sidebar-link" onClick={() => showContent('home')}>Home</a>
                <a href="#features" className="sidebar-link" onClick={() => showContent('features')}>Features</a>
                <a href="#about" className="sidebar-link" onClick={() => showContent('about')}>About Us</a>
                <a href="#contacts" className="sidebar-link" onClick={() => showContent('contacts')}>Contacts</a>
            </aside>

            <main className="main-content">
                {/* Home Section */}
                <section id="home" className="section home">
                    <section className="announcement">
                    </section>

                    <div className="container">
                        <div className="category">
                            <a href="/dashboard.html" onClick={() => handleCategoryClick('/dashboard')}>  
                                <img src="/Land.png" alt="Land Management" />
                                <p>Land Management</p>
                            </a>
                        </div>
                        <div className="category">
                            <a href="/dashboard.html" onClick={() => handleCategoryClick('/dashboard')}>  
                                <img src="/forestry.png" alt="Forestry Management" />
                                <p>Forestry Management</p>
                            </a>
                        </div>
                        <div className="category">
                            <a href="/dashboard.html" onClick={() => handleCategoryClick('/dashboard')}>  
                                <img src="/bio.png" alt="Biodiversity Management" />
                                <p>Biodiversity Management</p>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="section features-functions">
                    <h3>Features and Functions</h3>
                    <div className="container">
                        <div className="features-content">
                            <div className="feature">
                                <i className='bx bx-group'></i>
                                <p>Statistical Focal Registration</p>
                            </div>
                            <div className="feature">
                                <i className='bx bx-file'></i>
                                <p>Entering information or updating records</p>
                            </div>
                            <div className="feature">
                                <i className='bx bx-cog'></i>
                                <p>Customized files and Reports</p>
                            </div>
                            <div className="feature">
                                <i className='bx bx-chart'></i>
                                <p>Reports and Visualization</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Us Section */}
                <section id="about" className="section about-us">
                    <div className="container">
                        <div className="about-content">
                            <div className="about-text">
                                <h3>About Us</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            </div>
                            <div className="about-image">
                                <img src="logo.png" alt="About Us Logo" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contacts Section */}
                <section id="contacts" className="section contacts">
                    <section className="contact-section">
                        <h2>Contact Us</h2>
                        <h3 className="contact-title padd-15">Have you any Questions?</h3>
                        <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICES</h4>
                        <div className="contact-info">
                            <div>
                                <i className="bx bx-phone"></i>
                                <p>Call Us On</p>
                                <p>09123456789</p>
                            </div>
                            <div>
                                <i className="bx bx-map"></i>
                                <p>Office</p>
                                <p>Processing wag ka atat dadating tyo jan</p>
                            </div>
                            <div>
                                <i className="bx bx-envelope"></i>
                                <p>Email</p>
                                <p>ecostats@gmail.com</p>
                            </div>
                            <div>
                                <i className="bx bx-globe"></i>
                                <p>Website</p>
                                <p>www.ecostats.com</p>
                            </div>
                        </div>
                        <h2>Send Me an Email</h2>
                        <div className="contact-form">
                            <div className="form-group">
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Message"></textarea>
                            </div>
                            <button type="submit" className="btn">Send Message</button>
                        </div>
                    </section>
                </section>
            </main>
        </div>
    );
}

export default Home;