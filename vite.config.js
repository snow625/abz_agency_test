import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        'components': fileURLToPath(new URL('./src/shared/components', import.meta.url)),
        'modules': fileURLToPath(new URL('./src/modules', import.meta.url)),
        'api': fileURLToPath(new URL('./src/shared/api', import.meta.url)),
        'mixins':fileURLToPath(new URL('./src/sass/utils/_mixins.scss', import.meta.url)),

    }
}
 
})
