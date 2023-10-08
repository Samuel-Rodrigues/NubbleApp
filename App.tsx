import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button} from './src/components/Button/Button';
import {Text} from './src/components/Text/Text';

import {theme} from './src/theme/theme';

function App(): React.JSX.Element {
  const chamarFuncao = () => {
    let valor = 1;
    const novoValor = valor + 1;
    console.log(novoValor);
  };

  chamarFuncao();
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingMedium">Carlos Samuel Rodrigues</Text>
        <Text italic bold preset="headingLarge">
          Carlos Samuel Rodrigues
        </Text>
        <Button title="Entrar" preset="primary" onPress={chamarFuncao} />
        <Button title="Entrar" preset="outline" />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
