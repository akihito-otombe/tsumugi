import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base は書かない（Workflow の --base で毎回上書きする）
});
