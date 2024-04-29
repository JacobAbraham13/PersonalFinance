import React from 'react';
import './Testimonials.css';

function Testimonials() {
  // Assuming testimonials is an array of review objects
  const testimonials = [
    {
      id: 1,
      author: 'John Doe',
      date: 'Dec 1, 2022',
      title: 'Review Title: Lorem ipsum dolor sit amet consectetur!',
      content: 'Lorem ipsum dolor sit amet consectetur dolor sit amet consecteturdolor sit amet consecteturdolor sit amet consecteturdolor sit amet consecteturdolor sit amet consecteturdolor sit amet consecteturdolor sit amet consectetur',
    },

  ];

  return (
    <section className="testimonials">
      <h2>Testimonies from businesses</h2>
      <div className="reviews">
        {testimonials.map(review => (
          <div className="review" key={review.id}>
            <div className="review-header">
              <div className="logo"></div>
              <div className="author-date">
                <div className="author">{review.author}</div>
                <div className="date">{review.date}</div>
              </div>
            </div>
            <h3 className="title">{review.title}</h3>
            <p className="content">{review.content}</p>
            <div className="rating">{review.rating}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;