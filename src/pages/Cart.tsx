import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <>
        <SEO title="Shopping Cart" description="Review your selected cosmic healing tools and energized gemstones before secure checkout." />
        <div className="bg-light-grey min-h-[70vh] py-20 px-4 flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 border border-gray-100">
            <ShoppingBag className="w-10 h-10 text-medium-grey" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">Your Cosmic Cart is Empty</h1>
          <p className="text-lg text-medium-grey mb-10 max-w-md">Looks like you haven't added any spiritual tools or gemstones to your cart yet.</p>
          
          <Link to="/shop" className="inline-flex items-center px-8 py-4 bg-primary text-dark-grey font-bold rounded-full hover:bg-yellow-400 transition-all shadow-md transform hover:-translate-y-1">
            Start Exploring <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO title="Shopping Cart" />
      <div className="bg-light-grey min-h-screen py-16 px-4">
         <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-dark-grey mb-8">Your Cart</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="lg:col-span-2 space-y-4">
                  {cartItems.map(item => (
                    <div key={item._id} className="bg-white p-4 rounded-2xl flex items-center gap-4 shadow-sm">
                       <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
                       <div className="flex-grow">
                          <h3 className="font-bold text-lg text-dark-grey">{item.name}</h3>
                          <p className="text-medium-grey">Qty: {item.qty}</p>
                          <p className="font-bold text-lg">${item.price}</p>
                       </div>
                       <button onClick={() => removeFromCart(item._id)} className="p-3 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition">
                          <Trash2 className="w-5 h-5" />
                       </button>
                    </div>
                  ))}
               </div>
               <div className="bg-white p-8 rounded-3xl shadow-sm h-fit sticky top-24 border border-gray-100">
                  <h3 className="text-xl font-bold mb-6 text-dark-grey">Order Summary</h3>
                  <div className="space-y-4 mb-6 text-medium-grey">
                     <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span className="font-semibold text-dark-grey">${totalPrice}</span>
                     </div>
                     <div className="flex justify-between">
                        <span>Shipping</span>
                        <span className="font-semibold text-green-600">Free</span>
                     </div>
                     <div className="border-t border-gray-100 pt-4 flex justify-between text-lg font-bold text-dark-grey">
                        <span>Total</span>
                        <span>${totalPrice}</span>
                     </div>
                  </div>
                  <button onClick={() => navigate('/checkout')} className="w-full bg-dark-grey text-white py-4 rounded-full font-bold hover:bg-secondary transition flex justify-center items-center">
                    Proceed to Checkout <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
               </div>
            </div>
         </div>
      </div>
    </>
  );
};

export default Cart;
