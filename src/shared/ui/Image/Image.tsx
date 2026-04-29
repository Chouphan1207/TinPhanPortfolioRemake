import styles from "./Image.module.scss";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function Image({ src, alt, className }: ImageProps) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`${styles.mainImage} ${className || ''}`}
    />
  );
}
