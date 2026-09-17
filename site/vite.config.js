import {readdirSync} from 'node:fs';
import {resolve} from 'node:path';
import {defineConfig} from 'vite';

function findHtmlEntries(directory) {
  return readdirSync(directory, {withFileTypes: true}).flatMap((entry) => {
    if (entry.name === 'dist' || entry.name === 'node_modules') {
      return [];
    }

    const entryPath = resolve(directory, entry.name);

    if (entry.isDirectory()) {
      return findHtmlEntries(entryPath);
    }

    return entry.name.endsWith('.html') ? [entryPath] : [];
  });
}

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: findHtmlEntries(import.meta.dirname),
    },
  },
  server: {host: '0.0.0.0'},
  publicDir: 'public',
});
