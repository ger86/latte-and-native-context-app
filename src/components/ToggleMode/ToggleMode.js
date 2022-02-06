import React from 'react';
import {Button, View} from 'react-native';
import Text from '#components/ui/Text';

export default function ToggleMode({mode, toggleMode}) {
  return (
    <View>
      <Text mode={mode}>Modo actual: {mode}</Text>
      <Button onPress={toggleMode} title="Cambiar modo" />
    </View>
  );
}
