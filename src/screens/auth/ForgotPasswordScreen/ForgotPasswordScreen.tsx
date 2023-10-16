import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {RootStackParamList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>;

export function ForgotPasswordScreen({}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  function submitForm() {
    reset({
      title: `Enviamos as instruções ${'\n'}para seu e-mail`,
      description:
        'Clique no link enviado no seu  e-mail para recuperar sua senha',
      icon: {name: 'messageRound', color: 'primary'},
    });
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as intruções para redefinição de senha
      </Text>
      <TextInput
        placeholder="Digite seu e-mail"
        label="E-mail"
        boxProps={{mb: 's40'}}
      />
      <Button onPress={submitForm} title="Recuperar senha" />
    </Screen>
  );
}
