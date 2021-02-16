// 方式1-多平台
import { Platform, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red'
      },
      android: {
        backgroundColor: 'green'
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue'
      }
    })
  }
});

// 方式2-多平台
const Component = Platform.select({
    ios: () => require('ComponentIOS'),
    android: () => require('ComponentAndroid'),
    native: () => require('ComponentForNative'),
    default: () => require('ComponentForWeb')
  })();
  
  <Component />;

// 方式3-原生
import { Platform } from 'react-native';
if (Platform.Version === 25) {
  console.log('Running on Nougat!');
}

// 方式4-原生
import { Platform } from 'react-native';
const majorVersionIOS = parseInt(Platform.Version, 10);
if (majorVersionIOS <= 9) {
  console.log('Work around a change in behavior');
}

// 方式5-IOS
import { Platform, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100
});

