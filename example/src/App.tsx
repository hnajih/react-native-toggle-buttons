import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import ToggleButton from 'react-native-toggle-buttons';

export default function App() {
  return (
    <View style={styles.container}>
      <ToggleButton.Group
        row
        selected={2}
        space={0}
        // color={'blue'}
        // colorSelected={'red'}
        // textColor={'red'}
        buttonStyle={{
          margin: 20,
          marginHorizontal: 2,
        }}
        onValueChange={console.warn}
      >
        <ToggleButton title={'AAAA'} value={1} />
        <ToggleButton title={'BBB'} value={2} />
        <ToggleButton title={'CCC'} value={3} />
      </ToggleButton.Group>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
