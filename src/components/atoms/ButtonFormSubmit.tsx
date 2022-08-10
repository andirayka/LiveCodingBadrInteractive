import React, {FC} from 'react';
import {dimens} from 'constants';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

type Props = {
  text: string;
  isLoading?: boolean;
  onPress: () => void;
};
export const ButtonFormSubmit: FC<Props> = ({text, isLoading, onPress}) => {
  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        loading={isLoading}
        labelStyle={{fontSize: dimens.medium_14}}
        style={{borderRadius: dimens.medium}}
        contentStyle={{height: 48}}
        onPress={onPress}>
        {text}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 82,
    justifyContent: 'center',
    paddingHorizontal: dimens.standard,
    paddingBottom: dimens.small,
  },
});
