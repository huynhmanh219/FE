"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BookOpen,
  Truck,
  Headphones,
  RotateCcw,
  Gift,
} from "lucide-react";
import { VALUE_PROPS } from "@/lib/constants";

const iconMap = {
  ShieldCheck: ShieldCheck,
  BookOpen: BookOpen,
  Truck: Truck,
  Headphones: Headphones,
  RotateCcw: RotateCcw,
  Gift: Gift,
};

export default function ValuePropositions() {
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
            ✨ Tại Sao Chọn Chúng Tôi?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cam kết mang đến trải nghiệm tốt nhất cho cộng đồng Tarot Việt Nam
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUE_PROPS.map((prop, index) => {
            const Icon = iconMap[prop.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {prop.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {prop.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
