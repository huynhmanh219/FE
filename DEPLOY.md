# 🚀 HƯỚNG DẪN DEPLOY LÊN VERCEL

## ✅ ĐÃ CÀI ĐẶT

- ✅ Vercel CLI đã được cài đặt globally
- ✅ Project build thành công
- ✅ Git repository đã khởi tạo

---

## PHƯƠNG ÁN 1: Deploy qua Vercel CLI (NHANH NHẤT)

### Bước 1: Đăng nhập Vercel

Mở terminal trong folder FE và chạy:

```bash
vercel login
```

Chọn phương thức đăng nhập:
- **GitHub** (recommend)
- Email
- GitLab
- Bitbucket

Browser sẽ mở ra → Click "Continue" → Đăng nhập thành công!

---

### Bước 2: Deploy lần đầu (Preview)

```bash
vercel
```

Vercel sẽ hỏi một số câu hỏi:

**Q: Set up and deploy "~/tarot-project/FE"?**
→ `Y` (Yes)

**Q: Which scope do you want to deploy to?**
→ Chọn account của bạn (dùng mũi tên ↑↓, Enter để chọn)

**Q: Link to existing project?**
→ `N` (No - tạo project mới)

**Q: What's your project's name?**
→ `tarot-landing-page` (hoặc tên khác)

**Q: In which directory is your code located?**
→ `./` (Enter - dùng current directory)

**Q: Want to override the settings?**
→ `N` (No - Vercel tự detect Next.js)

Sau đó Vercel sẽ:
1. Upload code
2. Build project
3. Deploy to preview URL

**Preview URL** sẽ hiện ra (dạng: `https://tarot-landing-page-xyz.vercel.app`)

---

### Bước 3: Deploy Production

Nếu preview OK, deploy lên production:

```bash
vercel --prod
```

Sẽ nhận được **Production URL**: `https://tarot-landing-page.vercel.app`

---

### Bước 4: Deploy tự động khi có thay đổi

Mỗi lần thay đổi code:

```bash
# Commit changes
git add .
git commit -m "Update landing page"

# Deploy production
vercel --prod
```

---

## PHƯƠNG ÁN 2: Deploy qua Vercel Dashboard

### Bước 1: Push code lên GitHub

```bash
# Trong folder FE
cd d:\Project\tarot-project\FE

# Kiểm tra status
git status

# Commit tất cả
git add .
git commit -m "Complete landing page"

# Tạo GitHub repository mới tại https://github.com/new
# Repository name: tarot-landing-page

# Add remote (thay YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/tarot-landing-page.git

# Push lên GitHub
git branch -M main
git push -u origin main
```

**Lưu ý:** Nếu push lần đầu, cần Personal Access Token:
1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Chọn scope: `repo`
4. Copy token và dùng làm password khi push

---

### Bước 2: Import vào Vercel

1. Mở **https://vercel.com**
2. Đăng nhập với GitHub
3. Click **"Add New..."** → **"Project"**
4. Tìm repository `tarot-landing-page`
5. Click **"Import"**
6. **Configure:**
   - Project Name: `tarot-landing-page`
   - Framework: Next.js (auto-detect)
   - Root Directory: `./`
   - Build Command: `npm run build` (auto)
   - Output Directory: `.next` (auto)
7. Click **"Deploy"**
8. Đợi 1-2 phút → XONG! 🎉

---

## 📋 SAU KHI DEPLOY THÀNH CÔNG

### Bạn sẽ nhận được:

1. **Production URL:** `https://tarot-landing-page.vercel.app`
   - SSL certificate tự động (HTTPS)
   - Global CDN (nhanh toàn cầu)
   - Auto-scaling

2. **Preview URLs:** Mỗi lần push code mới
   - Vercel tự tạo preview URL để test
   - Comment trực tiếp trên GitHub PR

3. **Dashboard:** Quản lý tại `https://vercel.com/dashboard`
   - View analytics
   - Check deployment logs
   - Manage domains
   - Environment variables

---

## 🌐 SETUP CUSTOM DOMAIN (TÙY CHỌN)

Nếu bạn có domain riêng (ví dụ: `tarotshop.vn`):

### Bước 1: Thêm domain trong Vercel

1. Vào project dashboard
2. Settings → Domains
3. Add domain: `tarotshop.vn` và `www.tarotshop.vn`
4. Vercel sẽ cho bạn DNS records cần thêm

### Bước 2: Cấu hình DNS

Vào nhà cung cấp domain (Tên.vn, GoDaddy, etc.) và thêm:

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Đợi 5-60 phút → Domain sẽ hoạt động!

---

## 🔧 CẬP NHẬT SAU KHI DEPLOY

### Cập nhật content:

1. Mở `FE/lib/constants.ts`
2. Chỉnh sửa:
   - Products (tên, giá, mô tả)
   - FAQs
   - Contact info
   - Social links
3. Deploy lại:
   ```bash
   vercel --prod
   ```

### Thêm hình ảnh thật:

1. Thêm ảnh vào `FE/public/images/`
2. Update image paths trong `constants.ts`
3. Deploy lại

---

## 📊 ANALYTICS & MONITORING

### Vercel Analytics (Built-in)

1. Vào project dashboard
2. Analytics tab
3. Xem:
   - Page views
   - Unique visitors
   - Top pages
   - Performance metrics

### Google Analytics (Nếu muốn thêm)

1. Tạo GA4 property tại `https://analytics.google.com`
2. Copy Measurement ID (dạng: `G-XXXXXXXXXX`)
3. Thêm vào `FE/app/layout.tsx`:

```typescript
export const metadata = {
  // ... existing metadata
  other: {
    'google-site-verification': 'your-verification-code',
  },
}
```

4. Thêm Google Analytics script vào layout
5. Deploy lại

---

## 🐛 TROUBLESHOOTING

### Lỗi: Build failed

```bash
# Kiểm tra build locally trước
npm run build

# Nếu có lỗi, fix rồi deploy lại
```

### Lỗi: Module not found

```bash
# Clear cache và reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Lỗi: Image optimization

Nếu dùng Next.js Image component:
- Images phải ở trong `public/` folder
- Hoặc dùng external image loader

---

## 📞 HỖ TRỢ

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Support:** https://vercel.com/support

---

## ✅ CHECKLIST TRƯỚC KHI DEPLOY

- [ ] `npm run build` chạy thành công
- [ ] Không có lỗi TypeScript
- [ ] Không có lỗi ESLint
- [ ] Đã test trên local (`npm run dev`)
- [ ] Đã update contact info trong `constants.ts`
- [ ] Đã update social links
- [ ] Đã commit tất cả changes
- [ ] (Optional) Đã chuẩn bị domain

---

**READY TO DEPLOY? RUN:**

```bash
vercel --prod
```

🎉 Chúc mừng! Landing page của bạn đã online!
