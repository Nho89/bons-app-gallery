import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, 
    environment: 'jsdom',
  }
<<<<<<< HEAD
  })
=======
})
>>>>>>> 67ba8cea1984e64cbc47260be55c49edf5563d67
