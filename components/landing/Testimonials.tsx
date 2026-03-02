"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
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
            ⭐ Khách Hàng Nói Gì Về Chúng Tôi
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Hơn 1,000 khách hàng hài lòng đã tin tưởng và ủng hộ
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-gray-900">4.9/5</span>
            <span className="text-gray-600">từ 1,234 đánh giá</span>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: typeof TESTIMONIALS[number];
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 7) return `${diffDays} ngày trước`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} tuần trước`;
    return `${Math.floor(diffDays / 30)} tháng trước`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10">
        <Quote className="w-12 h-12 text-purple-600" />
      </div>

      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Comment */}
      <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
        "{testimonial.comment}"
      </p>

      {/* Product Tag */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-purple-50 text-purple-600 text-sm rounded-full border border-purple-100">
          {testimonial.product}
        </span>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
        {/* Avatar */}
        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {testimonial.name.charAt(0)}
        </div>

        {/* Name & Date */}
        <div className="flex-1">
          <div className="font-semibold text-gray-900">
            {testimonial.name}
          </div>
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <span>{formatDate(testimonial.date)}</span>
            <span>•</span>
            <span className="text-green-600 font-medium">✓ Đã mua hàng</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
