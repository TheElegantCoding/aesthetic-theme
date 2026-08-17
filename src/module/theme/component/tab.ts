import { gray, base, background } from '../../../global/theme/color';
import { alpha } from '../../../global/util/alpha';

const tab = {
  'editorGroup.dropBackground': alpha(background.background_900, 0.9),
  'editorGroupHeader.noTabsBackground': background.background_900,
  'editorGroupHeader.tabsBackground': background.background_900,
  'tab.activeBackground': background.background_900,
  'tab.activeForeground': gray.gray_300,
  'tab.border': base.transparent,
  'tab.inactiveBackground': background.background_900,
  'tab.inactiveForeground': gray.gray_500
};

export { tab };