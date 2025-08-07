import react from '@vitejs/plugin-react';
import { defineConfig, type UserConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        include: ['./test/**/*.test.tsx'],
        globals: true,
        setupFiles: './test/setup.ts',
    },
} as UserConfig);
