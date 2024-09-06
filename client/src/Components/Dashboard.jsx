import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import 'boxicons/css/boxicons.min.css';

const Dashboard = () => {
    const showContent = (sectionId) => {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.style.display = section.id === sectionId ? 'block' : 'none';
        });
    };

    const toggleDropdown = (e) => {
        const dropdown = e.currentTarget.nextElementSibling;
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    };

    const closeDropdown = (event) => {
        const dropdown = document.getElementById('dropdown');
        if (!document.getElementById('user-profile').contains(event.target)) {
            dropdown.style.display = 'none';
        }
    };

    React.useEffect(() => {
        window.addEventListener('click', closeDropdown);
        return () => {
            window.removeEventListener('click', closeDropdown);
        };
    }, []);

    return (
        <div className="main-body">
            <aside className="sidebar">
                <h2 className="sidebar-title">DASHBOARD</h2>
                <div className="dropdown-container">
                    <button className="dropdown-btn">Land Management<i className='bx bx-chevron-down'></i></button>
                    <div className="dropdown-content">
                        <a href="#report1" onClick={() => showContent('report1')}>Report 1</a>
                        <a href="#report2" onClick={() => showContent('report2')}>Report 2</a>
                    </div>
                </div>
                <div className="dropdown-container">
                    <button className="dropdown-btn">Forestry Management<i className='bx bx-chevron-down'></i></button>
                    <div className="dropdown-content">
                        <a href="#report3" onClick={() => showContent('report3')}>Report 3</a>
                        <a href="#report4" onClick={() => showContent('report4')}>Report 4</a>
                    </div>
                </div>
                <div className="dropdown-container">
                    <button className="dropdown-btn">Biodiversity Management<i className='bx bx-chevron-down'></i></button>
                    <div className="dropdown-content">
                        <a href="#report5" onClick={() => showContent('report5')}>Report 5</a>
                        <a href="#report6" onClick={() => showContent('report6')}>Report 6</a>
                    </div>
                </div>
            </aside>

            <main className="main-content">
                {/* Your main content goes here */}
            </main>
        </div>
    );
};

export default Dashboard;
