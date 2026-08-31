import { darkerPalette, defaultPalette } from '@global/style/color';
import { createTheme } from '@module/theme/theme';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';

const buildTheme = () => {
  const defaultInformation = {
    type: 'dark' as 'dark' | 'light',
    author: 'Luis M',
    maintainers: ['Luis M <luismonsalve1941@gmail.com>']
  };

  const themes = [createTheme({
    ...defaultInformation,
    colors: defaultPalette,
    name: 'Aesthetic dark',
    semanticClass: 'aesthetic-dark'
  }), createTheme({
    ...defaultInformation,
    colors: darkerPalette,
    name: 'Aesthetic dark grey',
    semanticClass: 'aesthetic-dark-grey'
  })];

  themes.forEach(async (theme) => {
    const themeOutputPath = resolve(process.cwd(), `dist/${theme.semanticClass}.json`);
    await mkdir(dirname(themeOutputPath), { recursive: true });
    await writeFile(themeOutputPath, JSON.stringify(theme, null, 2), 'utf-8');
  });
};

buildTheme();