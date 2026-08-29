import type { Palette } from '@global/type/color_scheme_type';

const laravelSyntax = (colors: Palette) => {
  const { syntax } = colors;

  return [{
    name: 'laravel blade tag',
    scope: 'text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade',
    settings: {
      foreground: syntax.blue
    }
  }, {
    name: 'laravel blade @',
    scope: 'text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade',
    settings: {
      foreground: syntax.blue
    }
  }];
};

export { laravelSyntax };