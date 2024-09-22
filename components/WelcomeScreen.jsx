import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

export default function Welcome({ navigation }) {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  })

  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={styles.scrollView}>
    <Animated.View style={[styles.containerView, {opacity: fadeAnim}]}>
      <View style={styles.logoContainer}>    
        <Text style={styles.title}>Car Buying,</Text>
        <Text style={styles.yellowTitle}>Simplified</Text>
        <Text style={styles.subtitle}>Compare Prices on new &
           used cars from official dealers across the Philippines</Text>
      <Image
      style={styles.logo} 
      source= {require('../assets/images/favicon.png')}
      resizeMethod='cover'
      ></Image>
    </View>
    <View style={styles.footerView}>
     <Text style={styles.exploreText}> Explore, Compare, and find the Perfect Car</Text>
    <TouchableOpacity 
    style={styles.getStartedButton} 
    onPress={() => navigation.navigate('Main')}>
      <Text style={styles.getStartedText}>Gets Started</Text>
    </TouchableOpacity>
    </View>
    </Animated.View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Ensure it takes the whole screen
    backgroundColor: '#fff', // Background for the entire screen
  },
  scrollView: {
    flexGrow: 1, // Allow scrolling if content overflows
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  containerView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginVertical: 20,
    borderRadius: 100,
    borderColor: '#ECAE36',
    borderWidth: 2,
    backgroundColor: '#FFF',
    padding: 10,
  },
  title: {
    fontSize: 40,
    color: '#21252A',
    fontWeight: 'bold',
    marginTop: 32,
  },
  yellowTitle: {
    fontSize: 40,
    color: '#ECAE36',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationColor: '#ECAE36'
  },
  subtitle: {
    fontSize: 24,
    width: 330,
    color: '#21252A',
    textAlign: 'center',
    marginVertical: 10,
  },
  exploreText: {
    fontSize: 18,
    color: '#728085',
    textAlign: 'center'
  },
  getStartedButton: {
    backgroundColor: '#101820',
    borderRadius: 50,
    marginTop: 20,
    padding: 15,
    justifyContent: 'center',
    textAlign: 'center'
  },
  getStartedText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
});