import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-light-grey w-full max-w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
