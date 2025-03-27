import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import * as path from 'path';

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(),
  ],
  define: {
    global: 'window',
  },
  resolve: {
    alias: {
      process: path.resolve(__dirname, 'node_modules/process/browser'),
      stream: 'stream-browserify',
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom', 'react-router-dom'],
    esbuildOptions: {
      target: 'esnext',
    },
  },
  build: {
    rollupOptions: {
      treeshake: true, 
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'lucide': ['lucide-react'],
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
      },
    },
    target: 'esnext',
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,
  },
  server: {
    host: '0.0.0.0',
    hmr: {
      overlay: false,
    },
    allowedHosts: [
      '.blockinfura.com',
      '.up.railway.app',
    ],
  },
});
