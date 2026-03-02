# Landing Page Setup Documentation

## ✅ Dependencies Installed

### Core Dependencies
- **next** (16.1.6) - React framework
- **react** (19.2.3) - UI library
- **react-dom** (19.2.3) - React DOM renderer
- **tailwindcss** (4.x) - Utility-first CSS framework
- **typescript** (5.x) - Type safety

### New Dependencies Added
- **react-hook-form** (^7.54.2) - Performant form library
- **zod** (^3.24.1) - TypeScript-first schema validation
- **@hookform/resolvers** (^3.9.1) - Validation resolvers for react-hook-form
- **lucide-react** (^0.469.0) - Beautiful icon library
- **framer-motion** (^11.15.0) - Animation library
- **clsx** (^2.1.1) - Conditional classnames utility
- **tailwind-merge** (^2.6.0) - Merge Tailwind classes without conflicts

## 📁 Project Structure

```
FE/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Landing page (to be updated)
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   └── api/                 # API routes (to be created)
│       └── waitlist/
│           └── route.ts     # Waitlist submission endpoint
│
├── components/              # React components
│   └── landing/            # Landing page components (to be created)
│       ├── Hero.tsx
│       ├── FeaturedProducts.tsx
│       ├── ValuePropositions.tsx
│       ├── EmailSignupForm.tsx
│       ├── Testimonials.tsx
│       ├── FAQ.tsx
│       └── Footer.tsx
│
├── lib/                     # Utility functions ✅ CREATED
│   ├── utils.ts            # cn() helper for classnames
│   ├── validations.ts      # Zod schemas for forms
│   └── constants.ts        # Static data (products, FAQs, etc.)
│
├── types/                   # TypeScript types ✅ CREATED
│   └── index.ts            # Type definitions
│
└── public/                  # Static assets
    └── images/             # Images (to be added)
        ├── hero-bg.jpg
        ├── products/
        └── avatars/
```

## 🛠️ Utility Files Created

### 1. `lib/utils.ts`
Contains `cn()` helper function for merging Tailwind classes:

```typescript
import { cn } from "@/lib/utils";

// Usage:
<div className={cn("base-class", isActive && "active-class")} />
```

### 2. `lib/validations.ts`
Zod schemas for form validation:

- `waitlistSchema` - Email signup form validation
- `WaitlistFormData` - TypeScript type from schema
- `PRODUCT_INTERESTS` - Available interest options

### 3. `lib/constants.ts`
Static data for landing page:

- `FEATURED_PRODUCTS` - 5 featured products (hardcoded)
- `VALUE_PROPS` - 6 value propositions
- `FAQS` - 7 frequently asked questions
- `TESTIMONIALS` - 3 customer testimonials
- `SOCIAL_LINKS` - Social media URLs
- `CONTACT_INFO` - Contact information

### 4. `types/index.ts`
TypeScript interfaces:

- `Product`
- `ValueProp`
- `FAQ`
- `Testimonial`
- `WaitlistSubmission`

## 🎯 Next Steps

### Phase 1: Components (Week 1)
1. Create `components/landing/` folder
2. Build Hero component
3. Build FeaturedProducts component
4. Build EmailSignupForm component
5. Build ValuePropositions component
6. Build FAQ component
7. Build Footer component

### Phase 2: API Route (Week 1)
1. Create `app/api/waitlist/route.ts`
2. Handle POST requests
3. Save to JSON file or send to external service
4. Return success/error responses

### Phase 3: Main Page (Week 1)
1. Update `app/page.tsx` with all components
2. Add animations with Framer Motion
3. Ensure responsive design

### Phase 4: Assets (Week 1-2)
1. Add product images to `public/images/products/`
2. Add hero background image
3. Add avatar images for testimonials
4. Optimize all images for web

### Phase 5: SEO & Meta (Week 2)
1. Update `app/layout.tsx` metadata
2. Add Open Graph images
3. Add structured data (JSON-LD)
4. Test SEO with Lighthouse

### Phase 6: Deploy (Week 2)
1. Deploy to Vercel
2. Setup custom domain
3. Configure environment variables
4. Test production build

## 🚀 Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📝 Import Aliases

The project is configured with path aliases:

```typescript
// Instead of:
import { cn } from "../../lib/utils";

// You can use:
import { cn } from "@/lib/utils";
```

Available aliases:
- `@/lib/*` - Utility functions
- `@/components/*` - React components
- `@/types/*` - TypeScript types
- `@/app/*` - App Router files

## 🎨 Icon Usage (Lucide React)

```typescript
import { ShieldCheck, BookOpen, Truck } from "lucide-react";

<ShieldCheck className="w-6 h-6 text-purple-500" />
```

Available icons in VALUE_PROPS:
- ShieldCheck
- BookOpen
- Truck
- Headphones
- RotateCcw
- Gift

## 📋 Form Validation Example

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { waitlistSchema, WaitlistFormData } from "@/lib/validations";

const form = useForm<WaitlistFormData>({
  resolver: zodResolver(waitlistSchema),
  defaultValues: {
    name: "",
    email: "",
    phone: "",
    interests: [],
  },
});
```

## 🎭 Animation Example (Framer Motion)

```typescript
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content here
</motion.div>
```

## 📦 Data Usage

```typescript
import { FEATURED_PRODUCTS, FAQS, VALUE_PROPS } from "@/lib/constants";

// Map over products
{FEATURED_PRODUCTS.map((product) => (
  <ProductCard key={product.id} {...product} />
))}
```

## ✅ Ready to Code!

All dependencies are installed and utility files are set up. You can now start building components for the landing page.

---

**Last Updated:** March 2, 2026
