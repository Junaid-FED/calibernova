import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
        
    };

    return (
        <div className="about-container">
            <div className="about-content">
                <img 
                    src="./src/assets/images/qwer.png" 
                    alt="About Us" 
                    className="about-image" 
                />
                <div className="text">
                    <h1>About Us</h1>
                    <p>
                        Caliber’s Nova Academy is a premier Coaching institution for professional courses in commerce like BBA, BCCA, B. Com and MBA.
                        Started in the year 2007 by Mr. Pankaj Agrawal and Mr. Rahul Rai has been instrumental in mentoring thousands of students and helped them achieve their professional Goals. We at Accounting Academy believe that our students have tremendous capabilities and believe that as teachers it’s our job to guide and help students understand their capabilities and provide them support and guidance to bring out the best in them. 
                        {isExpanded ? (
                            <span>
                                Our philosophy is to provide best classroom lectures and go beyond that to prepare them for real life challenges by not just providing them Academic knowledge but also helping them understand the practical applications of the same. Owing to our experienced faculties, we are able to support every student for bright future and successful career. We are strong on discipline, standards of achievement and on providing the best for all our students. We have very high expectations of our students and staff and of our teachers. We have several responsibilities towards the students in our academy. Perhaps the greatest is to ensure that each student completing course at AA has ample opportunities and choices for shaping their own future. These might be choices of jobs, further education or opportunities at workplace. At Caliber’s Nova Academy we encourage students to perform extraordinarily. Above all, students of accounting academy will have an understanding of wealth of opportunities open to them and the responsibilities they have towards themselves and their communities.
                            </span>
                        ) : (
                            <span>
                                {` ... ${"Read More"}`}
                            </span>
                        )}
                    </p>
                    {isExpanded && (
                        <>
                            <h1>GIVE YOUR CHILD</h1>
                            <p>
                                The Best Start
                                Caliber's Nova is one of the leading commerce institutes which covers entire commerce courses including XI-XII, B. Com, BBA, BCCA, MBA, M. Com, MCM along with Spoken English, Personality Development, Employability Training to crack interviews under one roof in absolutely student-oriented style.
                            </p>
                            <h1>WHY SHOULD YOU JOIN CALIBER'S NOVA</h1>
                            <ol>
                                <li>Making students capable for last 15 years.</li>
                                <li>Teaching in student-oriented style.</li>
                                <li>Courses Aligned by the Nagpur University.</li>
                                <li>Improved performance at colleges.</li>
                                <li>Motivational Seminars for aimless students.</li>
                                <li>We Create a stress-free and positive environment.</li>
                            </ol>
                            <h1>MISSION</h1>
                            <p>Our mission is to inculcate confidence in the students to bring out the best results in the form of academic output. To get to this goal, we provide excellent learning facilities, individual attention and care to convert weaknesses to strengths. Hence our watchword ‘Teach until it reaches student’</p>
                            <h1>TRAINING AND PLACEMENTS</h1>
                            <p>
                                "Caliber's Scholars" is going to be the absolutely new venture and a dream project of our leading organization "Caliber’s Nova". The project is about training and placement solutions which in near future would be an exclusive add-on service or facility, given at absolutely nominal charges to the students of Caliber's Nova and at standard market price to the outsiders. The venture would include not just the placement of the graduates and post graduates of Caliber’s Nova but also their training of employability, work ethics, and professionalism which would later facilitate the student to carve a stable career and would give companies stable, skilled and professional employees. The ultimate dream is to make our students not just graduates or post graduates but capable enough to track interviews and get stable and desired careers. In simpler words, it would be a journey to make jobless candidates capable of making a career.
                            </p>
                        </>
                    )}
                    <button onClick={toggleReadMore} className="read-more-button">
                        {isExpanded ? "Read Less" : "Read More"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;