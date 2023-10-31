import React from 'react';
import {Button} from '../../../components/Button/Button';
import {Text} from '../../../components/Text/Text';
import {Screen} from '../../../components/Screen/Screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {zodResolver} from '@hookform/resolvers/zod';

import {useForm, Controller} from 'react-hook-form';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {LoginSchema, loginSchema} from './loginSchema';
import {FormTextInput} from '../../../components/Form/FormTextInput/FormTextInput';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {email: '', password: ''},
    mode: 'onChange',
  });

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPassword');
  }

  function submitForm({email, password}: LoginSchema) {
    console.log('formState', email, password);
  }
  return (
    <Screen scrollable>
      <Text preset="headingLarge" marginBottom="s8">
        Olá
      </Text>
      <Text mb="s48" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <Controller
        control={control}
        name="password"
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <PasswordInput
            label="Senha"
            value={value}
            onChangeText={onChange}
            errorMessages={error?.message}
            placeholder="Digite sua senha"
            boxProps={{mb: 's10'}}
          />
        )}
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        bold>
        Esqueci minha senha
      </Text>

      <Button
        mt="s48"
        title="Entrar"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
      />
      <Button
        mt="s12"
        preset="outline"
        title="Criar uma conta"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
}
