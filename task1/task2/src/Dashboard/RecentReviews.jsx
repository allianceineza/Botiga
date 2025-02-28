import React from "react";
import image2 from'../assets/image/pic2.webp'
import image3 from'../assets/image/pic3.webp'
import image4 from'../assets/image/pic4.webp'
import image5 from'../assets/image/pic5.webp'
import image6 from'../assets/image/pic6.webp'

import "../Dashboard/Dashboard_Styles/sidebar.css";

const reviews = [
  {
    id: 1,
    productImage: image2,
    productName: "body lotion",
    reviewer: "Ryan Ford",
    rating: 3,
  },
  {
    id: 2,
    productImage: image3,
    productName: "sports",
    reviewer: "Adam Taylor",
    rating: 4,
  },
  {
    id: 3,
    productImage: image4,
    productName: "computer budget",
    reviewer: "Jessica Moore",
    rating: 2,
  },
  {
    id: 4,
    productImage: image5,
    productName: "electronics",
    reviewer: "Helena Garcia",
    rating: 3,
  },
  {
    id: 5,
    productImage: image6,
    productName: " watch",
    reviewer: "Ryan Ford",
    rating: 5,
  },
];

const activities = [
  {
    id: 1,
    date: "Yesterday",
    description: "Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae sodales in, maximus ut lectus. Vivamus commodo scelerisque lacus, at porttitor dui iaculis id. Curabitur imperdiet ultrices fermentum.",
  },
  {
    id: 2,
    date: "5 days ago",
    description: "Nulla ut ex mollis, volutpat tellus vitae, accumsan ligula. Curabitur imperdiet ultrices fermentum.",
  },
  {
    id: 3,
    date: "March 27",
    description: "Donec tempor sapien et fringilla facilisis. Nam maximus consectetur diam.",
  },
  {
    id: 4,
    date: "November 30",
    description: "Many philosophical debates that began in ancient times are still ongoing today.",
  },
];


const RecentReviews = () => {
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <span key={index} className={index < rating ? "star filled" : "star"}>
          ★
        </span>
      ));
  };

  return (
    <div className="recent-reviews">
      <div className="recentreview1">
      <h2>Recent Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="review-item">
          <img src={review.productImage} alt={review.productName} />
          <div className="review-content">
            <h3>{review.productName}</h3>
            <p>Reviewed by {review.reviewer}</p>
          </div>
          <div className="review-rating">{renderStars(review.rating)}</div>
        </div>
       
      ))}
       </div>
     <div className="recentactivity1">
      <h2>Recent Activity</h2>
      <div className="recent-activity">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <span className="activity-date">{activity.date}</span>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
    
  );
};

export default RecentReviews;