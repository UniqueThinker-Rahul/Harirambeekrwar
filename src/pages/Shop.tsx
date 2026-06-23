import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Award, Star } from 'lucide-react';
import SEO from '../components/SEO';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  categoryId?: string;
  imageUrl: string;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <SEO 
        title="Authentic Healing Crystals & Yantras Store | Arviend Sud" 
        description="Shop 100% authentic, lab-certified healing crystals, gemstones, and powerfully energized Yantras handpicked to attract wealth, health, and cosmic alignment."
      />
      <div className="bg-light-grey min-h-screen pb-24">
        <section className="bg-dark-grey py-32 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-900/40 via-dark-grey to-dark-grey"></div>
          <div className="max-w-4xl mx-auto relative z-10">
             <div className="inline-block bg-white/10 text-primary px-4 py-2 rounded-full font-bold mb-6 text-sm tracking-widest uppercase border border-white/20">Energized & Certified</div>
             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Master Authentic Healing Shop</h1>
             <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 font-light">
               Every gemstone and crystal we offer is fully energized and rigorously lab-certified. We don't just sell stones; we provide exact cosmic tools to amplify your success.
             </p>
          </div>
        </section>

        {/* Guarantees */}
        <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-20 mb-16">
           <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="px-4">
                 <ShieldCheck className="w-12 h-12 text-secondary mx-auto mb-4" />
                 <h4 className="font-bold text-dark-grey text-xl mb-2">100% Genuine</h4>
                 <p className="text-medium-grey">Unheated, untreated, and completely natural stones.</p>
              </div>
              <div className="px-4 pt-8 md:pt-0">
                 <Award className="w-12 h-12 text-tertiary mx-auto mb-4" />
                 <h4 className="font-bold text-dark-grey text-xl mb-2">Lab Certified</h4>
                 <p className="text-medium-grey">Third-party lab certificates provided with all gemstones.</p>
              </div>
              <div className="px-4 pt-8 md:pt-0">
                 <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                 <h4 className="font-bold text-dark-grey text-xl mb-2">Pre-Energized</h4>
                 <p className="text-medium-grey">Purified and mantra-energized before shipping to you.</p>
              </div>
           </div>
        </section>

        {/* Products */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
           <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-dark-grey">All Healing Tools</h2>
              <div className="flex gap-4">
                 <button className="px-4 py-2 bg-dark-grey text-white font-bold rounded-full text-sm">All</button>
                 <button className="px-4 py-2 bg-white text-dark-grey border border-gray-200 hover:bg-gray-50 font-bold rounded-full text-sm hidden sm:block">Gemstones</button>
                 <button className="px-4 py-2 bg-white text-dark-grey border border-gray-200 hover:bg-gray-50 font-bold rounded-full text-sm hidden sm:block">Yantras</button>
              </div>
           </div>

          {loading ? (
             <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
             </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {products.map(product => (
                <div key={product._id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col group">
                  <div className="relative h-80 w-full bg-gray-50 overflow-hidden flex justify-center items-center p-4">
                    <img src={product.imageUrl} alt={product.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-multiply" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-dark-grey uppercase tracking-wider shadow-sm border border-gray-100">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-dark-grey mb-3 group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-medium-grey text-sm mb-6 flex-grow leading-relaxed line-clamp-3">Genuine, unheated, and untreated {product.categoryId === "gemstones" ? "gemstone" : "spiritual artifact"} specifically prescribed to remove planetary doshas and enhance your aura.</p>
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                      <div>
                        <span className="text-3xl font-black text-dark-grey">${product.price}</span>
                        <span className="text-xs text-medium-grey block tracking-wide uppercase mt-1">taxes included</span>
                      </div>
                      <Link to={`/shop/${product._id}`} className="flex items-center bg-dark-grey text-white px-6 py-4 rounded-full hover:bg-secondary transition-transform shadow-md hover:-translate-y-1 font-bold">
                        View Details <ChevronRight className="w-5 h-5 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
