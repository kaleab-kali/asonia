# Asonia Birthday Website - Complete Specification

## Project Overview
Create an elegant birthday website for Asonia with 7 sections, sophisticated animations, and a rose gold + cream + black color scheme.

---

## Technical Stack

### Core Technologies:
- **Vite** - Build tool and dev server
- **React 18+** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling

### Animation Libraries:
1. **GSAP (GreenSock Animation Platform)** - Premium animations
   ```bash
   npm install gsap
   npm install -D @types/gsap
   ```
   - ScrollTrigger plugin for scroll animations
   - Best for smooth, professional animations

2. **AOS (Animate On Scroll)** - Scroll animations
   ```bash
   npm install aos
   npm install -D @types/aos
   ```
   - Lightweight and elegant fade-ins

3. **tsParticles** - Subtle background particle effects
   ```bash
   npm install tsparticles @tsparticles/react
   npm install @tsparticles/slim
   ```

4. **Canvas Confetti** - Confetti burst animation
   ```bash
   npm install canvas-confetti
   npm install -D @types/canvas-confetti
   ```

5. **Typed.js** - Typewriter effect for text
   ```bash
   npm install typed.js
   npm install -D @types/typed.js
   ```

6. **React Icons** - Icon library
   ```bash
   npm install react-icons
   ```

### Fonts (Google Fonts):
- **Playfair Display** - Elegant serif for headings
- **Cormorant Garamond** - For Vogue cover
- **Montserrat** - Clean sans-serif for body text

Add to your HTML:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Cormorant+Garamond:wght@300;400;600&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet">
```

---

## Color Palette (Exact Codes)

### Tailwind Config Colors:
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'rose-gold': '#B76E79',
        'rose-gold-light': '#E8C4C4',
        'cream': '#FFF8F0',
        'cream-dark': '#F5EBE0',
        'elegant-black': '#1A1A1A',
        'soft-black': '#2D2D2D',
        'gold-accent': '#D4AF37',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      }
    }
  }
}
```

### Color Reference:
- **Primary Rose Gold**: `#B76E79` - Main accent color
- **Light Rose Gold**: `#E8C4C4` - Subtle backgrounds
- **Cream**: `#FFF8F0` - Main background
- **Dark Cream**: `#F5EBE0` - Alternate sections
- **Black**: `#1A1A1A` - Text and dark sections
- **Soft Black**: `#2D2D2D` - Secondary text
- **Gold Accent**: `#D4AF37` - Highlights and accents

---

## Folder Structure (Vite + React + TypeScript + Tailwind)

```
asonia-birthday-website/
├── node_modules/
├── public/
│   ├── images/
│   │   ├── original/                  # Original high-res images
│   │   │   ├── asonia-vogue.jpg
│   │   │   ├── snap1.jpg
│   │   │   ├── snap2.jpg
│   │   │   ├── snap3.jpg
│   │   │   ├── snap4.jpg
│   │   │   └── snap5.jpg
│   │   ├── optimized/                 # Optimized images (generated)
│   │   │   ├── asonia-vogue.webp
│   │   │   ├── asonia-vogue-thumb.webp
│   │   │   ├── snap1.webp
│   │   │   ├── snap1-thumb.webp
│   │   │   └── ... (all optimized versions)
│   │   └── placeholders/              # Low-quality placeholders
│   │       └── ... (blurred thumbnails)
│   ├── sounds/
│   │   └── background-music.mp3       # Optional
│   ├── favicon.ico
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Countdown.tsx          # Section 1
│   │   │   ├── VogueCover.tsx         # Section 2
│   │   │   ├── NameAnimation.tsx      # Section 3
│   │   │   ├── PhotoGallery.tsx       # Section 4
│   │   │   ├── GiftBox.tsx            # Section 5
│   │   │   ├── SignatureCard.tsx      # Section 6
│   │   │   └── FinalWish.tsx          # Section 7
│   │   ├── ui/
│   │   │   ├── LoadingScreen.tsx      # Initial loading
│   │   │   ├── ScrollProgress.tsx     # Scroll indicator
│   │   │   ├── CustomCursor.tsx       # Custom cursor effect
│   │   │   ├── MusicPlayer.tsx        # Background music
│   │   │   └── ProgressiveImage.tsx   # Image lazy loading component
│   │   └── Layout.tsx                 # Main layout wrapper
│   ├── hooks/
│   │   ├── useImagePreload.ts         # Image preloading hook
│   │   ├── useAnalytics.ts            # Analytics tracking hook
│   │   └── useScrollAnimation.ts      # Scroll animation hook
│   ├── lib/
│   │   ├── animations.ts              # GSAP animation helpers
│   │   ├── confetti.ts                # Confetti configurations
│   │   └── analytics.ts               # Analytics utility functions
│   ├── types/
│   │   ├── index.ts                   # Global type definitions
│   │   └── analytics.ts               # Analytics types
│   ├── utils/
│   │   ├── imageOptimization.ts       # Image optimization helpers
│   │   └── constants.ts               # App constants
│   ├── styles/
│   │   ├── index.css                  # Main Tailwind imports
│   │   └── animations.css             # Custom CSS animations
│   ├── App.tsx                        # Main app component
│   ├── main.tsx                       # Entry point
│   └── vite-env.d.ts                  # Vite types
├── .env                               # Environment variables
├── .env.example                       # Example environment variables
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json                      # TypeScript config
├── tsconfig.node.json                 # TypeScript Node config
├── vite.config.ts                     # Vite config with TypeScript
└── README.md
```

---

## Image Optimization Strategy

### Overview
Since the countdown is shown first while images load, we need a robust image optimization and loading strategy.

### 1. Image Preparation

#### Required Image Formats:
- **Original**: High-res JPG/PNG (for quality)
- **WebP**: Modern format (smaller file size)
- **AVIF**: Next-gen format (best compression)
- **Thumbnail**: Low-quality placeholder (LQIP)

#### Image Sizes Needed:
```typescript
// src/utils/constants.ts
export const IMAGE_SIZES = {
  vogueCover: {
    width: 1200,
    height: 1600,
    thumbnail: { width: 50, height: 67 }
  },
  gallery: {
    width: 800,
    height: 1000,
    thumbnail: { width: 40, height: 50 }
  }
};
```

### 2. Image Optimization Tools

#### Option A: Sharp (Recommended for Build Time)
```bash
npm install -D sharp
```

Create optimization script:
```typescript
// scripts/optimize-images.ts
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const INPUT_DIR = './public/images/original';
const OUTPUT_DIR = './public/images/optimized';
const PLACEHOLDER_DIR = './public/images/placeholders';

async function optimizeImage(filename: string) {
  const inputPath = path.join(INPUT_DIR, filename);
  const name = path.parse(filename).name;
  
  // Generate WebP
  await sharp(inputPath)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, `${name}.webp`));
  
  // Generate AVIF
  await sharp(inputPath)
    .avif({ quality: 80 })
    .toFile(path.join(OUTPUT_DIR, `${name}.avif`));
  
  // Generate thumbnail (LQIP)
  await sharp(inputPath)
    .resize(50, null, { fit: 'inside' })
    .blur(10)
    .webp({ quality: 30 })
    .toFile(path.join(PLACEHOLDER_DIR, `${name}-thumb.webp`));
  
  // Generate base64 placeholder
  const placeholder = await sharp(inputPath)
    .resize(20, null, { fit: 'inside' })
    .blur(10)
    .webp({ quality: 20 })
    .toBuffer();
  
  return {
    name,
    placeholder: `data:image/webp;base64,${placeholder.toString('base64')}`
  };
}

// Run optimization
const files = fs.readdirSync(INPUT_DIR);
const placeholders: Record<string, string> = {};

for (const file of files) {
  const result = await optimizeImage(file);
  placeholders[result.name] = result.placeholder;
}

// Save placeholders
fs.writeFileSync(
  './src/utils/placeholders.json',
  JSON.stringify(placeholders, null, 2)
);

console.log('✅ Images optimized!');
```

Add to `package.json`:
```json
{
  "scripts": {
    "optimize-images": "tsx scripts/optimize-images.ts"
  }
}
```

### 3. Progressive Image Loading Component

```typescript
// src/components/ui/ProgressiveImage.tsx
import { useState, useEffect } from 'react';

interface ProgressiveImageProps {
  src: string;
  placeholder: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
}

export const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  placeholder,
  alt,
  className = '',
  onLoad
}) => {
  const [imgSrc, setImgSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImgSrc(src);
      setIsLoaded(true);
      onLoad?.();
    };
  }, [src, onLoad]);

  return (
    <div className="relative overflow-hidden">
      <img
        src={imgSrc}
        alt={alt}
        className={`transition-all duration-700 ${
          isLoaded ? 'blur-0 scale-100' : 'blur-md scale-105'
        } ${className}`}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      )}
    </div>
  );
};
```

### 4. Image Preloading Hook

```typescript
// src/hooks/useImagePreload.ts
import { useState, useEffect } from 'react';

interface PreloadStatus {
  loaded: number;
  total: number;
  progress: number;
  isComplete: boolean;
}

export const useImagePreload = (imageUrls: string[]): PreloadStatus => {
  const [status, setStatus] = useState<PreloadStatus>({
    loaded: 0,
    total: imageUrls.length,
    progress: 0,
    isComplete: false
  });

  useEffect(() => {
    if (imageUrls.length === 0) {
      setStatus({ loaded: 0, total: 0, progress: 100, isComplete: true });
      return;
    }

    let loadedCount = 0;

    const loadImage = (url: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        
        img.onload = () => {
          loadedCount++;
          const progress = Math.round((loadedCount / imageUrls.length) * 100);
          
          setStatus({
            loaded: loadedCount,
            total: imageUrls.length,
            progress,
            isComplete: loadedCount === imageUrls.length
          });
          
          resolve();
        };
        
        img.onerror = () => {
          console.error(`Failed to load image: ${url}`);
          loadedCount++;
          resolve(); // Continue even if image fails
        };
        
        img.src = url;
      });
    };

    // Load all images
    Promise.all(imageUrls.map(loadImage));
  }, [imageUrls]);

  return status;
};
```

### 5. Loading Screen with Progress

```typescript
// src/components/ui/LoadingScreen.tsx
import { useEffect } from 'react';
import { useImagePreload } from '@/hooks/useImagePreload';
import gsap from 'gsap';

const IMAGES_TO_PRELOAD = [
  '/images/optimized/asonia-vogue.webp',
  '/images/optimized/snap1.webp',
  '/images/optimized/snap2.webp',
  '/images/optimized/snap3.webp',
  '/images/optimized/snap4.webp',
  '/images/optimized/snap5.webp',
];

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const { progress, isComplete } = useImagePreload(IMAGES_TO_PRELOAD);

  useEffect(() => {
    if (isComplete) {
      // Wait minimum 2 seconds for elegance
      setTimeout(() => {
        gsap.to('.loading-screen', {
          opacity: 0,
          duration: 1,
          onComplete: () => {
            onComplete();
          }
        });
      }, 2000);
    }
  }, [isComplete, onComplete]);

  return (
    <div className="loading-screen fixed inset-0 bg-cream z-50 flex flex-col items-center justify-center">
      <div className="text-center">
        {/* Animated ASONIA text */}
        <h1 className="font-playfair text-6xl text-rose-gold mb-8 animate-fade-in">
          ASONIA
        </h1>
        
        {/* Progress bar */}
        <div className="w-64 h-2 bg-rose-gold-light rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-rose-gold transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Progress percentage */}
        <p className="font-montserrat text-soft-black text-sm">
          {progress}%
        </p>
      </div>
    </div>
  );
};
```

### 6. Image Component with Multiple Sources

```typescript
// src/components/ui/OptimizedImage.tsx
import { ProgressiveImage } from './ProgressiveImage';
import placeholders from '@/utils/placeholders.json';

interface OptimizedImageProps {
  name: string; // e.g., 'asonia-vogue', 'snap1'
  alt: string;
  className?: string;
  onLoad?: () => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  name,
  alt,
  className,
  onLoad
}) => {
  const placeholder = placeholders[name as keyof typeof placeholders] || '';
  
  return (
    <picture>
      <source
        srcSet={`/images/optimized/${name}.avif`}
        type="image/avif"
      />
      <source
        srcSet={`/images/optimized/${name}.webp`}
        type="image/webp"
      />
      <ProgressiveImage
        src={`/images/original/${name}.jpg`}
        placeholder={placeholder}
        alt={alt}
        className={className}
        onLoad={onLoad}
      />
    </picture>
  );
};
```

### 7. Image Optimization Best Practices

#### In `vite.config.ts`:
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.has('thumbnail')) {
          return new URLSearchParams({
            w: '50',
            h: '50',
            fit: 'cover',
            format: 'webp',
            quality: '30'
          });
        }
        return new URLSearchParams({
          format: 'webp',
          quality: '85'
        });
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'animations': ['gsap', 'aos'],
        }
      }
    }
  }
});
```

### 8. Lazy Loading for Gallery Images

```typescript
// src/components/sections/PhotoGallery.tsx
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const PhotoGallery: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div ref={ref} className="min-h-screen bg-cream py-20 px-8">
      {inView && (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Gallery items load only when in view */}
        </div>
      )}
    </div>
  );
};
```

---

## Analytics & Tracking Setup

### 1. Vercel Analytics (Built-in)

#### Install:
```bash
npm install @vercel/analytics
```

#### Setup in `main.tsx`:
```typescript
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import App from './App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
);
```

### 2. Custom Analytics Hook

```typescript
// src/hooks/useAnalytics.ts
import { useEffect } from 'react';
import { track } from '@vercel/analytics';

interface PageViewData {
  path: string;
  referrer: string;
  userAgent: string;
  timestamp: string;
}

interface EventData {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const useAnalytics = () => {
  // Track page view on mount
  useEffect(() => {
    trackPageView();
  }, []);

  const trackPageView = () => {
    const data: PageViewData = {
      path: window.location.pathname,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    };

    // Send to Vercel Analytics
    track('page_view', data);

    // Also send to custom endpoint if needed
    sendToCustomAnalytics('page_view', data);
  };

  const trackEvent = (eventData: EventData) => {
    track(eventData.action, {
      category: eventData.category,
      label: eventData.label,
      value: eventData.value
    });

    sendToCustomAnalytics('event', eventData);
  };

  const trackSectionView = (sectionName: string) => {
    trackEvent({
      action: 'section_view',
      category: 'engagement',
      label: sectionName
    });
  };

  const trackInteraction = (element: string) => {
    trackEvent({
      action: 'interaction',
      category: 'user_action',
      label: element
    });
  };

  return {
    trackPageView,
    trackEvent,
    trackSectionView,
    trackInteraction
  };
};

// Send to custom analytics endpoint
async function sendToCustomAnalytics(type: string, data: any) {
  try {
    await fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, data, timestamp: Date.now() })
    });
  } catch (error) {
    console.error('Analytics error:', error);
  }
}
```

### 3. Analytics Utility Functions

```typescript
// src/lib/analytics.ts
interface VisitorInfo {
  visitCount: number;
  firstVisit: string;
  lastVisit: string;
  sessionId: string;
}

export const getVisitorInfo = (): VisitorInfo => {
  const stored = localStorage.getItem('visitor_info');
  
  if (stored) {
    const info = JSON.parse(stored);
    info.visitCount++;
    info.lastVisit = new Date().toISOString();
    localStorage.setItem('visitor_info', JSON.stringify(info));
    return info;
  }

  const newInfo: VisitorInfo = {
    visitCount: 1,
    firstVisit: new Date().toISOString(),
    lastVisit: new Date().toISOString(),
    sessionId: generateSessionId()
  };

  localStorage.setItem('visitor_info', JSON.stringify(newInfo));
  return newInfo;
};

export const generateSessionId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const getDeviceInfo = () => {
  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    isMobile: /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent)
  };
};

export const getLocationInfo = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    return await response.json();
  } catch {
    return null;
  }
};
```

### 4. Vercel Serverless Function for Custom Analytics

Create `api/analytics.ts` in your project root:

```typescript
// api/analytics.ts
import { VercelRequest, VercelResponse } from '@vercel/node';

// This runs as a serverless function on Vercel
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, data, timestamp } = req.body;

    // Log to console (visible in Vercel logs)
    console.log('Analytics Event:', {
      type,
      data,
      timestamp,
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
      userAgent: req.headers['user-agent']
    });

    // You can also send to external analytics service
    // await sendToExternalService(data);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
```

### 5. Environment Variables for Analytics

Create `.env`:
```bash
# Analytics
VITE_ENABLE_ANALYTICS=true
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX  # Optional: Google Analytics
```

Create `.env.example`:
```bash
# Copy this file to .env and fill in your values
VITE_ENABLE_ANALYTICS=true
VITE_GA_MEASUREMENT_ID=your_measurement_id_here
```

### 6. Analytics in App Component

```typescript
// src/App.tsx
import { useEffect, useState } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';
import { getVisitorInfo, getDeviceInfo, getLocationInfo } from '@/lib/analytics';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { Countdown } from '@/components/sections/Countdown';
// ... other imports

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { trackPageView, trackSectionView, trackInteraction } = useAnalytics();

  useEffect(() => {
    // Track visitor and device info on mount
    const visitorInfo = getVisitorInfo();
    const deviceInfo = getDeviceInfo();
    
    console.log('Visitor Info:', visitorInfo);
    console.log('Device Info:', deviceInfo);
    
    // Track location (async)
    getLocationInfo().then(location => {
      console.log('Location:', location);
    });
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    trackInteraction('loading_complete');
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      {!isLoading && (
        <div className="app">
          <Countdown onView={() => trackSectionView('countdown')} />
          {/* Other sections */}
        </div>
      )}
    </>
  );
}

export default App;
```

### 7. Section View Tracking

```typescript
// src/components/sections/Countdown.tsx
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface CountdownProps {
  onView?: () => void;
}

export const Countdown: React.FC<CountdownProps> = ({ onView }) => {
  const hasTracked = useRef(false);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView && !hasTracked.current) {
      onView?.();
      hasTracked.current = true;
    }
  }, [inView, onView]);

  return (
    <div ref={ref} className="h-screen bg-cream flex items-center justify-center">
      {/* Countdown content */}
    </div>
  );
};
```

### 8. Viewing Vercel Analytics Dashboard

After deployment:
1. Go to your Vercel dashboard
2. Select your project
3. Click on "Analytics" tab
4. View:
   - Page views
   - Unique visitors
   - Geographic data
   - Device/browser breakdown
   - Custom events

### 9. Custom Analytics Dashboard (Optional)

If you want to build a custom dashboard, you can use Vercel KV or another database:

```bash
npm install @vercel/kv
```

Store analytics data:
```typescript
// api/analytics.ts
import { kv } from '@vercel/kv';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { type, data } = req.body;
  
  // Store in Vercel KV
  await kv.lpush('analytics:events', JSON.stringify({
    type,
    data,
    timestamp: Date.now(),
    ip: req.headers['x-forwarded-for']
  }));
  
  res.status(200).json({ success: true });
}
```

---

## Section 1: Animated Countdown Timer

### Design Specifications:
- **Layout**: Centered, full viewport height (h-screen)
- **Background**: Cream with subtle animated gradient
- **Timer Style**: 
  - Large elegant numbers in Playfair Display
  - Format: `Days : Hours : Minutes : Seconds`
  - Each number in separate card with soft shadow
  - Rose gold borders around each card
  - Labels below in Montserrat (Days, Hours, Minutes, Seconds)

### TypeScript Types:

```typescript
// src/types/index.ts
export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface CountdownProps {
  targetDate: Date;
  onComplete?: () => void;
  onView?: () => void;
}
```

### React Component:

```typescript
// src/components/sections/Countdown.tsx
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import { Particles } from '@tsparticles/react';
import type { TimeRemaining, CountdownProps } from '@/types';

export const Countdown: React.FC<CountdownProps> = ({ 
  targetDate, 
  onComplete,
  onView 
}) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isComplete, setIsComplete] = useState(false);
  const prevTimeRef = useRef<TimeRemaining>(timeRemaining);
  
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  // Track section view
  useEffect(() => {
    if (inView) {
      onView?.();
    }
  }, [inView, onView]);

  // Calculate time remaining
  useEffect(() => {
    const calculateTimeRemaining = (): TimeRemaining => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    const timer = setInterval(() => {
      const newTime = calculateTimeRemaining();
      setTimeRemaining(newTime);

      // Animate number changes
      Object.keys(newTime).forEach(key => {
        const timeKey = key as keyof TimeRemaining;
        if (prevTimeRef.current[timeKey] !== newTime[timeKey]) {
          animateNumberChange(timeKey);
        }
      });

      prevTimeRef.current = newTime;

      // Check if countdown is complete
      if (
        newTime.days === 0 &&
        newTime.hours === 0 &&
        newTime.minutes === 0 &&
        newTime.seconds === 0 &&
        !isComplete
      ) {
        setIsComplete(true);
        triggerConfetti();
        onComplete?.();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, isComplete, onComplete]);

  const animateNumberChange = (unit: keyof TimeRemaining) => {
    const element = document.querySelector(`.countdown-${unit}`);
    if (!element) return;

    gsap.to(element, {
      rotationX: 360,
      duration: 0.6,
      ease: 'power2.inOut'
    });
  };

  const triggerConfetti = () => {
    const count = 150;
    const defaults = {
      origin: { y: 0.6 },
      colors: ['#B76E79', '#FFF8F0', '#D4AF37']
    };

    const fire = (particleRatio: number, opts: any) => {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    };

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div 
      ref={ref}
      className="h-screen bg-gradient-to-br from-cream to-rose-gold-light flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Particles */}
      <Particles
        id="countdown-particles"
        options={{
          particles: {
            number: { value: 30 },
            color: { value: '#B76E79' },
            opacity: {
              value: 0.3,
              random: true,
              animation: {
                enable: true,
                speed: 0.5
              }
            },
            size: {
              value: 3,
              random: true
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: 'top'
            }
          }
        }}
        className="absolute inset-0"
      />

      {/* Countdown Timer */}
      <div className="flex gap-8 z-10">
        {(['days', 'hours', 'minutes', 'seconds'] as const).map((unit) => (
          <div key={unit} className="flex flex-col items-center">
            <div className="bg-white border-2 border-rose-gold rounded-xl shadow-lg px-8 py-6 min-w-[120px]">
              <span className={`countdown-${unit} text-6xl font-playfair font-bold text-elegant-black block text-center`}>
                {formatNumber(timeRemaining[unit])}
              </span>
            </div>
            <span className="text-sm font-montserrat text-soft-black mt-2 uppercase tracking-wider">
              {unit}
            </span>
          </div>
        ))}
      </div>

      {/* Pulse effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-gold rounded-full opacity-10 animate-pulse" />
      </div>
    </div>
  );
};
```

### Tailwind Animation for Pulse:

```css
/* src/styles/animations.css */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.2;
    transform: scale(1.05);
  }
}

.animate-pulse {
  animation: pulse-slow 3s ease-in-out infinite;
}
```

---

## Section 2: Vogue Magazine Cover

### Design Specifications:
- **Layout**: Full viewport height (h-screen), centered
- **Background**: Confetti continues falling from Section 1 (slows down gradually)

### Vogue Cover Design (EXACT replica):
- **Magazine Dimensions**: Standard Vogue ratio (portrait) - approximately 8.5:11
- **Vogue Logo**: 
  - Font: Didot or Cormorant Garamond (high-fashion serif)
  - Color: Black
  - Position: Top center
  - Size: Large, bold (text-7xl or larger)
  
### Cover Layout Structure:
```
┌─────────────────────────┐
│       VOGUE             │  <- Top: Logo
│                         │
│                         │
│    [HER PHOTO]          │  <- Center: Full bleed photo
│                         │
│                         │
│  BIRTHDAY EDITION       │  <- Bottom third: Text overlay
│      ASONIA             │
│  Celebrating Beauty,    │
│  Grace & Elegance       │
│                         │
│ [Article Headlines]     │  <- Side text (small)
│                         │
│              [Barcode]  │  <- Bottom right
└─────────────────────────┘
```

### Fake Article Headlines (Left & Right sides):
**Left Side:**
- "The Art of Being Extraordinary"
- "Style Icon of the Year"  
- "Beauty Redefined"

**Right Side:**
- "Grace Meets Elegance"
- "A Star is Born"
- "Fashion Forward"

### Tailwind Classes Reference:
```html
<div class="h-screen bg-cream-dark flex items-center justify-center relative">
  <!-- Magazine Container -->
  <div class="magazine-cover relative w-[600px] h-[800px] bg-white shadow-2xl overflow-hidden">
    <!-- Vogue Logo -->
    <h1 class="font-cormorant text-8xl font-bold text-center pt-8 text-elegant-black">
      VOGUE
    </h1>
    
    <!-- Photo -->
    <div class="absolute inset-0 z-0">
      <img src="/images/asonia-vogue.jpg" class="w-full h-full object-cover" />
    </div>
    
    <!-- Text Overlay -->
    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 z-10">
      <p class="font-montserrat text-rose-gold-light text-sm tracking-widest mb-2">
        BIRTHDAY EDITION
      </p>
      <h2 class="font-playfair text-6xl font-bold text-white mb-2">
        ASONIA
      </h2>
      <p class="font-montserrat text-cream text-base tracking-wide">
        Celebrating Beauty, Grace & Elegance
      </p>
    </div>
    
    <!-- Side Headlines -->
    <div class="absolute left-4 top-1/3 text-xs font-montserrat text-white z-10">
      <p>The Art of Being Extraordinary</p>
      <p>Style Icon of the Year</p>
      <p>Beauty Redefined</p>
    </div>
    
    <!-- Barcode -->
    <div class="absolute bottom-4 right-4 z-10">
      <img src="barcode.svg" class="w-20 h-12" />
    </div>
  </div>
</div>
```

### GSAP Animation:
```javascript
// Magazine flip-in animation
gsap.from('.magazine-cover', {
  rotationY: -90,
  opacity: 0,
  duration: 1.5,
  ease: 'power3.out',
  transformOrigin: 'left center'
});

// Photo zoom on hover
gsap.to('.magazine-cover img', {
  scale: 1.05,
  duration: 0.5,
  paused: true
});

// Shine effect sweep
gsap.to('.shine-effect', {
  x: '200%',
  duration: 2,
  ease: 'power2.inOut'
});
```

### Photo Specifications:
- **Format**: JPG or WebP
- **Resolution**: Minimum 1200x1600px (high quality)
- **Aspect Ratio**: Portrait (3:4 or similar)
- **Filters**: Slight contrast boost, add warmth, professional magazine look
- **Position**: Center-focused on her face

---

## Section 3: A-S-O-N-I-A Name Animation

### Design Specifications:
- **Layout**: Full viewport height (h-screen), centered
- **Background**: Gradient from cream to light rose gold

### Tailwind Background:
```html
<div class="h-screen bg-gradient-to-b from-cream to-rose-gold-light flex items-center justify-center">
```

### Letter Reveal Content & Animation Sequence:

#### Letter Format:
Each letter appears with:
1. **Large Letter** (text-9xl) - Rose gold color
2. **Word Meaning** (text-2xl) - Elegant script style
3. **Compliment** (text-lg) - Subtle text

#### Content for Each Letter:

**A** - **A**lluring Presence
- Compliment: "Your presence lights up every room"

**S** - **S**tunning Beauty  
- Compliment: "Natural elegance that captivates"

**O** - **O**riginal Style
- Compliment: "Unique in every way"

**N** - **N**atural Grace
- Compliment: "Effortlessly sophisticated"

**I** - **I**nspiring Confidence
- Compliment: "Your strength shines through"

**A** - **A**mazing Spirit
- Compliment: "A heart as beautiful as your smile"

### Animation Timeline:
```javascript
const timeline = gsap.timeline();

// For each letter (A, S, O, N, I, A)
timeline
  .from('.letter-A', {
    y: -100,
    opacity: 0,
    scale: 1.5,
    duration: 0.8,
    ease: 'power3.out'
  })
  .to('.letter-meaning-A', {
    opacity: 1,
    duration: 0.5
  }, '-=0.3')
  .to('.letter-compliment-A', {
    opacity: 1,
    duration: 0.5
  }, '-=0.2')
  .to('.letter-A', {
    opacity: 0.4,
    delay: 1.5
  })
  // Repeat for S, O, N, I, A...
  .to('.all-letters', {
    x: 0,
    opacity: 1,
    stagger: 0.1,
    duration: 1
  });
```

### Typed.js Implementation:
```javascript
import Typed from 'typed.js';

new Typed('.letter-meaning', {
  strings: ['Alluring Presence'],
  typeSpeed: 50,
  showCursor: false
});
```

### HTML Structure Example:
```html
<div class="flex flex-col items-center justify-center space-y-8">
  <!-- Letter A -->
  <div class="letter-container text-center">
    <h2 class="letter-A text-9xl font-playfair font-bold text-rose-gold drop-shadow-lg">
      A
    </h2>
    <p class="letter-meaning-A text-2xl font-cormorant italic text-elegant-black mt-4">
      Alluring Presence
    </p>
    <p class="letter-compliment-A text-lg font-montserrat text-soft-black mt-2 opacity-0">
      Your presence lights up every room
    </p>
  </div>
</div>
```

### Final State:
After all letters animate individually, they align horizontally to spell "ASONIA":
```html
<div class="flex gap-4 text-8xl font-playfair font-bold text-rose-gold">
  <span>A</span>
  <span>S</span>
  <span>O</span>
  <span>N</span>
  <span>I</span>
  <span>A</span>
</div>
```

### Text Effects:
- Letters have subtle glow: `text-shadow: 0 0 20px rgba(183, 110, 121, 0.5)`
- Smooth transitions between states
- Stagger delay: 1.5 seconds between each letter

---

## Section 4: Her Moments Gallery (5 Snaps)

### Design Specifications:
- **Layout**: Masonry or elegant grid layout
- **Background**: Cream with subtle texture pattern

### Tailwind Background:
```html
<div class="min-h-screen bg-cream py-20 px-8">
```

### Photo Card Design - Polaroid Style:
```html
<div class="photo-card bg-white p-4 pb-12 shadow-xl transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300">
  <img src="/images/snap1.jpg" class="w-full h-80 object-cover" />
  <p class="text-center font-cormorant text-xl text-elegant-black mt-4">
    Grace personified ✨
  </p>
</div>
```

### Grid Layout:
```html
<div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
  <!-- Photo cards -->
</div>
```

### Compliments for Each Photo:

1. **Photo 1**: "Grace personified ✨"
2. **Photo 2**: "Beauty beyond words 🌟"
3. **Photo 3**: "Your smile is everything 💫"
4. **Photo 4** (with dog): "Two beautiful souls 🐾💕"
5. **Photo 5**: "Simply breathtaking 🌹"

### Rotation Angles (for organic feel):
- Photo 1: `rotate-2` (2 degrees)
- Photo 2: `-rotate-3` (-3 degrees)
- Photo 3: `rotate-1` (1 degree)
- Photo 4: `-rotate-2` (-2 degrees)
- Photo 5: `rotate-3` (3 degrees)

### GSAP Animation:
```javascript
// Staggered entrance
gsap.from('.photo-card', {
  opacity: 0,
  y: 50,
  rotation: 20,
  stagger: 0.2,
  duration: 0.8,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.photo-gallery',
    start: 'top 80%'
  }
});

// Parallax effect on scroll
gsap.to('.photo-card', {
  y: -30,
  stagger: 0.1,
  ease: 'none',
  scrollTrigger: {
    trigger: '.photo-gallery',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  }
});
```

### Hover Effects (Tailwind):
```
hover:rotate-0
hover:scale-105
hover:shadow-2xl
transition-all
duration-300
```

### Rose Gold Accent Line:
```html
<div class="w-full h-1 bg-rose-gold absolute top-0 left-0"></div>
```

---

## Section 5: Mystery Gift Box

### Design Specifications:
- **Layout**: Centered, full viewport height (h-screen)
- **Background**: Dark cream (#F5EBE0) with subtle sparkles

### Tailwind Layout:
```html
<div class="h-screen bg-cream-dark flex flex-col items-center justify-center relative overflow-hidden">
```

### Gift Box Design - 3D Isometric:
```html
<div class="gift-box-container text-center">
  <!-- Text above -->
  <p class="font-cormorant text-3xl italic text-soft-black mb-8">
    A little something for you...
  </p>
  
  <!-- Gift Box (3D) -->
  <div class="gift-box relative w-64 h-64 cursor-pointer transform hover:scale-110 transition-transform duration-300">
    <!-- Box body -->
    <div class="box-body absolute inset-0 bg-gradient-to-br from-rose-gold to-rose-gold-light rounded-lg shadow-2xl">
    </div>
    
    <!-- Ribbon -->
    <div class="ribbon absolute inset-0 flex items-center justify-center">
      <div class="w-full h-8 bg-cream"></div>
      <div class="h-full w-8 bg-cream absolute"></div>
    </div>
    
    <!-- Bow -->
    <div class="bow absolute -top-8 left-1/2 transform -translate-x-1/2">
      <!-- SVG bow or image -->
    </div>
    
    <!-- Glow effect -->
    <div class="absolute inset-0 rounded-lg animate-pulse bg-gold-accent/20"></div>
  </div>
  
  <!-- Text below -->
  <p class="font-montserrat text-lg text-elegant-black mt-8">
    Click to open 🎁
  </p>
</div>
```

### Opening Animation Sequence:
```javascript
const openGiftBox = () => {
  const tl = gsap.timeline();
  
  // 1. Lid lifts up
  tl.to('.gift-lid', {
    y: -100,
    rotationX: -45,
    duration: 1,
    ease: 'power2.out'
  })
  
  // 2. Light beams shoot out
  .to('.light-beam', {
    opacity: 1,
    scale: 1.5,
    duration: 0.5
  }, '-=0.5')
  
  // 3. Items float out one by one
  .to('.item-chocolate', {
    y: -150,
    x: -80,
    rotation: 15,
    opacity: 1,
    duration: 0.8
  })
  .to('.item-flowers', {
    y: -150,
    x: 80,
    rotation: -15,
    opacity: 1,
    duration: 0.8
  }, '-=0.6')
  .to('.item-sparkles', {
    y: -200,
    scale: 1.5,
    opacity: 1,
    duration: 0.8
  }, '-=0.6')
  .to('.item-cake', {
    y: -180,
    opacity: 1,
    duration: 0.8
  }, '-=0.6')
  
  // 4. Items arrange in circle
  .to('.gift-items', {
    rotation: 360,
    duration: 2,
    ease: 'power1.inOut'
  })
  
  // 5. Final message appears
  .to('.gift-message', {
    opacity: 1,
    y: 0,
    duration: 0.5
  });
};
```

### Items That Float Out:
1. **Chocolate Box** - SVG or image illustration
2. **Flowers (Roses)** - SVG or image
3. **Sparkles & Hearts** - Particle effects
4. **Virtual Birthday Cake** - SVG or image

### Final Message:
```html
<p class="gift-message opacity-0 font-cormorant text-2xl text-elegant-black mt-12">
  Sweet wishes for your sweet day! 🍫🌹✨
</p>
```

### Sparkle Particle Effect:
```javascript
// Using tsParticles for sparkles
tsParticles.load('sparkles-container', {
  particles: {
    color: { value: '#D4AF37' },
    number: { value: 30 },
    opacity: {
      value: 0.5,
      random: true,
      animation: {
        enable: true,
        speed: 1
      }
    },
    size: {
      value: 3,
      random: true
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'top'
    }
  }
});
```

---

## Section 6: The Signature Card (CENTERPIECE)

### Design Specifications:
- **Layout**: Full viewport height (h-screen), centered
- **Background**: Black (#1A1A1A) with subtle rose gold particles floating

### Tailwind Layout:
```html
<div class="h-screen bg-elegant-black flex items-center justify-center relative overflow-hidden">
```

### Card Shape - Unique Curved Design:

The card should have an **organic, flowing shape** like:
- Elegant wave-like curves (not rectangular)
- Rounded edges with artistic curves on sides
- Like a petal or elegant leaf shape
- Use SVG `path` for custom shape

### SVG Card Shape Example:
```html
<svg viewBox="0 0 400 500" class="card-shape">
  <defs>
    <clipPath id="card-clip">
      <path d="M 50,0 
               Q 0,0 0,50
               L 0,450
               Q 0,500 50,500
               L 350,500
               Q 400,500 400,450
               L 400,50
               Q 400,0 350,0
               Z" />
    </clipPath>
  </defs>
</svg>
```

### Card Design - Closed State:
```html
<div class="signature-card relative w-96 h-[500px] cursor-pointer perspective-1000">
  <!-- Outer envelope (closed) -->
  <div class="card-front absolute inset-0 bg-gradient-to-br from-rose-gold to-gold-accent rounded-3xl shadow-2xl transform-style-preserve-3d">
    
    <!-- Embossed text -->
    <div class="absolute inset-0 flex items-center justify-center">
      <p class="font-cormorant text-4xl text-cream italic">
        For Asonia
      </p>
    </div>
    
    <!-- Wax seal at bottom -->
    <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2">
      <div class="w-16 h-16 rounded-full bg-gold-accent border-4 border-cream flex items-center justify-center">
        <span class="font-playfair text-2xl text-cream">A</span>
      </div>
    </div>
    
    <!-- Shimmer animation -->
    <div class="shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
  </div>
</div>
```

### Opening Animation (3D Flip):
```javascript
const openCard = () => {
  gsap.to('.card-front', {
    rotationY: -180,
    duration: 2,
    ease: 'power2.inOut',
    transformOrigin: 'left center'
  });
  
  gsap.to('.card-inside', {
    opacity: 1,
    delay: 1,
    duration: 1
  });
};
```

### Card Inside Design:
```html
<div class="card-inside opacity-0 absolute inset-0 bg-cream rounded-3xl p-12 overflow-y-auto">
  
  <!-- Top flourish -->
  <div class="flourish-top mb-8">
    <svg class="w-full h-8 text-rose-gold">
      <!-- Decorative SVG pattern -->
    </svg>
  </div>
  
  <!-- Main message -->
  <h2 class="font-playfair text-4xl text-center text-elegant-black mb-8">
    Happy Birthday, Asonia
  </h2>
  
  <!-- Personal message (2-3 sentences) -->
  <p class="font-montserrat text-lg text-center text-soft-black leading-relaxed mb-8">
    Though we've just begun to know each other, your beauty and grace have already 
    left a lasting impression. May this special day be filled with joy, laughter, 
    and wonderful memories that last a lifetime.
  </p>
  
  <!-- Poem -->
  <div class="poem bg-rose-gold-light/30 rounded-lg p-6 mb-8">
    <p class="font-cormorant text-xl text-center text-elegant-black leading-relaxed italic">
      On this day, a star was born,<br/>
      Gracing the world with beauty's form.<br/>
      Though our paths have just begun,<br/>
      May your birthday shine bright as the sun.<br/>
      Here's to laughter, joy, and dreams come true,<br/>
      Happy Birthday, Asonia—this day belongs to you. 🎂✨
    </p>
  </div>
  
  <!-- Closing wish -->
  <p class="font-montserrat text-lg text-center text-soft-black mb-8">
    Wishing you a magical year ahead ✨
  </p>
  
  <!-- Bottom flourish -->
  <div class="flourish-bottom mt-8">
    <svg class="w-full h-8 text-rose-gold">
      <!-- Decorative SVG pattern -->
    </svg>
  </div>
  
  <!-- Signature -->
  <p class="font-cormorant text-2xl text-right text-elegant-black italic mt-8">
    - [Your Name]
  </p>
</div>
```

### CSS for 3D Effect:
```css
.perspective-1000 {
  perspective: 1000px;
}

.transform-style-preserve-3d {
  transform-style: preserve-3d;
}

.card-front {
  backface-visibility: hidden;
}
```

### Shimmer Animation:
```css
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.shimmer {
  animation: shimmer 3s infinite;
}
```

### Hover Glow Effect:
```html
<div class="card-glow absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300"
     style="box-shadow: 0 0 40px rgba(183, 110, 121, 0.6);"></div>
```

### Decorative Flourishes (SVG):
```html
<svg viewBox="0 0 200 20" class="text-rose-gold">
  <path d="M 0,10 Q 50,0 100,10 T 200,10" 
        stroke="currentColor" 
        stroke-width="2" 
        fill="none"/>
  <circle cx="100" cy="10" r="3" fill="currentColor"/>
  <circle cx="50" cy="7" r="2" fill="currentColor"/>
  <circle cx="150" cy="7" r="2" fill="currentColor"/>
</svg>
```

---

## Section 7: Final Birthday Wish

### Design Specifications:
- **Layout**: Full viewport height (h-screen), centered
- **Background**: Gradient from black to rose gold

### Tailwind Layout:
```html
<div class="h-screen bg-gradient-to-b from-elegant-black via-soft-black to-rose-gold flex items-center justify-center relative overflow-hidden">
```

### Content Structure:
```html
<div class="text-center max-w-3xl px-8">
  
  <!-- Main message with word-by-word animation -->
  <div class="final-message space-y-6">
    <p class="font-playfair text-4xl md:text-5xl text-cream leading-relaxed">
      May this year bring you endless joy,
    </p>
    <p class="font-playfair text-4xl md:text-5xl text-cream leading-relaxed">
      success in all you pursue,
    </p>
    <p class="font-playfair text-4xl md:text-5xl text-cream leading-relaxed">
      and moments as beautiful as you are.
    </p>
  </div>
  
  <!-- Birthday wish -->
  <div class="mt-12 space-y-4">
    <h2 class="font-playfair text-6xl md:text-7xl font-bold text-rose-gold-light animate-pulse-slow">
      Happy Birthday, Asonia 🎂✨
    </h2>
  </div>
  
  <!-- Closing line -->
  <p class="font-cormorant text-2xl md:text-3xl text-cream/80 italic mt-8">
    Here's to new beginnings and wonderful memories ahead.
  </p>
  
</div>
```

### GSAP Word-by-Word Animation:
```javascript
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(SplitText);

const split = new SplitText('.final-message p', { type: 'words' });

gsap.from(split.words, {
  opacity: 0,
  y: 50,
  stagger: 0.1,
  duration: 0.8,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.final-message',
    start: 'top 80%'
  }
});
```

### Glow Pulse Effect:
```css
@keyframes glow-pulse {
  0%, 100% {
    text-shadow: 0 0 20px rgba(183, 110, 121, 0.5),
                 0 0 40px rgba(183, 110, 121, 0.3);
  }
  50% {
    text-shadow: 0 0 30px rgba(183, 110, 121, 0.8),
                 0 0 60px rgba(183, 110, 121, 0.5);
  }
}

.animate-pulse-slow {
  animation: glow-pulse 3s ease-in-out infinite;
}
```

### Background Particles:
```javascript
// Rose gold floating particles
tsParticles.load('final-particles', {
  particles: {
    color: { value: '#B76E79' },
    number: { value: 50 },
    opacity: {
      value: 0.3,
      random: true,
      animation: {
        enable: true,
        speed: 0.5
      }
    },
    size: {
      value: 4,
      random: true
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: 'top',
      outModes: {
        default: 'out'
      }
    }
  }
});
```

### Sparkle Effects:
```html
<div class="sparkles absolute inset-0 pointer-events-none">
  <!-- Random sparkles appearing -->
</div>
```

```javascript
// Random sparkle animation
setInterval(() => {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle absolute w-2 h-2 bg-gold-accent rounded-full';
  sparkle.style.left = Math.random() * 100 + '%';
  sparkle.style.top = Math.random() * 100 + '%';
  
  gsap.to(sparkle, {
    scale: 2,
    opacity: 0,
    duration: 1,
    onComplete: () => sparkle.remove()
  });
  
  document.querySelector('.sparkles').appendChild(sparkle);
}, 500);
```

### Optional: Music Player
```html
<div class="music-toggle fixed bottom-8 right-8 z-50">
  <button class="w-16 h-16 bg-rose-gold rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
    <svg class="w-8 h-8 text-cream">
      <!-- Music note icon -->
    </svg>
  </button>
</div>
```

```javascript
const audio = new Audio('/sounds/background-music.mp3');
audio.loop = true;

const toggleMusic = () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};
```

---

## Global Features & Effects

### 1. Loading Screen

#### Design:
```html
<div class="loading-screen fixed inset-0 bg-cream z-50 flex items-center justify-center">
  <div class="text-center">
    <!-- Animated ASONIA text -->
    <h1 class="font-playfair text-6xl text-rose-gold mb-8 animate-fade-in">
      ASONIA
    </h1>
    
    <!-- Rose gold spinner -->
    <div class="spinner w-16 h-16 border-4 border-rose-gold border-t-transparent rounded-full animate-spin mx-auto"></div>
  </div>
</div>
```

#### Animation:
```javascript
window.addEventListener('load', () => {
  gsap.to('.loading-screen', {
    opacity: 0,
    duration: 1,
    delay: 2, // Minimum 2 seconds
    onComplete: () => {
      document.querySelector('.loading-screen').remove();
    }
  });
});
```

---

### 2. Smooth Scroll & Progress Indicator

#### Smooth Scroll (CSS):
```css
html {
  scroll-behavior: smooth;
}
```

#### Progress Bar:
```html
<div class="scroll-progress fixed top-0 left-0 right-0 h-1 bg-rose-gold-light z-50">
  <div class="progress-bar h-full bg-rose-gold w-0"></div>
</div>
```

```javascript
window.addEventListener('scroll', () => {
  const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  document.querySelector('.progress-bar').style.width = scrolled + '%';
});
```

---

### 3. Custom Cursor

#### HTML:
```html
<div class="custom-cursor fixed w-8 h-8 rounded-full bg-rose-gold/50 pointer-events-none z-50 mix-blend-difference"></div>
<div class="cursor-trail fixed w-2 h-2 rounded-full bg-gold-accent pointer-events-none z-40"></div>
```

#### JavaScript:
```javascript
const cursor = document.querySelector('.custom-cursor');
const trail = document.querySelector('.cursor-trail');

document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    x: e.clientX - 16,
    y: e.clientY - 16,
    duration: 0.3
  });
  
  gsap.to(trail, {
    x: e.clientX - 4,
    y: e.clientY - 4,
    duration: 0.5
  });
});

// Sparkle trail effect
document.addEventListener('mousemove', (e) => {
  if (Math.random() > 0.9) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle-trail absolute w-1 h-1 bg-rose-gold rounded-full';
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    document.body.appendChild(sparkle);
    
    gsap.to(sparkle, {
      opacity: 0,
      scale: 2,
      duration: 0.5,
      onComplete: () => sparkle.remove()
    });
  }
});
```

---

### 4. Scroll Animations (GSAP ScrollTrigger)

#### Global Setup:
```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Fade in sections
gsap.utils.toArray('section').forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'top 50%',
      scrub: 1
    }
  });
});
```

#### Parallax Effect:
```javascript
gsap.to('.parallax-element', {
  y: 200,
  ease: 'none',
  scrollTrigger: {
    trigger: '.parallax-section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  }
});
```

---

### 5. Responsive Design

#### Tailwind Breakpoints:
- **Mobile**: `< 768px` - Simplified animations, vertical stacking
- **Tablet**: `768px - 1024px` - Medium spacing
- **Desktop**: `> 1024px` - Full experience

#### Mobile Optimizations:
```javascript
const isMobile = window.innerWidth < 768;

if (isMobile) {
  // Disable heavy animations
  gsap.config({ force3D: false });
  
  // Reduce particle count
  particleCount = 20;
  
  // Simplify 3D effects
  disable3DTransforms();
}
```

#### Responsive Classes Example:
```html
<div class="text-4xl md:text-6xl lg:text-8xl">
  <!-- Scales text based on screen size -->
</div>
```

---

## Performance Optimizations

### 1. Image Optimization
```javascript
// Use WebP format with fallback
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>
```

### 2. Lazy Loading
```html
<img src="image.jpg" loading="lazy" alt="Description">
```

### 3. GSAP Performance
```javascript
// Use will-change for animated elements
gsap.set('.animated-element', {
  willChange: 'transform, opacity'
});

// Enable force3D for GPU acceleration
gsap.to('.element', {
  x: 100,
  force3D: true
});
```

### 4. Debounce Scroll Events
```javascript
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

window.addEventListener('scroll', debounce(() => {
  // Scroll handling
}, 100));
```

---

## Installation & Setup

### 1. Create Vite + React + TypeScript Project:
```bash
npm create vite@latest asonia-birthday-website -- --template react-ts
cd asonia-birthday-website
```

### 2. Install Tailwind CSS:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Install Animation Libraries:
```bash
# Core animation libraries
npm install gsap aos canvas-confetti typed.js
npm install -D @types/canvas-confetti

# Particles
npm install @tsparticles/react @tsparticles/slim

# Icons
npm install react-icons

# Utilities
npm install react-intersection-observer
```

### 4. Install Vercel Analytics:
```bash
npm install @vercel/analytics
```

### 5. Install Image Optimization Tools (Dev Dependencies):
```bash
npm install -D sharp tsx vite-imagetools
npm install -D @types/sharp
```

### 6. Configure TypeScript (`tsconfig.json`):
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    
    /* Path Aliases */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### 7. Configure Vite (`vite.config.ts`):
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.has('thumbnail')) {
          return new URLSearchParams({
            w: '50',
            h: '50',
            fit: 'cover',
            format: 'webp',
            quality: '30'
          });
        }
        return new URLSearchParams({
          format: 'webp',
          quality: '85'
        });
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'animations': ['gsap'],
        }
      }
    }
  }
});
```

### 8. Configure Tailwind (`tailwind.config.js`):
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rose-gold': '#B76E79',
        'rose-gold-light': '#E8C4C4',
        'cream': '#FFF8F0',
        'cream-dark': '#F5EBE0',
        'elegant-black': '#1A1A1A',
        'soft-black': '#2D2D2D',
        'gold-accent': '#D4AF37',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 3s infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'pulse-slow': {
          '0%, 100%': { 
            opacity: '0.1',
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: '0.2',
            transform: 'scale(1.05)'
          }
        }
      }
    },
  },
  plugins: [],
}
```

### 9. Add to `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Cormorant+Garamond:wght@300;400;600&family=Montserrat:wght@300;400;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
  }
  
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

@layer utilities {
  .perspective-1000 {
    perspective: 1000px;
  }
  
  .transform-style-preserve-3d {
    transform-style: preserve-3d;
  }
  
  .backface-hidden {
    backface-visibility: hidden;
  }
}
```

### 10. Update `package.json` scripts:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "optimize-images": "tsx scripts/optimize-images.ts"
  }
}
```

### 11. Create Environment Variables:
```bash
# .env
VITE_ENABLE_ANALYTICS=true
VITE_BIRTHDAY_DATE=2026-01-15  # Set the actual birthday date
```

### 12. Setup Main Entry Point (`src/main.tsx`):
```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import App from './App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
);
```

### 13. Run Development Server:
```bash
npm run dev
```

### 14. Optimize Images (before build):
```bash
npm run optimize-images
```

### 15. Build for Production:
```bash
npm run build
```

### 16. Deploy to Vercel:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or use Vercel Dashboard:
# 1. Push to GitHub
# 2. Import project in Vercel
# 3. Auto-deploy on push
```

---

## Complete App Component Example

```typescript
// src/App.tsx
import { useState, useEffect } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';
import { getVisitorInfo, getDeviceInfo } from '@/lib/analytics';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Countdown } from '@/components/sections/Countdown';
import { VogueCover } from '@/components/sections/VogueCover';
import { NameAnimation } from '@/components/sections/NameAnimation';
import { PhotoGallery } from '@/components/sections/PhotoGallery';
import { GiftBox } from '@/components/sections/GiftBox';
import { SignatureCard } from '@/components/sections/SignatureCard';
import { FinalWish } from '@/components/sections/FinalWish';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { trackSectionView, trackInteraction } = useAnalytics();
  
  // Birthday date - UPDATE THIS!
  const birthdayDate = new Date(import.meta.env.VITE_BIRTHDAY_DATE || '2026-01-15');

  useEffect(() => {
    // Track visitor info
    const visitorInfo = getVisitorInfo();
    const deviceInfo = getDeviceInfo();
    
    console.log('Visitor #', visitorInfo.visitCount);
    console.log('Device:', deviceInfo.isMobile ? 'Mobile' : 'Desktop');
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    trackInteraction('loading_complete');
  };

  const handleCountdownComplete = () => {
    trackInteraction('countdown_complete');
    // Optionally scroll to next section or show special animation
  };

  return (
    <>
      {/* Loading Screen with Image Preloading */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      {/* Main Content */}
      {!isLoading && (
        <>
          {/* Custom Cursor (Desktop only) */}
          <CustomCursor />
          
          {/* Scroll Progress Bar */}
          <ScrollProgress />
          
          {/* All Sections */}
          <main className="relative">
            <Countdown 
              targetDate={birthdayDate}
              onComplete={handleCountdownComplete}
              onView={() => trackSectionView('countdown')}
            />
            
            <VogueCover 
              onView={() => trackSectionView('vogue_cover')}
            />
            
            <NameAnimation 
              name="ASONIA"
              onView={() => trackSectionView('name_animation')}
            />
            
            <PhotoGallery 
              onView={() => trackSectionView('photo_gallery')}
            />
            
            <GiftBox 
              onOpen={() => trackInteraction('gift_box_opened')}
              onView={() => trackSectionView('gift_box')}
            />
            
            <SignatureCard 
              onOpen={() => trackInteraction('card_opened')}
              onView={() => trackSectionView('signature_card')}
            />
            
            <FinalWish 
              onView={() => trackSectionView('final_wish')}
            />
          </main>
        </>
      )}
    </>
  );
}

export default App;
```

---

## Type Definitions

```typescript
// src/types/index.ts
export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface SectionProps {
  onView?: () => void;
}

export interface CountdownProps extends SectionProps {
  targetDate: Date;
  onComplete?: () => void;
}

export interface ImageData {
  name: string;
  src: string;
  placeholder: string;
  alt: string;
}

// src/types/analytics.ts
export interface VisitorInfo {
  visitCount: number;
  firstVisit: string;
  lastVisit: string;
  sessionId: string;
}

export interface DeviceInfo {
  userAgent: string;
  platform: string;
  language: string;
  screenWidth: number;
  screenHeight: number;
  viewportWidth: number;
  viewportHeight: number;
  isMobile: boolean;
}

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  timestamp: string;
}
```

---

## Constants

```typescript
// src/utils/constants.ts
export const BIRTHDAY_DATE = new Date('2026-01-15'); // UPDATE THIS

export const IMAGES = {
  vogueCover: {
    name: 'asonia-vogue',
    alt: 'Asonia - Vogue Cover'
  },
  gallery: [
    { name: 'snap1', alt: 'Beautiful moment', compliment: 'Grace personified ✨' },
    { name: 'snap2', alt: 'Stunning photo', compliment: 'Beauty beyond words 🌟' },
    { name: 'snap3', alt: 'Lovely smile', compliment: 'Your smile is everything 💫' },
    { name: 'snap4', alt: 'With beloved dog', compliment: 'Two beautiful souls 🐾💕' },
    { name: 'snap5', alt: 'Breathtaking', compliment: 'Simply breathtaking 🌹' },
  ]
} as const;

export const ASONIA_LETTERS = {
  A: { word: 'Alluring', compliment: 'Your presence lights up every room' },
  S: { word: 'Stunning', compliment: 'Natural elegance that captivates' },
  O: { word: 'Original', compliment: 'Unique in every way' },
  N: { word: 'Natural', compliment: 'Effortlessly sophisticated' },
  I: { word: 'Inspiring', compliment: 'Your strength shines through' },
  A2: { word: 'Amazing', compliment: 'A heart as beautiful as your smile' },
} as const;

export const BIRTHDAY_POEM = `On this day, a star was born,
Gracing the world with beauty's form.
Though our paths have just begun,
May your birthday shine bright as the sun.
Here's to laughter, joy, and dreams come true,
Happy Birthday, Asonia—this day belongs to you. 🎂✨`;

export const PARTICLE_CONFIG = {
  countdown: {
    number: { value: 30 },
    color: { value: '#B76E79' },
    opacity: {
      value: 0.3,
      animation: { enable: true, speed: 0.5 }
    },
    size: { value: 3, random: true },
    move: {
      enable: true,
      speed: 0.5,
      direction: 'top' as const
    }
  },
  final: {
    number: { value: 50 },
    color: { value: '#B76E79' },
    opacity: {
      value: 0.3,
      animation: { enable: true, speed: 0.5 }
    },
    size: { value: 4, random: true },
    move: {
      enable: true,
      speed: 0.5,
      direction: 'top' as const,
      outModes: { default: 'out' as const }
    }
  }
} as const;
```

---

## Vercel Deployment Configuration

Create `vercel.json` in project root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "env": {
    "VITE_ENABLE_ANALYTICS": "true"
  },
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "/api/:path*"
    }
  ]
}
```

---

## Performance Checklist

### Before Deployment:
- [ ] All images optimized (run `npm run optimize-images`)
- [ ] WebP and AVIF versions generated
- [ ] Placeholders created for progressive loading
- [ ] TypeScript compilation successful (`npm run build`)
- [ ] No console errors in production build
- [ ] All environment variables set in Vercel
- [ ] Analytics tracking configured
- [ ] Birthday date updated in `.env`
- [ ] Mobile responsiveness tested
- [ ] Cross-browser testing complete
- [ ] Lighthouse score > 90
- [ ] All animations smooth (60fps)
- [ ] Loading screen shows progress correctly
- [ ] Countdown timer accurate
- [ ] All sections track views properly

### Vercel Deployment Steps:
1. Push code to GitHub
2. Import project in Vercel dashboard
3. Add environment variables:
   - `VITE_BIRTHDAY_DATE=2026-01-15`
   - `VITE_ENABLE_ANALYTICS=true`
4. Deploy
5. Test production URL
6. Monitor analytics in Vercel dashboard

---

## Browser Compatibility

- **Chrome**: Latest (full support)
- **Firefox**: Latest (full support)
- **Safari**: Latest (full support)
- **Edge**: Latest (full support)

### Fallbacks for Older Browsers:
```javascript
// Check for GSAP support
if (!window.gsap) {
  // Fallback to CSS animations
}

// Check for 3D transform support
if (!('perspective' in document.body.style)) {
  // Use 2D transforms instead
}
```

---

## Final Checklist

### Before Launch:
- [ ] All images optimized and compressed
- [ ] Fonts loaded correctly
- [ ] Countdown timer set to correct birthday date
- [ ] All animations smooth (60fps)
- [ ] Mobile responsiveness tested
- [ ] Cross-browser testing complete
- [ ] Loading screen works properly
- [ ] All sections render correctly
- [ ] Scroll animations trigger properly
- [ ] Custom cursor works (desktop only)
- [ ] Music player functional (if included)
- [ ] No console errors
- [ ] Performance optimized (Lighthouse score > 90)

---

## Key Design Principles

1. **Elegant & Sophisticated** - No childish elements
2. **Smooth Animations** - All transitions at 60fps
3. **Rose Gold Theme** - Consistent color usage
4. **Luxury Feel** - High-end magazine aesthetic
5. **Personal Touch** - Thoughtful compliments & poem
6. **Light & Friendly** - Not overwhelming for new connection
7. **Mobile-First** - Works beautifully on all devices
8. **Fast Loading** - Optimized for performance

---

## Notes

- **Countdown Date**: Make sure to set the correct birthday date in the countdown component
- **Photos**: Ensure all 5 photos are high quality (minimum 1200px width)
- **Vogue Cover Photo**: Must be high resolution for authentic magazine look
- **Personal Message**: Keep it warm but not too intense (you're still getting to know her)
- **Poem**: Feel free to customize the provided poem
- **Music**: Optional - only add if you have a suitable elegant instrumental track

---

## Support & Resources

- **GSAP Docs**: https://greensock.com/docs/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vite Guide**: https://vitejs.dev/guide/
- **tsParticles**: https://particles.js.org/

---

## Final Words & Summary

This is a **TypeScript + React + Vite** birthday website designed to impress while maintaining appropriate boundaries for a new connection.

### Technical Stack Summary:
- **React 18+** with **TypeScript** for type safety
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for utility-first styling
- **GSAP** for premium animations
- **Vercel** for deployment and analytics
- **Sharp** for image optimization

### Key Features:
1. **Image Preloading** - Loading screen shows progress while images load
2. **Progressive Enhancement** - Starts with countdown while assets load
3. **Analytics Tracking** - Tracks visits, device info, section views, interactions
4. **Type-Safe** - Full TypeScript implementation prevents runtime errors
5. **Optimized Performance** - WebP/AVIF images, code splitting, lazy loading
6. **Responsive Design** - Works beautifully on mobile, tablet, and desktop

### Important Setup Steps:
1. Run `npm run optimize-images` to generate optimized image versions
2. Update `.env` with correct birthday date
3. Ensure all 5 photos + Vogue cover photo are in `/public/images/original/`
4. Deploy to Vercel and enable analytics
5. Test on multiple devices and browsers

### Design Philosophy:
The elegant design, thoughtful compliments, and sophisticated animations show significant effort without being overwhelming. The "just for fun" elements like the gift box keep it light and playful. The website feels like a luxury magazine experience - professional, polished, and memorable.

**Remember**: All animations should be smooth (60fps), elegant, and sophisticated. Avoid anything too playful or cartoonish. This is about creating a beautiful, memorable experience that impresses without being too intense for a new connection.

Good luck! 🎂✨
