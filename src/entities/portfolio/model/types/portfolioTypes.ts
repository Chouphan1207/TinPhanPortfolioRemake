export interface BentoItem {
  id: string;
  size: "small" | "medium" | "large" | "wide" | "tall";
  title: string;
  description: string;
}
