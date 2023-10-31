import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {zodResolver} from '@hookform/resolvers/zod';
import {Text, FormTextInput, PasswordInput, Button, Screen} from '@components';
import {RootStackParamList} from '@routes';

import {useForm, Controller} from 'react-hook-form';
import {LoginSchema, loginSchema} from './loginSchema';

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
