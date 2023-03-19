import { create } from '@storybook/theming/create';
import { theme as chakraTheme } from '@chakra-ui/react';

export const theme = create({
  ...chakraTheme,
  // ここでテーマのカスタマイズが可能
  // 例えば、borderRadiusを変更する場合は、以下のように記述できます。
  borderRadius: chakraTheme.radii.md,
});