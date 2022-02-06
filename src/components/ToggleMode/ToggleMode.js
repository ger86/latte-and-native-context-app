import React from 'react';
import {Button, View} from 'react-native';
import Text from '#components/ui/Text';
import {useModeContext} from '#/contexts/ModeContext';

export default function ToggleMode() {
  const {mode, toggleMode} = useModeContext();
  return (
    <View>
      <Text mode={mode}>Modo actual: {mode}</Text>
      <Button onPress={toggleMode} title="Cambiar modo" />
    </View>
  );
}
