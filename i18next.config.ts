import { defineConfig } from 'i18next-cli';

export default defineConfig({
  locales: [
    "(en",
    "vn)"
  ],
  extract: {
    input: "src/**/*.{ts,tsx}",
    output: "public/locales/en/common.json"
  }
});