import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">SettingsScreen</Text>
      <Button
        title="Go to Settings"
        onPress={() =>
          navigation.navigate('AppTabNavigator', {
            screen: 'NewPostScreen',
          })
        }
      />
    </Screen>
  );
}
