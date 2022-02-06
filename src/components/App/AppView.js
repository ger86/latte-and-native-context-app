import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Counter from '#components/Counter';
import ToggleMode from '#components/ToggleMode';
import {ModeContextProvider} from '#contexts/ModeContext';
import {useModeContext} from '#/contexts/ModeContext';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  containerLight: {
    backgroundColor: 'white',
  },
  containerDark: {
    backgroundColor: 'black',
  },
});

export default function AppView() {
  return (
    <ModeContextProvider>
      <Content />
    </ModeContextProvider>
  );
}

function Content() {
  const {mode} = useModeContext();
  const containerModeStyle =
    mode === 'light' ? styles.containerLight : styles.containerDark;
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={[styles.container, containerModeStyle]}>
        <ToggleMode />
        <Counter />
      </View>
    </SafeAreaView>
  );
}
