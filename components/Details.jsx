import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Details = () => {
  const route = useRoute();
  const { carModel } = route.params; // Retrieve the passed carModel

  // Log to verify data
  console.log(carModel);

  // Check if carModel and features are defined
  if (!carModel || typeof carModel !== 'object' || !Array.isArray(carModel.features) || carModel.features.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text>No car model details available</Text>
      </SafeAreaView>
    );
  }

  // Extract the first feature set (assuming there is at least one feature set)
  const { engine, seat } = carModel.features[0];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.modelName}>{carModel.model}</Text>
        <Image source={{ uri: carModel.image }} style={styles.carLogo} resizeMode='contain' />
        <Text style={styles.modelFeatures}>Engine: {engine || 'N/A'}</Text>
        <Text style={styles.modelFeatures}>Seats: {seat || 'N/A'}</Text>


        <Text style={styles.galleryTitle}>Gallery:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {carModel.gallery.map((url, index) => (
            <Image key={index} source={{ uri: url }} style={styles.galleryImage} resizeMode='contain' />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 16,
  },
  carLogo: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  modelName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modelFeatures: {
    fontSize: 16,
    marginVertical: 4,
  },
  galleryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  galleryImage: {
    width: 150,
    height: 100,
    marginRight: 10,
  },
});

export default Details;
