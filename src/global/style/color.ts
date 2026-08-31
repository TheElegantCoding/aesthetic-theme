const base = {
  black: '#000',
  transparent: '#00000000',
  white: '#fff'
};

const background = {
  background_500: '#525e84',
  background_600: '#4a557f',
  background_700: '#222739',
  background_800: '#171a26',
  background_900: '#30354a',
  background_950: '#0d0e14'
};

const darkBackground = {
  background_500: '#71717a',
  background_600: '#52525b',
  background_700: '#29292e',
  background_800: '#19191a',
  background_900: '#18181b',
  background_950: '#0b0b0e'
};

const gray = {
  gray_50: '#F9FAFB',
  gray_100: '#F3F4F6',
  gray_200: '#E5E7EB',
  gray_300: '#bdc3cc',
  gray_400: '#9CA3AF',
  gray_500: '#6B7280',
  gray_600: '#4B5563',
  gray_700: '#374151',
  gray_800: '#1F2937',
  gray_900: '#111827',
  gray_950: '#030712'
};

const blue = {
  blue_50: '#eff6ff',
  blue_100: '#dbeafe',
  blue_200: '#bfdbfe',
  blue_300: '#93c5fd',
  blue_400: '#60a5fa',
  blue_500: '#3b82f6',
  blue_600: '#2563eb',
  blue_700: '#1d4ed8',
  blue_800: '#1e40af',
  blue_900: '#1e3a8a',
  blue_950: '#172554'
};

const red = {
  red_50: '#fef2f2',
  red_100: '#fee2e2',
  red_200: '#fecaca',
  red_300: '#fca5a5',
  red_400: '#f87171',
  red_500: '#ef4444',
  red_600: '#dc2626',
  red_700: '#b91c1c',
  red_800: '#991b1b',
  red_900: '#7f1d1d'
};

const yellow = {
  yellow_50: '#fefce8',
  yellow_100: '#fef9c3',
  yellow_200: '#fef08a',
  yellow_300: '#fde047',
  yellow_400: '#facc15',
  yellow_500: '#eab308',
  yellow_600: '#ca8a04',
  yellow_700: '#a16207',
  yellow_800: '#854d0e',
  yellow_900: '#713f12'
};

const green = {
  green_50: '#f0fdf4',
  green_100: '#dcfce7',
  green_200: '#bbf7d0',
  green_300: '#86efac',
  green_400: '#4ade80',
  green_500: '#22c55e',
  green_600: '#16a34a',
  green_700: '#15803d',
  green_800: '#166534',
  green_900: '#14532d'
};

const emerald = {
  emerald_50: '#ECFDF5',
  emerald_100: '#D1FAE5',
  emerald_200: '#62eaaa',
  emerald_300: '#6EE7B7',
  emerald_400: '#34D399',
  emerald_500: '#10B981',
  emerald_600: '#059669',
  emerald_700: '#047857',
  emerald_800: '#065F46',
  emerald_900: '#064E3B'
};

const purple = {
  purple_50: '#faf5ff',
  purple_100: '#f3e8ff',
  purple_200: '#e9d5ff',
  purple_300: '#d8b4fe',
  purple_400: '#c084fc',
  purple_500: '#a855f7',
  purple_600: '#9333ea',
  purple_700: '#7e22ce',
  purple_800: '#6b21a8',
  purple_900: '#4c1d95'
};

const syntax = {
  green: '#009E60',
  cyan: '#099ec3',
  blue: '#2d69ec',
  lightBlue: '#6D90DA',
  amber: '#fa9f38',
  purple: '#bf88f3',
  emerald: '#11cd8e'
};

const defaultPalette = {
  base,
  gray,
  blue,
  syntax,
  red,
  yellow,
  green,
  emerald,
  purple,
  background
};

const darkerPalette = {
  ...defaultPalette,
  background: darkBackground
};

export {
  darkerPalette,
  defaultPalette
};