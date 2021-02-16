import React from 'react';
import { View, Text, Image, ScrollView, TextInput, Dimensions, Platform } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>
        分辨率:
        {Dimensions.get("window").width}
        {Dimensions.get("window").height}
        {Dimensions.get("window").scale}
        {Platform.OS}
      </Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
}

export default App;