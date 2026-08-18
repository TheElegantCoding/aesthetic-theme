import {
  red,
  gray,
  blue,
  yellow,
  background
} from '@global/theme/color';

const notifications = {
  'notificationCenter.background': background.background_900,
  'notificationCenter.border': gray.gray_400,
  'notificationCenterHeader.border': gray.gray_400,
  'notificationCenterHeader.background': background.background_900,
  'notificationCenterHeader.foreground': gray.gray_400,
  'notificationLink.foreground': blue.blue_500,
  'notifications.background': background.background_900,
  'notifications.border': gray.gray_400,
  'notifications.foreground': gray.gray_400,
  'notificationsErrorIcon.foreground': red.red_600,
  'notificationsInfoIcon.foreground': blue.blue_600,
  'notificationsWarningIcon.foreground': yellow.yellow_600,
  'notificationToast.border': gray.gray_500
};

export { notifications };