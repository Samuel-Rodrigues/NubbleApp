import React from 'react';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  function submitForm() {
    reset({
      title: 'Sua consta foi criada com sucesso',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {name: 'checkRound', color: 'success'},
    });
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>
      <TextInput placeholder="@" label="Seu username" boxProps={{mb: 's20'}} />
      <TextInput
        placeholder="Digite seu nome completo"
        label="Nome completo"
        boxProps={{mb: 's20'}}
      />
      <TextInput
        placeholder="Digite seu e-mail"
        label="E-mail"
        boxProps={{mb: 's20'}}
      />

      <PasswordInput
        placeholder="Digite sua senha"
        label="Senha"
        boxProps={{mb: 's48'}}
      />

      <Button onPress={submitForm} title="Criar uma conta" />
    </Screen>
  );
}
