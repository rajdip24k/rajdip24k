import React from 'react';
import { useSelector } from 'react-redux';
import ItemList from './ItemList';

function Cart(props) {
    const cartItemss = useSelector((store)=>store.cart.items);
    // const cartItems = useSelector((store)=>store.cart.items);
    console.log("cartItemsss",cartItemss)
    return (
        <div className='text-center m-10 p-10'>
       <h1 className='text-2xl font-bold'>Cart component</h1>
       <div>
        <ItemList itemss={cartItemss}/>
       </div>
        </div>
    );
}

export default Cart;