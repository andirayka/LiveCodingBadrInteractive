import {ButtonFormSubmit, Gap, InputText} from 'components';
import {dimens} from 'constants';
import React, {FC} from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {
  StatusBar,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Button,
  ScrollView,
} from 'react-native';
import {Subheading, Title, Text, TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

type FormDataType = {
  email: string;
  password: string;
};
export const Login: FC = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<FormDataType>({mode: 'onChange'});

  const onSubmit: SubmitHandler<FormDataType> = async data => {
    console.log(data);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ios: 'padding', android: 'height'})}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{flex: 1, justifyContent: 'space-around'}}>
          {/* <View style={{flex: 1, padding: dimens.standard}}> */}
          <Gap y={150} />
          <Title style={{marginTop: dimens.medium, textAlign: 'center'}}>
            Masuk halaman Admin
          </Title>
          <Subheading style={{marginTop: dimens.small, textAlign: 'center'}}>
            Masukkan email dan password untuk melanjutkan.
          </Subheading>
          <Gap y={80} />

          <TextInput placeholder="Username" style={styles.textInput} />
          {/* </View> */}
          <ButtonFormSubmit
            isLoading={isSubmitting}
            text="Masuk"
            onPress={handleSubmit(onSubmit)}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
});
