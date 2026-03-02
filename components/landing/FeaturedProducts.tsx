"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FEATURED_PRODUCTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🎴 Sản Phẩm Nổi Bật
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá bộ sưu tập được yêu thích nhất từ cộng đồng Tarot Việt Nam
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            🎁 Đăng ký email để nhận thông báo khi ra mắt
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
            <Sparkles className="w-5 h-5" />
            Nhận Ưu Đãi 20% Ngay
          </button>
        </motion.div>
      </div>
    </section>
  );
}

interface ProductCardProps {
  product: typeof FEATURED_PRODUCTS[number];
  index: number;
}

function ProductCard({ product, index }: ProductCardProps) {
  const formatPrice = (price: string) => {
    return `${parseInt(price).toLocaleString("vi-VN")}đ`;
  };

  const calculateDiscount = () => {
    if (!product.originalPrice) return null;
    const original = parseInt(product.originalPrice);
    const current = parseInt(product.price);
    const discount = Math.round(((original - current) / original) * 100);
    return discount;
  };

  const discount = calculateDiscount();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      {/* Tag Badge */}
      {product.tag && (
        <div className="absolute top-4 right-4 z-10">
          <span
            className={cn(
              "inline-block px-3 py-1 rounded-full text-xs font-semibold",
              product.tag === "Bestseller" &&
                "bg-yellow-100 text-yellow-700 border border-yellow-300",
              product.tag === "Hot" &&
                "bg-red-100 text-red-700 border border-red-300",
              product.tag === "Mới" &&
                "bg-green-100 text-green-700 border border-green-300"
            )}
          >
            {product.tag}
          </span>
        </div>
      )}

      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-purple-600 text-white">
            -{discount}%
          </span>
        </div>
      )}

      {/* Image Placeholder */}
      <div className="relative h-64 bg-gradient-to-br from-purple-100 to-indigo-100 overflow-hidden">
        {/* Placeholder with emoji/icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-7xl opacity-50">
            {product.category === "tarot" && "🔮"}
            {product.category === "crystals" && "💎"}
            {product.category === "fengshui" && "🌟"}
            {product.category === "incense" && "🕯️"}
          </div>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <button className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Xem Chi Tiết
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Product Name */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Rating (fake for now) */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500">(4.9)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl font-bold text-purple-600">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Notify Button */}
        <button className="w-full py-3 bg-purple-50 text-purple-600 font-semibold rounded-lg border-2 border-purple-200 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300">
          Thông Báo Khi Ra Mắt
        </button>
      </div>
    </motion.div>
  );
}
