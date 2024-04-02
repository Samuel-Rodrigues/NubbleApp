import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function NewPostScreen(props: AppTabScreenProps<'NewPostScreen'>) {
  console.log(props);
  return (
    <Screen>
      <Text preset="headingLarge">NewPostScreen</Text>
    </Screen>
  );
}
