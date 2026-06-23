import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Calendar } from "lucide-react";

export default function FloatingWidgets() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <Link
        to="/booking"
        className="flex items-center justify-center gap-2 bg-yellow-400 text-dark-grey font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        <Calendar className="w-5 h-5" /> Let's Talk!
      </Link>
      
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform ml-auto"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
