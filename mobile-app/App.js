import React from 'react';
import { StyleSheet, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

// The URL of your web prototype. 
// If your iPhone and Mac are on the same Wi-Fi, we use your Mac's IP.
const WEB_URL = 'http://192.168.1.180:8083';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#438163" />
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
    backgroundColor: '#438163', // Matches your brand green
  },
  webviewWrapper: {
    flex: 1,
    overflow: 'hidden',
  },
  webview: {
    flex: 1,
  },
});
