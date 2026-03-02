"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Truck, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-700"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ra mắt Q2/2026 - Đăng ký ngay!</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Khám Phá Năng Lượng
              <span className="block mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Tích Cực Với Tarot
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Bộ sưu tập bài Tarot, pha lê, và vật phẩm phong thủy cao cấp dành
              cho người Việt. Kèm hướng dẫn chi tiết bằng tiếng Việt.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                <span className="relative z-10">Đăng Ký Nhận Ưu Đãi 20%</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300">
                Khám Phá Sản Phẩm ↓
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-purple-600" />
                <span>Chính hãng 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-purple-600" />
                <span>Free ship {">"}500K</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-600" />
                <span>Hướng dẫn tiếng Việt</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Placeholder for hero image - using colorful gradient cards */}
            <div className="relative">
              {/* Card 1 */}
              <motion.div
                animate={{ 
                  rotate: [0, -5, 0],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 left-0 w-48 h-72 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl shadow-2xl transform -rotate-12 opacity-90"
              >
                <div className="p-6 text-white">
                  <div className="text-6xl mb-4">🔮</div>
                  <div className="text-sm font-semibold">Tarot</div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                animate={{ 
                  rotate: [0, 5, 0],
                  y: [0, 10, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-10 left-20 w-48 h-72 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl shadow-2xl transform rotate-6 opacity-95"
              >
                <div className="p-6 text-white">
                  <div className="text-6xl mb-4">💎</div>
                  <div className="text-sm font-semibold">Pha Lê</div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                animate={{ 
                  rotate: [0, -3, 0],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute top-20 left-40 w-48 h-72 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl shadow-2xl transform -rotate-3 z-10"
              >
                <div className="p-6 text-white">
                  <div className="text-6xl mb-4">🌟</div>
                  <div className="text-sm font-semibold">Phong Thủy</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-purple-600">1000+</div>
            <div className="text-sm text-gray-600 mt-1">Khách hàng</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">4.9⭐</div>
            <div className="text-sm text-gray-600 mt-1">Đánh giá</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">100%</div>
            <div className="text-sm text-gray-600 mt-1">Chính hãng</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">#1</div>
            <div className="text-sm text-gray-600 mt-1">Tarot Việt Nam</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 text-sm flex flex-col items-center gap-2"
        >
          <span>Khám phá thêm</span>
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
