"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import { SOCIAL_LINKS, CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl">🔮</div>
              <h3 className="text-2xl font-bold text-white">Tarot Shop</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Năng lượng tích cực, cuộc sống tốt đẹp. Mang những giá trị tinh thần đến với cộng đồng Việt Nam.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors text-lg"
                aria-label="TikTok"
              >
                🎵
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Về Chúng Tôi</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Giới Thiệu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Blog & Tin Tức
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Hướng Dẫn Tarot
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Sản Phẩm</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Bộ Bài Tarot
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Pha Lê & Đá Quý
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Vật Phẩm Phong Thủy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Nhang & Tinh Dầu
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Liên Hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-purple-400">📧</span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-purple-400 transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400">📞</span>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                  className="hover:text-purple-400 transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400">📍</span>
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} Tarot Shop. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-purple-400 transition-colors">
                Chính Sách Bảo Mật
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Điều Khoản Dịch Vụ
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Chính Sách Đổi Trả
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
