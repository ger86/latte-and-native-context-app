import React from 'react';
import {StyleSheet, Text as RNText} from 'react-native';
import ModeContext, {useModeContext} from '#/contexts/ModeContext';

const styles = StyleSheet.create({
  light: {
    color: '#333',
  },
  dark: {
    color: '#fff',
  },
});

export default function Text(props) {
  const {mode} = useModeContext(ModeContext);
  return (
    <RNText style={mode === 'light' ? styles.light : styles.dark} {...props} />
  );
}
