# Font System - Semantic Prefixes

This font system uses semantic prefixes to make it clear which font is being used:

## **Font Prefixes**
- **`bun-`** → Bungee font (display font)
- **`mst-`** → Montserrat font (primary font)

## **Quick Reference**

### **Bungee Font (`bun-`)**
Use for large display text, hero headings, and decorative elements:

```css
/* Direct class usage */
.bun-heading-display { /* Bungee, 6xl */ }
.bun { /* Bungee, default size */ }

/* Typography component */
<Typography preset="heading-display">Bungee Display</Typography>
```

### **Montserrat Font (`mst-`)**
Use for body text, regular headings, and UI elements:

```css
/* Direct class usage */
.mst-heading-1 { /* Montserrat, 5xl */ }
.mst-body-base { /* Montserrat, base */ }
.mst { /* Montserrat, default size */ }

/* Typography component */
<Typography preset="heading-1">Montserrat Heading</Typography>
<Typography preset="body-base">Montserrat Body</Typography>
```

## **Available Classes**

### **Bungee Font Classes**
```css
.bun-heading-display  /* 6xl, display headings */
.bun                 /* Bungee font, default size */
```

### **Montserrat Font Classes**
```css
.mst-heading-1       /* 5xl, main headings */
.mst-heading-2       /* 4xl, secondary headings */
.mst-heading-3       /* 3xl, tertiary headings */
.mst-heading-4       /* 2xl, quaternary headings */
.mst-body-large      /* lg, large body text */
.mst-body-base       /* base, normal body text */
.mst-body-small      /* sm, small body text */
.mst-caption         /* xs, caption text */
.mst                 /* Montserrat font, default size */
```

## **Usage Examples**

### **React Component Usage**
```tsx
// Bungee (display font)
<Typography preset="heading-display">Hero Title</Typography>

// Montserrat (primary font)
<Typography preset="heading-1">Main Heading</Typography>
<Typography preset="body-base">Body text content</Typography>
```

### **Direct CSS Usage**
```html
<!-- Bungee -->
<h1 class="bun-heading-display">Display Heading</h1>
<div class="bun">Bungee text</div>

<!-- Montserrat -->
<h2 class="mst-heading-1">Main Heading</h2>
<p class="mst-body-base">Body text</p>
<span class="mst-caption">Caption text</span>
```

### **SCSS Usage**
```scss
.my-component {
  // Use semantic prefixes
  .title {
    @extend .mst-heading-1; // Montserrat heading
  }
  
  .subtitle {
    @extend .bun-heading-display; // Bungee display
  }
  
  .description {
    @extend .mst-body-base; // Montserrat body
  }
}
```

## **Font Mapping**

| Prefix | Font | Use Case |
|--------|------|----------|
| `bun-` | Bungee | Display headings, hero text |
| `mst-` | Montserrat | Body text, regular headings |

## **Backward Compatibility**

Original class names are still supported:
- `.heading-display` → `.bun-heading-display`
- `.heading-1` → `.mst-heading-1`
- `.body-base` → `.mst-body-base`
- etc.

## **Typography Component Props**

```tsx
interface TypographyProps {
  preset?: 'heading-display' | 'heading-1' | 'heading-2' | 'heading-3' | 'heading-4' | 'body-large' | 'body-base' | 'body-small' | 'caption';
  family?: 'bungee' | 'montserrat' | 'primary' | 'secondary' | 'mono';
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
  lineHeight?: 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}
```

## **Best Practices**

1. **Use `bun-` for**: Hero sections, large display text, decorative headings
2. **Use `mst-` for**: All body text, regular headings, UI elements, forms
3. **Maintain consistency**: Stick to semantic prefixes for better code readability
4. **Responsive design**: Combine with size utilities for responsive typography
