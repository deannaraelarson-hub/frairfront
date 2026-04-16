import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      '@wagmi/core',
      'wagmi',
      'viem',
      '@reown/appkit',
      '@reown/appkit-adapter-wagmi',
      '@tanstack/react-query'
    ],
    exclude: []
  },
  resolve: {
    dedupe: [
      '@wagmi/core',
      'wagmi', 
      'viem',
      'react',
      'react-dom'
    ]
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'web3': ['@wagmi/core', 'wagmi', 'viem', 'ethers'],
          'appkit': ['@reown/appkit', '@reown/appkit-adapter-wagmi']
        }
      }
    }
  }
})
