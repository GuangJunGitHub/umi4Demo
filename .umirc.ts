import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
  plugins: [
    'umi-plugin-gh-pages'
  ],
  base: '/umi4Demo/',
  publicPath: '/umi4Demo/',
});
