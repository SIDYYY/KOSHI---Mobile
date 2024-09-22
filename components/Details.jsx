import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import { carModels } from '../components/CarLISTS'; 

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { carModel } = route.params; // Retrieve the passed carModel

  // PASSING DATA (CHECKED)
  console.log(carModel);

  // Check if carModel and features are defined
  if (!carModel || typeof carModel !== 'object' || !Array.isArray(carModel.features) || carModel.features.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text>No car model details available</Text>
      </SafeAreaView>
    );
  }

  // Check the suggested similiar car detail (Choya ey)
  const handleCarSelect = (carModel) => {
    navigation.navigate('Details', { carModel });
  };

  // Flatten the carModels to single array (para paspas ma filter)
  const allCars = Object.values(carModels).flat();

  // Filter similar cars based on the type. (way labot ang gina view na model)
  const similarCars = allCars.filter(car => car.type === carModel.type && car.model !== carModel.model);

  // Extract the first feature set 
  const { engine, seat } = carModel.features[0];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.modelName}>{carModel.model}</Text>
        <Text style={styles.moduleBrand}>{carModel.brand}</Text>
      </View>

        <Image source={{ uri: carModel.image }} style={styles.carLogo} resizeMode='contain'/>

        <View style={styles.bottomContainer}>
        {/* Feature Section */}
        <Text style={styles.featTitle}>Feature</Text>
        <View style={styles.featureBox}>
        <View style={styles.featureCard}>

        <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/2061/2061956.png'}} style={styles.featureIcon} resizeMode='cover'/>

          <Text style={styles.modelFeaturesTitle}>Engine</Text>
          <Text style={styles.modelFeatures}>{engine ? `${engine}` : 'N/A'}</Text>
        </View>

        <View style={styles.featureCard}>

        <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/7087/7087905.png'}} style={styles.featureIcon} resizeMode='cover'/>

        <Text style={styles.modelFeaturesTitle}>Capacity</Text>
        <Text style={styles.modelFeatures}>{seat ? `${seat} Seat` : 'N/A'}</Text>
        </View>
        </View>
        {/* Gallery Section */}
        <Text style={styles.galleryTitle}>Gallery</Text>
        <ScrollView contentContainerStyle={styles.galleryWrap} showsHorizontalScrollIndicator={false}>
          {carModel.gallery.map((url, index) => (
            <Image key={index} source={{ uri: url }} style={styles.galleryImage} resizeMode='contain' />
          ))}
        </ScrollView>

        {/* Similar Cars Section */}
        <Text style={styles.similarCarsTitle}>Similar Cars:</Text>
        <ScrollView  showsHorizontalScrollIndicator={false} contentContainerStyle={styles.similiarColumn}>
          {similarCars.map((similarCar, index) => (
            <View key={index} style={styles.similarCarCard}>
              <Image source={{ uri: similarCar.image }} style={styles.similarCarImage} resizeMode='cover'/>
              <Text style={styles.similarCarModel}>{similarCar.model}</Text>
              <Text style={styles.similarCarBrand}>{similarCar.brand}</Text>
              <TouchableOpacity style={styles.detailButton} onPress={() => handleCarSelect(similarCar)}>
              <Text style={styles.detailText}>View Detail</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        </View>
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
    marginTop: 20
  },
  upperContainer: {
    padding: 15
  },
  galleryWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center'
  },
  carLogo: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  modelName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  moduleBrand: {
    fontSize: 18,
    color: '#9B9B9B'
  },
  featTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    marginBottom: 45
  },
  modelFeaturesTitle: {
    fontSize: 20,
    textAlign: 'center'
  },
  modelFeatures: {
    fontSize: 17,
    textAlign: 'center',
    marginVertical: 4,
    color: '#ECAE36'
  },
  featureBox: {
    flexDirection: 'row',
    justifyContent: 'space-around'
    
  },
  featureIcon: {
    width: 50,
    height: 50,
    aspectRatio: 1,
    position: 'absolute',
    top: -30,
    left: 65,
    borderRadius: 8,

  },
  featureCard: {
    flex: 1,
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center',
    position: 'relative',
    padding: 30,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1.8,
    margin: 5,
    backgroundColor: '#fff'
  },
  bottomContainer: {
    padding: 15
  },
  galleryTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 16,
    marginTop: 50
  },
  galleryImage: {
    width: 170,
    height: 150,
    margin: 8,
    aspectRatio: 1.8
    },
  similarCarsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  similarCarCard: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  similarCarImage: {
    width: 150,
    height: 150,
    margin: 10,
    aspectRatio: 2
  },
  similiarColumn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center'
  },
  similarCarModel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  similarCarBrand: {
    fontSize: 12,
    color: '#777',
  },
  detailButton: {
    marginTop: 30,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    borderRadius: 10,
    borderColor: '#101820'
  },
  detailText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Details;
