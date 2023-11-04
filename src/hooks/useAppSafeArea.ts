import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useAppTheme} from './useAppTheme';

export function useAppSafeArea() {
  const {top, bottom} = useSafeAreaInsets();
  const {spacing} = useAppTheme();

  return {
    top: Math.max(top, spacing.s20), // o Math.max pega o maior valor entre os dois
    bottom: Math.max(bottom, spacing.s20), // o Math.max pega o maior valor entre os dois
  };
}
