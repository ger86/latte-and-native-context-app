import React from 'react';
import {Button} from 'react-native';
import BorderedView from '#components/ui/BorderedView';
import Text from '#components/ui/Text';

export default function CounterView({counter, onClickButton}) {
  return (
    <BorderedView>
      <Text>{counter}</Text>
      <Button onPress={onClickButton} title="Incrementar" />
    </BorderedView>
  );
}
