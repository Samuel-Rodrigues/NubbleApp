import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge">Carlos Samuel Rodrigues</Text>
      <Text italic bold preset="headingLarge">
        Carlos Samuel Rodrigues
      </Text>
    </SafeAreaView>
  );
}

export default App;
