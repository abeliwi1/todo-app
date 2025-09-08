import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: "/todo_app/",	
    plugins: [
        tailwindcss(),
    ],
});
