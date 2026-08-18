import {
  red,
  blue,
  base,
  green,
  purple,
  yellow
} from '@global/theme/color';
import { alpha } from '@global/util/alpha';

const overviewRuler = {
  'editorOverviewRuler.addedForeground': green.green_500,
  'editorOverviewRuler.deletedForeground': red.red_900,
  'editorOverviewRuler.errorForeground': red.red_500,
  'editorOverviewRuler.findMatchForeground': alpha(blue.blue_500, 0.45),
  'editorOverviewRuler.infoForeground': purple.purple_500,
  'editorOverviewRuler.modifiedForeground': yellow.yellow_500,
  'editorOverviewRuler.warningForeground': yellow.yellow_900,
  'editorOverviewRuler.border': base.transparent,
  'editorOverviewRuler.bracketMatchForeground': blue.blue_400
};

export { overviewRuler };