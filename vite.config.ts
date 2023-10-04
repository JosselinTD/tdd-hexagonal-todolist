import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        app: "./src/adapter/primary/web/app/index.html",
      },
    },
  },
  test: {
    environment: "jsdom",
  },
});
