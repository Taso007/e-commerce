import '../styles/product.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, decrementAmount, incrementAmount } from '../redux/cartSlice';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {t} = useTranslation();

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.amount, 0);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleIncrease = (event, item) => {
    event.stopPropagation();
    dispatch(incrementAmount(item));
  };

  const handleDecrease = (event, item) => {
    event.stopPropagation();
    dispatch(decrementAmount(item));
  };

  const handleRemove = (event, productId) => {
    event.stopPropagation();
    dispatch(removeItem(productId));
  };
  

  return (
    <div>
      <Navbar onSearch={() => {}}/>
      <div className='cart-container'>
        {items.map((item) => (
          <div key={item.id} className='cart-item cart-item-prouct' onClick={() => handleProductClick(item.id)}>
            <div>
              <img src={item.img} style={{ width: '150px', height: '150px', objectFit: 'cover' }} alt={item.title} />
            </div>
            <div>
              {item.title} : <span style={{ fontWeight: 'bold' }}> ${item.price} </span>
            </div>
            <div>
              <button className='changeAmount' onClick={(event) => handleDecrease(event, item)}>-</button>
              {item.amount}
              <button className='changeAmount' onClick={(event) => handleIncrease(event, item)}>+</button>
              <button onClick={(event) => handleRemove(event, item.id)} className='cart-button'>{t("remove")}</button>
            </div>
          </div>
        ))}
        {items.length === 0 ? t("emptycart") :
          <div className='cart-item' style={{ fontWeight: 'bold' }}>{t("total")}: ${calculateTotal()}</div>
        }
      </div>
    </div>
  );
};

export default Cart;
