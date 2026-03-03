import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

// The URL of your web prototype. 
const WEB_URL = 'http://192.168.1.180:8083';

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
      <View style={styles.webviewWrapper}>
        <WebView
          source={{ uri: WEB_URL }}
          style={styles.webview}
          startInLoadingState={true}
          scalesPageToFit={true}
          allowsBackForwardNavigationGestures={true}
          pullToRefreshEnabled={true}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  webviewWrapper: {
    flex: 1,
    overflow: 'hidden',
  },
  webview: {
    flex: 1,
  },
});
