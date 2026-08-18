import {
  red,
  gray,
  yellow,
  background
} from '@global/theme/color';

const statusBar = {
  'statusBar.background': background.background_800,
  'statusBar.foreground': gray.gray_300,
  'statusBar.noFolderBackground': background.background_800,
  'statusBarItem.remoteBackground': background.background_700,
  'statusBarItem.remoteForeground': gray.gray_300,

  'statusBar.debuggingBackground': background.background_700,
  'statusBarItem.activeBackground': background.background_600,
  'statusBarItem.hoverBackground': background.background_600,
  'statusBarItem.errorBackground': red.red_900,
  'statusBarItem.errorForeground': red.red_200,
  'statusBarItem.warningBackground': yellow.yellow_900,
  'statusBarItem.warningForeground': yellow.yellow_200
};

export { statusBar };