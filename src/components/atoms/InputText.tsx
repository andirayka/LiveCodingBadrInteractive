import {dimens} from 'constants';
import React, {FC, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';
import {TextInputProps} from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

interface InputProps extends Partial<TextInputProps> {}
type ComponentProps = InputProps & {
  errorMessage: string;
  error: boolean;
  passwordMode?: boolean;
};
export const InputText: FC<ComponentProps> = props => {
  const [showPassword, setShowPassword] = useState(false);
  const {errorMessage, error, passwordMode} = props;

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={styles.textInputStyle}
        secureTextEntry={!showPassword}
        right={
          passwordMode && (
            <TextInput.Icon
              name={!showPassword ? 'eye' : 'eye-off'}
              onPress={() => setShowPassword(!showPassword)}
            />
          )
        }
      />

      {/* Error message */}
      {error && (
        <HelperText
          style={{paddingLeft: 0, fontSize: dimens.medium_14}}
          type="error">
          {errorMessage}
        </HelperText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: dimens.standard,
  },
  textInputStyle: {
    backgroundColor: 'white',
  },
});
