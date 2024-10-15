import React, { useContext, useState } from 'react';
import { useCart } from './CartContext'; 

const Indoor = () => {
  const { addToCart } = useCart(); 
  const [show, setShow] = useState(null);

  const products = [
    { id: 'I1', name: 'KD SURCO WOODEN CARROM BOARD', image: 'kd board.jpg', price: 7199, originalPrice: 8999, discount: '-20%', size: '12MM' },
    { id: 'I2', name: 'Magnetic Chess Board Set for Adults & Kids', image: 'chess board.jpg', price: 3009, originalPrice: 3499, discount: '-15%', size: '15 inch' },
    { id: 'I3', name: 'Bingo Game For Kids, Bingo Machine Raffle', image: 'bingo.jpg', price: 579, originalPrice: 999, discount: '-42%', size: '18 inch' },
    { id: 'I4', name: 'Plastic Card Uno Cards Game', image: 'unocard.jpg', price: 85, originalPrice: 99, discount: '-15%', size: '2.5" x 3.5"' },
    { id: 'I5', name: 'Ludo Carrom Board Game for Kids Playing', image: 'ludo board.jpeg', price: 1199, originalPrice: 1225, discount: '-2%', size: '21 inch' },
    { id: 'I6', name: 'Family Board Game with Two Modes | Snake and Ladder and Ludo Games', image: 'snakeboard.jpg', price: 989, originalPrice: 999, discount: '-2%', size: '21 inch' },
    { id: 'I7', name: 'Homecute Wooden Board Game | Table Board Games | Fast Sling Puck', image: 'slungboard.jpg', price: 599, originalPrice: 1499, discount: '-60%', size: '21 inch' },
    { id: 'I8', name: 'The Ace Card Company Platinum 2.0 Poker Plastic Playing Cards', image: 'ace.jpg', price: 118, originalPrice: 120, discount: '-1%', size: '2.5" x 3.5"' },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setShow(product.id);
    setTimeout(() => setShow(null), 2000);
  };

  return (
    <div className='bg'>
      <div className='dis'>
        {products.map((product) => (
          <div className='card' key={product.id}>
            <img src={product.image} alt={product.name} className='photo' />
            <p>{product.name}</p>
            <p>SIZE: {product.size}</p>
            <p>{product.discount} <span style={{ fontSize: '20px' }}>{product.price}</span></p>
            <h3>MRP: {product.originalPrice}</h3>
            {show === product.id && <h3>ADDED TO CART</h3>}
            <button onClick={() => handleAddToCart(product)} className='button'>CART</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Indoor;
