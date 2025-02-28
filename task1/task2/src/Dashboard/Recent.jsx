import React from 'react';
import './RecentReviews.css'; // Create this CSS file

const RecentReviews = () => {
    const reviews = [
        { product: 'Wiper Blades Brandix WL2', reviewer: 'Ryan Ford', rating: 4 },
        { product: 'Electric Planer Brandix KL370090G 300 Watts', reviewer: 'Adam Taylor', rating: 5 },
        { product: 'Water Tap', reviewer: 'Jessica Moore', rating: 3 },
        { product: 'Brandix Router Power Tool 2017ERXPK', reviewer: 'Helena Garcia', rating: 4 },
        { product: 'Undefined Tool IRadix DPS3000SY 2700 Watts', reviewer: 'Ryan Ford', rating: 2 },
    ];

    return (
        <div className="recent-reviews">
            <h2>Recent Reviews</h2>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index} className="review-item">
                        <div className="product-name">{review.product}</div>
                        <div className="reviewer">Reviewed by {review.reviewer}</div>
                        <div className="rating">{'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentReviews;