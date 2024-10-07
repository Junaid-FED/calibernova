// src/CourseSlider.js

import React from 'react';
import Slider from 'react-slick';
import './Course.css'; // Ensure your CSS file is correctly updated

// Import images at the top
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';

const Course = () => {
  const courses = [
    {
      id: 1, // Added unique ID
      title: '9th & 10th',
      description: 'Calibers Nova is the best coaching institute for 9th and 10th students. Our experienced faculty members provide personalized guidance, regular assessments, and comprehensive learning plans.',
      image: img1,
    },
    {
      id: 2,
      title: '11th & 12th',
      description: 'Calibers Nova is the best coaching institute for 11th and 12th students. Our experienced faculty members provide personalized guidance, regular assessments, and comprehensive learning plans.',
      image: img2,
    },
    {
      id: 3,
      title: 'MBA_CAT, MBA_CET, MCA_CET',
      description: 'With the help of our experienced teaching faculty, we provide the best entrance coaching in Nagpur. MBA-CET | MBA-CAT | MCA-CET',
      image: img3,
    },
    {
      id: 4,
      title: 'BBA, BCCA, B.Com, BCA',
      description: 'Our mission is to improve the academic performance of students by building confidence in them. Our learning facilities are excellent, and we provide individual attention and care to ensure this goal is achieved.',
      image: img4,
    },
    {
      id: 5,
      title: 'B.Sc & B.Sc IT',
      description: 'Our mission is to improve the academic performance of students by building confidence in them. Our learning facilities are excellent, and we provide individual attention and care to ensure this goal is achieved.',
      image: img5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="main-container">
      <div className="course-slider container">
        <h2 className="text-center mb-4" style={{ color: "white", textDecoration: "underline", fontWeight: "bold", fontSize: "38px" }}>
          Courses Offered
        </h2>
        <Slider {...settings}>
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="card">
                <img src={course.image} className="card-img-top" alt={course.title} />
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Course;
