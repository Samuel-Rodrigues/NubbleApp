import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm, Controller} from 'react-hook-form';

import {
  Button,
  PasswordInput,
  Screen,
  Text,
  TextInput,
  FormTextInput,
} from '@components';
import {AuthScreenProps} from '@routes';

import {SignUpSchema, signUpSchema} from './signUpSchema';

export function SignUpScreen({}: AuthScreenProps<'SignUpScreen'>) {
  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {email: '', password: ''},
    mode: 'onChange',
  });

  function submitForm({email, password}: SignUpSchema) {
    console.log('formState', email, password);
    // reset({
    //   title: 'Sua consta foi criada com sucesso',
    //   description: 'Agora é só fazer login na nossa plataforma',
    //   icon: {name: 'checkRound', color: 'success'},
    // });
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>
      <FormTextInput
        control={control}
        name="username"
        placeholder="@"
        label="Seu username"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="fullName"
        placeholder="Digite seu nome completo"
        label="Nome completo"
        boxProps={{mb: 's20'}}
      />

      <Controller
        control={control}
        name="email"
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <TextInput
            errorMessage={error?.message}
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{mb: 's20'}}
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <PasswordInput
            label="Senha"
            value={value}
            onChangeText={onChange}
            errorMessage={error?.message}
            placeholder="Digite sua senha"
            boxProps={{mb: 's48'}}
          />
        )}
      />

      <Button
        onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
        disabled={!formState.isValid}
      />
    </Screen>
  );
}
