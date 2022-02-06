import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  light: {
    borderColor: '#333',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  dark: {
    borderColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});

export default function BorderedView({mode, children}) {
  return (
    <View style={mode === 'light' ? styles.light : styles.dark}>
      {children}
    </View>
  );
}
