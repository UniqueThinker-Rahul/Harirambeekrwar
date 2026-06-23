import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    address: '', city: '', postalCode: '', country: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const orderData = {
        orderItems: cartItems.map(i => ({ name: i.name, qty: i.qty, image: i.imageUrl, price: i.price, product: i._id })),
        shippingAddress: formData,
        paymentMethod: 'Razorpay',
        itemsPrice: totalPrice,
        taxPrice: 0,
        shippingPrice: 0,
        totalPrice: totalPrice,
      };

      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });
      
      if (res.ok) {
        clearCart();
        alert("Payment Successful! Order Confirmed.");
        navigate('/dashboard');
      } else {
        alert("Payment failed or order error");
      }
    } catch(err) {
      alert("System error");
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <>
      <SEO title="Secure Checkout" />
      <div className="min-h-screen bg-light-grey py-16 px-4">
         <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
             <h1 className="text-3xl font-bold mb-8 text-dark-grey text-center">Secure Checkout</h1>
             <div className="flex items-center justify-center gap-2 text-sm text-medium-grey mb-8">
               <ShieldCheck className="w-5 h-5 text-tertiary" /> 100% Secure Encrypted Payment Window
             </div>

             <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-dark-grey mb-2">Shipping Address</label>
                  <input required type="text" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none" placeholder="123 Cosmic Way" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-dark-grey mb-2">City</label>
                    <input required type="text" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none" placeholder="New Delhi" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark-grey mb-2">Postal Code</label>
                    <input required type="text" value={formData.postalCode} onChange={(e) => setFormData({...formData, postalCode: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none" placeholder="110001" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-grey mb-2">Country</label>
                  <input required type="text" value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none" placeholder="India" />
                </div>

                <div className="pt-8 border-t border-gray-100 flex justify-between font-bold text-xl text-dark-grey">
                   <span>Amount to Pay:</span>
                   <span>${totalPrice}</span>
                </div>

                <button disabled={loading} type="submit" className="w-full bg-dark-grey text-white font-bold text-lg py-5 rounded-full hover:bg-secondary transition-all shadow-md mt-8 flex justify-center items-center gap-2">
                  {loading ? 'Processing Securely...' : `Pay $${totalPrice} via Razorpay`} <ArrowRight className="w-5 h-5" />
                </button>
             </form>
         </div>
      </div>
    </>
  );
};

export default Checkout;
