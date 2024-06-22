import React from 'react';
import '../../styles/product.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);
  const cartItem = items.find((item) => item.id === product.id);
  const {t} = useTranslation();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (event) => {
    event.stopPropagation();
    dispatch(addItem(product));
  };

  const isDisabled = (cartItem?.maxReached || false) || (product.amount >= product.quantity);

  return (
    <div className={`product-item item ${isDisabled ? 'disabled-item' : ''}`} onClick={handleProductClick}>
      <img src={product.img} style={{ width: '150px', height: '150px', objectFit: 'cover' }} alt={product.title} />
      <h2>{product.title}</h2>
      <div style={{color: "gray"}}>{product.brand}</div>
      <div>${product.price}</div>
      <button 
        className='product-button' 
        onClick={handleAddToCart} 
        disabled={isDisabled}
      >
        {isDisabled ? t("maxReached") : t("addToCart")}
      </button>
    </div>
  );
};

export default Product;
