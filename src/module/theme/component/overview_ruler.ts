import {
  red,
  blue,
  green,
  purple,
  yellow
} from '../../../global/theme/color';
import { alpha } from '../../../global/util/alpha';

const overviewRuler = {
  'editorOverviewRuler.addedForeground': green.green_600,
  'editorOverviewRuler.deletedForeground': red.red_900,
  'editorOverviewRuler.errorForeground': red.red_600,
  'editorOverviewRuler.findMatchForeground': alpha(blue.blue_600, 0.45),
  'editorOverviewRuler.infoForeground': purple.purple_600,
  'editorOverviewRuler.modifiedForeground': yellow.yellow_600,
  'editorOverviewRuler.warningForeground': yellow.yellow_900
};

export { overviewRuler };