import {
  base,
  blue,
  gray,
  background
} from '@global/theme/color';
import { alpha } from '@global/util/alpha';

const tab = {
  'editorGroupHeader.tabsBackground': background.background_900,
  'editorGroupHeader.tabsBorder': base.transparent,
  'editorGroupHeader.noTabsBackground': background.background_900,
  'editorGroup.dropBackground': alpha(background.background_900, 0.9),

  'tab.activeBackground': background.background_700,
  'tab.activeForeground': gray.gray_100,
  'tab.activeBorder': blue.blue_600,
  'tab.activeBorderTop': base.transparent,
  'tab.activeBorderBottom': blue.blue_600,

  'tab.border': base.transparent,
  'tab.inactiveBackground': background.background_900,
  'tab.inactiveForeground': gray.gray_400,
  'tab.hoverBackground': background.background_800,
  'tab.hoverForeground': gray.gray_200,
  'tab.unfocusedActiveBackground': background.background_800,
  'tab.unfocusedActiveForeground': gray.gray_300,
  'tab.unfocusedInactiveBackground': background.background_900,
  'tab.unfocusedInactiveForeground': gray.gray_600
};

export { tab };