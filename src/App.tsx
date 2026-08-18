/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
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

// New Legal Pages Imports
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsConditions from './pages/TermsConditions';

import FloatingWidgets from './components/FloatingWidgets';

export default function App() {
  // --- ANTI-INSPECT & ANTI-COPY SCRIPT ---
  useEffect(() => {
    // 1. Block Right-Click (Context Menu)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Block Keyboard Shortcuts (F12, Inspect, View Source, Copy, Paste, Select All)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent F12
      if (e.key === 'F12') {
        e.preventDefault();
      }
      // Prevent Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), Ctrl+Shift+C (Element Select)
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
      }
      // Prevent Ctrl+U (View Source)
      if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
      }
      // Prevent Ctrl+C (Copy), Ctrl+V (Paste), Ctrl+X (Cut), Ctrl+A (Select All)
      if (e.ctrlKey && (e.key === 'C' || e.key === 'c' || e.key === 'V' || e.key === 'v' || e.key === 'X' || e.key === 'x' || e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
      }
    };

    // 3. Block Copy, Cut, and Paste Events directly
    const handleClipboard = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    // 4. Block Dragging Images/Text
    const handleDrag = (e: Event) => {
      e.preventDefault();
    };

    // Attach Event Listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('copy', handleClipboard);
    document.addEventListener('cut', handleClipboard);
    document.addEventListener('paste', handleClipboard);
    document.addEventListener('dragstart', handleDrag);

    // Cleanup Event Listeners on Component Unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('copy', handleClipboard);
      document.removeEventListener('cut', handleClipboard);
      document.removeEventListener('paste', handleClipboard);
      document.removeEventListener('dragstart', handleDrag);
    };
  }, []);

  return (
    <HelmetProvider>
      <Router>
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
            
            {/* New Legal Pages Routes */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
          </Routes>
          <FloatingWidgets />
        </Layout>
      </Router>
    </HelmetProvider>
  );
}