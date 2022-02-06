import React from 'react';
import {Button} from 'react-native';
import BorderedView from '#components/ui/BorderedView';
import Text from '#components/ui/Text';

export default function CounterView({counter, onClickButton, mode}) {
  return (
    <BorderedView mode={mode}>
      <Text mode={mode}>{counter}</Text>
      <Button onPress={onClickButton} title="Incrementar" />
    </BorderedView>
  );
}
