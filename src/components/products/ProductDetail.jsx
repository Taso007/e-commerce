import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../../contexts/ProductContext';
import Navbar from '../Navbar';
import '../../styles/productDetail.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/cartSlice';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useProductContext();
  const product = products.find((product) => product.id === parseInt(id));
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const cartItem = items.find((item) => item.id === product.id);
  const {t} = useTranslation();

  const handleAddToCart = (event) => {
    event.stopPropagation();
    dispatch(addItem(product)); 
  };

  const isDisabled = (cartItem?.maxReached || false) || (product.amount >= product.quantity);

  return (
    <>
      <Navbar onSearch={() => {}}/>
      <div className={`product-detail-container ${isDisabled ? 'disabled-item' : ''}`}>
        <div className="product-detail-image">
          <img src={product.img} alt={product.title} />
        </div>
        <div className="product-detail-info">
          <h1 className="product-detail-title">{product.title}</h1>
          <div className="product-detail-brand">{product.brand}</div>
          <div className="product-detail-price">${product.price}</div>
          <div className="product-detail-description">{product.description}</div>
          <div className="product-detail-description">
            <Link to={product.url}>{product.url}</Link>
          </div>
          <button 
            className='product-detail-button' 
            onClick={handleAddToCart} 
            disabled={isDisabled}
          >
            {isDisabled ? t("maxReached") : t("addToCart")}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
