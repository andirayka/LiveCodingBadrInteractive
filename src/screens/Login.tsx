import React, {FC} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {Text, Title} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Login: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Title>Halo</Title>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
