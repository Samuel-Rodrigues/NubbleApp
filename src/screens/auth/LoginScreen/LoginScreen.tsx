import React from 'react';
import {Button} from '../../../components/Button/Button';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Screen} from '../../../components/Screen/Screen';

export function LoginScreen() {
  return (
    <Screen>
      <Text preset="headingLarge" marginBottom="s8">
        Olá
      </Text>
      <Text mb="s48" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <TextInput
        RightComponent={<Icon name="eyeOn" color="gray2" />}
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's10'}}
      />

      <Text color="primary" preset="paragraphSmall" bold>
        Esqueci minha senha
      </Text>

      <Button mt="s48" title="Entrar" />
      <Button mt="s12" preset="outline" title="Criar uma conta" />
    </Screen>
  );
}