import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function FavoriteScreen(props: AppTabScreenProps<'FavoriteScreen'>) {
  console.log(props);
  return (
    <Screen>
      <Text preset="headingLarge">FavoriteScreen</Text>
    </Screen>
  );
}
