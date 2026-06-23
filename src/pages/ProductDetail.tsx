import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Check, ArrowLeft, ShieldCheck, Sparkles, Award } from 'lucide-react';
import SEO from '../components/SEO';
import { useCart } from '../context/CartContext';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  benefits: string[];
}

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, qty: 1 });
      navigate('/cart');
    }
  };

  if (loading) return (
     <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
     </div>
  );

  if (!product) return <div className="text-center py-20 text-dark-grey">Product not found</div>;

  return (
    <>
      <SEO 
        title={`${product.name} | Buy Authentic ${product.category}`} 
        description={`Buy certified ${product.name}. ${product.description.substring(0, 100)}... Enhance your cosmic energy today.`}
      />
      <div className="bg-light-grey min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/shop" className="inline-flex items-center text-medium-grey hover:text-dark-grey mb-8 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Products
          </Link>
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-1/2 relative bg-gray-50 p-8 flex items-center justify-center border-r border-gray-100">
               <img src={product.imageUrl} alt={product.name} className="w-full max-w-md h-auto object-cover rounded-2xl shadow-sm mix-blend-multiply" />
            </div>
            
            {/* Details */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-yellow-50 text-secondary font-bold tracking-wide uppercase text-xs px-4 py-2 rounded-full mb-6 w-fit border border-yellow-100">
                <Sparkles className="w-3 h-3" /> {product.category}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-dark-grey mb-4 leading-tight">{product.name}</h1>
              <div className="flex items-end gap-4 mb-6 pb-6 border-b border-gray-100">
                <p className="text-4xl font-black text-dark-grey">${product.price}</p>
                <p className="text-sm text-medium-grey font-medium mb-1">Inclusive of all taxes</p>
              </div>
              
              <p className="text-medium-grey text-lg leading-relaxed mb-8">{product.description}</p>
              
              {product.benefits && product.benefits.length > 0 && (
                <div className="mb-10">
                  <h3 className="font-bold text-dark-grey mb-5 text-xl">Why you need this:</h3>
                  <ul className="space-y-4">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="mt-1 mr-4 bg-green-50 text-tertiary p-1.5 rounded-full shrink-0">
                          <Check className="w-4 h-4" />
                        </div>
                        <span className="text-medium-grey text-lg leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex items-center gap-4 mb-10 text-sm text-medium-grey bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2"><ShieldCheck className="text-tertiary w-5 h-5"/> 100% Authentic</div>
                <div className="flex items-center gap-2"><Award className="text-primary w-5 h-5"/> Lab Certified</div>
              </div>

              <button onClick={handleAddToCart} className="w-full flex justify-center items-center py-5 px-8 rounded-full bg-dark-grey text-white font-bold text-lg hover:bg-secondary hover:shadow-[0_0_15px_rgba(200,0,0,0.3)] transition-all transform hover:-translate-y-1">
                <ShoppingCart className="w-6 h-6 mr-3" /> Add to Cart — Secure Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Reviews */}
      <section className="py-16 bg-white border-t border-gray-100">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-dark-grey mb-8 flex items-center gap-2">
               Verified Customer Reviews <Award className="w-6 h-6 text-tertiary" />
            </h2>
            <div className="space-y-6">
               {[1, 2, 3].map((_, idx) => (
                  <div key={idx} className="bg-gray-50 border border-gray-100 p-6 rounded-2xl">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                           {["RS", "PK", "JD"][idx]}
                        </div>
                        <div>
                           <p className="font-bold text-dark-grey">{["Rahul S.", "Pooja K.", "Jai D."][idx]}</p>
                           <p className="text-xs text-medium-grey">Verified Buyer</p>
                        </div>
                        <div className="ml-auto flex text-primary">
                           <Award className="w-5 h-5 fill-current" />
                           <Award className="w-5 h-5 fill-current" />
                           <Award className="w-5 h-5 fill-current" />
                           <Award className="w-5 h-5 fill-current" />
                           <Award className="w-5 h-5 fill-current" />
                        </div>
                     </div>
                     <p className="text-medium-grey italic">
                        {["This product completely exceeded my expectations. The quality and the energy is palpable.", "Fast shipping and authentic quality. Highly recommend to everyone looking for genuine tools.", "Beautifully crafted and I can feel the positive vibrations. Worth every penny."][idx]}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </>
  );
};

export default ProductDetail;
