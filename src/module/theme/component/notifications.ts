import {
  red,
  gray,
  blue,
  base,
  yellow,
  background
} from '@global/theme/color';

const notifications = {
  'notificationCenter.background': background.background_800,
  'notificationCenterHeader.border': gray.gray_400,
  'notificationCenterHeader.background': background.background_800,
  'notifications.background': background.background_800,
  'notificationCenterHeader.foreground': gray.gray_200,
  'notifications.foreground': gray.gray_300,
  'notifications.border': base.transparent,

  'notificationsErrorIcon.foreground': red.red_500,
  'notificationsInfoIcon.foreground': blue.blue_500,
  'notificationsWarningIcon.foreground': yellow.yellow_500,
  'notificationLink.foreground': blue.blue_500,
  'notificationToast.border': base.transparent
};

export { notifications };