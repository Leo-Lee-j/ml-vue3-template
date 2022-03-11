import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import path from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  return defineConfig({
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src')
        },
        {
          find: /^~/,
          replacement: ''
        }
      ]
    },
    plugins: [
      vue()
    ],
    // base: env.VITE_ROUTER_BASE,
    server: {
      fs: {
        strict: false
      },
      strictPort: false,
      port: 9528,
      open: true,
      proxy: {
        // '/': {
        //   target: env.VITE_PROXY_TARGET,
        //   ws: true,
        //   changeOrigin: true
        // }
      }
    }
  })
}
