// src/CourseSlider.js

import React from 'react';
import Slider from 'react-slick';
import './Course.css'; // Update your CSS file for new styles

    const Course = () => { 
    const courses = [
    { title: '9th & 10th', description: 'Calibers Nova is the best coaching institute for 11th and 12th students. Our experienced faculty members provide personalized guidance, regular assessments and comprehensive learning plans.', image: '../src/assets/images/img1.jpg' },
    { title: '11th & 12th', description: 'Calibers Nova is the best coaching institute for 11th and 12th students. Our experienced faculty members provide personalized guidance, regular assessments and comprehensive learning plans.', image: '../src/assets/images/img2.jpg' },
    { title: 'MBA_CAT, MBA_CET, MCA_CET', description: 'With the help of our experienced teaching faculty, we are able to provide you with the best entrance coaching in Nagpur. MBA-CET| MBA-CAT | MCA-CET', image: '../src/assets/images/img3.jpg' },
    { title: 'BBA, BCCA, B.Com, BCA', description: 'Our mission is to improve the academic performance of students by building confidence in them. Our learning facilities are excellent, and we provide individual attention and care to ensure this goal is achieved. ', image: '../src/assets/images/img4.jpg' },
    { title: 'B.Sc & B.Sc IT', description: 'Our mission is to improve the academic performance of students by building confidence in them. Our learning facilities are excellent, and we provide individual attention and care to ensure this goal is achieved.', image: '../src/assets/images/img5.jpg' }
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
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
   <div className="main-container">
     <div className="course-slider container">
      <h2 className="text-center mb-4" style={{color:"white",textDecoration:"underline", fontWeight:"bold", fontSize:"38px"}}>Courses Offered</h2>
      <Slider {...settings}>
        {courses.map((course, index) => (
          <div key={index} className="course-card">
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
