import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  function navigateToSettings() {
    navigation.navigate('SettingsScreen');
  }

  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button title="Go to Settings" onPress={navigateToSettings} />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('FavoriteScreen')}
      />
    </Screen>
  );
}
