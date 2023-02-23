import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/SqueryButton/Button';
import CartItem from '../../components/CartItem/CartItem';
import { RootState } from '../../redux/rootReducer';
import './Cart.scss';

const Cart: React.FC = () => {
  const nav = useNavigate();
  const cart = useSelector((state: RootState) => state.cartReducer.cart);

  const totalCost = useMemo(() => {
    const subTotal: number = cart.reduce(
      (amount, item) => item.price * item.qty + amount,
      0
    );
    const taxes: number = Number((subTotal * 0.13).toFixed(2));
    const total: number = subTotal + taxes;
    return { subTotal, taxes, total };
  }, [cart]);

  console.log(totalCost);
  return (
    <section className='cart'>
      <div className='bd-container cart-container section'>
        {cart.length < 1 ? (
          <span className='cart-items empty-cart'>Your cart is empty!</span>
        ) : (
          <div className='cart-items'>
            {cart.map((item) => {
              return (
                <CartItem
                  key={item._id}
                  title={item.title}
                  details={item.details}
                  price={item.price}
                  images={item.images}
                  qty={item.qty}
                  inStock={item.inStock}
                  _id={item._id}
                />
              );
            })}
          </div>
        )}
        <div className='cart-checkout'>
          <div className='cart-checkout-container'>
            <p className='title'>summary</p>
            <div className='cart-checkout-wrapper'>
              <div className='checkout-left'>
                <p className='text'>subtotal</p>
                <p className='text'>taxes</p>
              </div>
              <div className='checkout-right'>
                <p className='text'>{`$${totalCost.subTotal.toFixed(2)}`}</p>
                <p className='text'>{`$${totalCost.taxes.toFixed(2)}`}</p>
              </div>
            </div>
            <div className='checkout-bottom'>
              <p className='text'>total</p>
              <p className='text'>{`$${totalCost.total.toFixed(2)}`}</p>
            </div>
          </div>
          <div className='checkout-btn-container'>
            <Button text='Check Out' handleClick={() => nav('/checkout')} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
