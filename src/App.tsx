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
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Booking from './pages/Booking';
import Dashboard from './pages/Dashboard';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Reports from './pages/Reports';
import Tools from './pages/Tools';
import Contact from './pages/Contact';
import UrgentLovePlan from './pages/UrgentLovePlan';
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
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/urgent-love-plan" element={<UrgentLovePlan />} />
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