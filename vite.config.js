import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: "/REPO_NAME/",	
    plugins: [
        tailwindcss(),
    ],
});
