import React from 'react';
import './Card.css'; 


interface CardProps {
    id: number;
    name: string;
    description: string;
    category: string;
    quantity: number;
    unit: string;
    imageUrl?: string;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({ name, description, category, quantity, unit, imageUrl, onClick }) => {
    return(
        <article className='card' onClick={onClick}>
            <div className='product-image'>
                {imageUrl ? <img src={imageUrl} /> : <span>Картинка отсутствует</span>}
            </div>
            <h2 className='product-name'>{name}</h2>
            <p className='product-description'>{description}</p>
            <p className='product-category'>{category}</p>
            <p className='product-quantity'>{quantity}</p>
        </article>
    );

}

export default Card;