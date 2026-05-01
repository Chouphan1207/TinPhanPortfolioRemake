# Images Asset Structure - FSD Architecture

## **Directory Structure**
```
src/shared/assets/images/
├── backgrounds/     # Full-screen background images
├── patterns/        # Repeating patterns and textures
├── heroes/          # Hero section images
├── cards/           # Card and component images
└── README.md        # This file
```

## **Where to Place Background Images**

### **1. Background Images (`/backgrounds/`)**
Use for full-screen or large section backgrounds:
- Hero backgrounds
- Section backgrounds
- Page backgrounds

**Example:**
```
src/shared/assets/images/backgrounds/
├── hero-bg.jpg
├── about-bg.png
├── contact-bg.webp
└── patterns/
    ├── subtle-grid.svg
    └── noise-texture.png
```

### **2. Pattern Images (`/patterns/`)**
Use for repeating textures and patterns:
- Noise textures
- Grid patterns
- Geometric patterns
- Gradients

## **How to Use Background Images**

### **Method 1: CSS Import (Recommended)**
```scss
// In your SCSS file
@import "@/shared/assets/images/backgrounds/hero-bg.jpg";

.hero-section {
  background-image: url("@/shared/assets/images/backgrounds/hero-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

### **Method 2: React Import**
```tsx
// In your React component
import heroBg from "@/shared/assets/images/backgrounds/hero-bg.jpg";

const HeroSection = () => {
  return (
    <div 
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Content */}
    </div>
  );
};
```

### **Method 3: CSS Variables (FSD Approach)**
```scss
// In shared/assets/styles/backgrounds.scss
:root {
  --bg-hero: url("@/shared/assets/images/backgrounds/hero-bg.jpg");
  --bg-pattern: url("@/shared/assets/images/patterns/subtle-grid.svg");
}

// In your component SCSS
.hero {
  background-image: var(--bg-hero);
}
```

## **FSD Best Practices**

### **1. Asset Organization**
- **Shared assets**: `src/shared/assets/images/`
- **Feature-specific**: `src/features/{feature}/assets/images/`
- **Page-specific**: `src/pages/{page}/assets/images/`

### **2. Naming Conventions**
- Use kebab-case: `hero-background.jpg`
- Be descriptive: `dark-gradient-bg.png`
- Include size if relevant: `hero-bg-1920x1080.jpg`

### **3. File Formats**
- **Photos**: WebP (modern), JPG (fallback), PNG (transparency)
- **Patterns**: SVG (scalable), PNG (complex patterns)
- **Gradients**: CSS gradients preferred over images

## **Example: Updating NoiseGridBackground**

```tsx
// src/shared/ui/NoiseGridBackground/NoiseGridBackground.tsx
import backgroundPattern from "@/shared/assets/images/patterns/subtle-grid.svg";

const NoiseGridBackground = () => {
  return (
    <div className={styles.container}>
      <div 
        className={styles.background}
        style={{ backgroundImage: `url(${backgroundPattern})` }}
      />
    </div>
  );
};
```

```scss
// src/shared/ui/NoiseGridBackground/NoiseGridBackground.module.scss
.background {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  opacity: 0.1;
}
```

## **Image Optimization Tips**

1. **Use WebP format** for better compression
2. **Create multiple sizes** for responsive design
3. **Lazy load** large background images
4. **Use CSS gradients** when possible instead of images
5. **Compress images** before adding to the project

## **Import Path Examples**

```tsx
// ✅ Correct FSD imports
import heroBg from "@/shared/assets/images/backgrounds/hero-bg.webp";
import pattern from "@/shared/assets/images/patterns/grid.svg";

// ❌ Avoid these
import heroBg from "../../../assets/images/hero-bg.jpg"; // Relative paths
import heroBg from "./assets/hero-bg.jpg"; // Component-specific assets
```

## **Usage in Current Project**

To add a background image to your NoiseGridBackground component:

1. Place your image in: `src/shared/assets/images/backgrounds/`
2. Import it in your component
3. Apply it using CSS or inline styles
4. Follow the FSD naming conventions

This keeps your assets organized, maintainable, and follows FSD principles.
