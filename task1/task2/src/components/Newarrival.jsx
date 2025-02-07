import React from "react";
import image8 from '../assets/image/pic8.webp';
import image9 from '../assets/image/pic9.webp';
import image10 from '../assets/image/pic10.webp';
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export const Arrival = [
    {
        id: 1,
        image: image8,
        description: "all in one bottle",
        price: "$22.0-$55.0",
    },
    {
        id: 2,
        image: image9,
        description: "Amazon Alexa",
        price: "$22.0-$55.0",
    },
    {
        id: 3,
        image: image10,
        description: "Head set gamer region",
        price: "$22.0-$55.0",
        star: 4,
    },
];

const Newarrival = () => {
    const navigate = useNavigate();

    // Handle navigation to the single product detail page
    const handleNavigate = (id) => {
        navigate(`/singlecard/${id}`);
    };

    return (
        <>
            <h1 className="popularhead">New Arrival Products</h1>
            <div className="new-arrival">
                <div className="gallery-arrival">
                    {Arrival.map((post) => (
                        <div key={post.id} className="allin-one">
                            <div className="new-item">
                                <img src={post.image} alt={post.description} />
                                <button 
                                    className="quick-view" 
                                    onClick={() => handleNavigate(post.id)} // Fixed handler
                                >
                                    Quick View
                                </button>
                                <button className="select-option">Select Option</button>
                                <div className="heart">❤</div>
                            </div>
                            <p>{post.description}</p>
                            <p>{post.price}</p>
                            <p>
                                <FaStar style={{ color: "rgb(224, 150, 11)" }} />
                                <FaStar style={{ color: "rgb(224, 150, 11)" }} />
                                <FaStar style={{ color: "rgb(224, 150, 11)" }} />
                                <FaStar style={{ color: "rgb(202, 202, 201)" }} />
                                <FaStar style={{ color: "rgb(202, 202, 201)" }} />
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Newarrival;
