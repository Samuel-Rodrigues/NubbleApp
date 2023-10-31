import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import {useAppTheme} from '../../hooks/useAppTheme';
import {Box, BoxProps} from '../Box/Box';
import {Text, $fontFamily, $fontSizes} from '../Text/Text';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessages?: String;
  RightComponent?: React.ReactElement;
  boxProps?: BoxProps;
}

export function TextInput({
  label,
  errorMessages,
  RightComponent,
  boxProps,
  ...rnTextInputProps
}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    flexDirection: 'row',
    borderWidth: errorMessages ? 2 : 1,
    borderColor: errorMessages ? 'error' : 'gray4',
    borderRadius: 's12',
    padding: 's16',
  };

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Text preset="paragraphMedium" mb="s4">
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            autoCapitalize="none"
            ref={inputRef}
            placeholderTextColor={colors.gray3}
            style={$textStyle}
            {...rnTextInputProps}
          />
          {RightComponent && (
            <Box ml="s16" justifyContent="center">
              {RightComponent}
            </Box>
          )}
        </Box>
        {errorMessages && (
          <Text preset="paragraphMedium" bold color="error">
            {errorMessages}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

const $textStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1, // Imprede que o texto empurre o ícone para fora do container
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
