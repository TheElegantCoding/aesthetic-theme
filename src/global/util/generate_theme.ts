import { defaultPalette } from '@global/style/color';
import { createTheme } from '@module/theme/theme';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';

const outputPath = resolve(process.cwd(), 'dist/aesthetic_dark_theme.json');

const buildTheme = async () => {
  const theme = createTheme({
    colors: defaultPalette,
    type: 'dark',
    name: 'Aesthetic Dark'
  });

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, JSON.stringify(theme, null, 2), 'utf-8');
};

await buildTheme();