/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import VastuConsultation from './pages/VastuConsultation';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';
import FloatingWidgets from './components/FloatingWidgets';
import EnquiryModal from './components/EnquiryModal';

import Analytics from './components/Analytics';
import ScrollToTop from './components/ScrollToTop';

export function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Analytics />
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/vastu-consultation" element={<VastuConsultation />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FloatingWidgets />
      <EnquiryModal />
    </Layout>
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}