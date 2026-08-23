import { theme } from '@module/theme/theme';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';

const outputPath = resolve(process.cwd(), 'dist/aesthetic_dark_theme.json');

const buildTheme = async () => {
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, JSON.stringify(theme, null, 2), 'utf-8');
};

await buildTheme();