"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔮</span>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Tarot Shop
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#products"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Sản Phẩm
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Về Chúng Tôi
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Liên Hệ
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all">
              Đăng Ký Ngay
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              <a
                href="#products"
                className="block text-gray-700 hover:text-purple-600 font-medium py-2"
              >
                Sản Phẩm
              </a>
              <a
                href="#about"
                className="block text-gray-700 hover:text-purple-600 font-medium py-2"
              >
                Về Chúng Tôi
              </a>
              <a
                href="#faq"
                className="block text-gray-700 hover:text-purple-600 font-medium py-2"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="block text-gray-700 hover:text-purple-600 font-medium py-2"
              >
                Liên Hệ
              </a>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg">
                Đăng Ký Ngay
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
