import { defineConfig } from 'orval';

export default defineConfig({
  geminiDev: {
    output: {
      target: 'src/lib/api/generated.ts',
      schemas: 'src/lib/api/model',
      client: 'fetch',
      baseUrl: `http://localhost:3333`,
    },
    input: {
      target: './../docs/swagger.json',
    },
  },
});