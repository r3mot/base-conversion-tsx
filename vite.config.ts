import { defineConfig, InlineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";

interface ViteConfig extends UserConfig {
  test: InlineConfig;
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTest.ts"],
  },
} as ViteConfig);
