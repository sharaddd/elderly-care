import React, { useEffect } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import * as Notifications from 'expo-notifications';

// The URL of your web prototype. 
const WEB_URL = 'http://192.168.1.182:8084';

// Configure notifications
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function RootLayout() {
  useEffect(() => {
    // Request permissions for notifications
    const requestPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        console.log('Notification permissions not granted');
      }
    };
    requestPermissions();
  }, []);

  const triggerMedicationNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Medication Reminder 💊",
        body: "Your 10:00 PM medication (Telmisartan 40mg) is due now. Please confirm if taken.",
        data: { screen: 'Medication' },
      },
      trigger: null, // trigger immediately
    });
  };

  const triggerAppointmentNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Doctor's Appointment Pending 🏥",
        body: "You have a pending appointment with Dr. Arpit (Cardiologist) tomorrow at 11:30 AM.",
        data: { screen: 'Appointment' },
      },
      trigger: null, // trigger immediately
    });
  };

  const handleWebViewMessage = (event: any) => {
    try {
      const message = event.nativeEvent.data;
      if (message === 'TRIGGER_MEDICATION_NOTIFICATION') {
        triggerMedicationNotification();
      } else if (message === 'TRIGGER_APPOINTMENT_NOTIFICATION') {
        triggerAppointmentNotification();
      }
    } catch (error) {
      console.error('Error handling webview message:', error);
    }
  };

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
          onMessage={handleWebViewMessage}
          hideKeyboardAccessoryView={true}
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
