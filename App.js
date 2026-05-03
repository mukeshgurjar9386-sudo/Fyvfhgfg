import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>EditAI App Chalu Ho Gaya DON 🔥</Text>
      <Text style={styles.subtext}>APK Ban Gaya ✅</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#00FF00',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtext: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
  },
});
