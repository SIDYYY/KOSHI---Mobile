import React, { useState, useEffect } from 'react';
import PopularCar from '../components/popularCar'
import PopularMaker from '../components/popularMaker'
import Why from '../components/WhyKOSHI'
import { StyleSheet, Text, SafeAreaView, View, ImageBackground, ScrollView, Animated, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import * as Location from 'expo-location';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('');
  const [locationError, setLocationError] = useState(null);

  const getSearch = (value) => {
    setSearch(value);
  };

  const fetchLocation = async () => {
    try {
      // Request permission
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocationError('Location permission not granted');
        return;
      }

      // Get location
      let { coords } = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      setLocation(coords);

      // Reverse geocoding
      let [locationData] = await Location.reverseGeocodeAsync({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });

      // Format address
      if (locationData) {
        const { street, city, region, country } = locationData;
        setAddress(`${street}, ${city}, ${region}, ${country}`);
      } else {
        setAddress('Address not available');
      }
    } catch (error) {
      setLocationError(error.message);
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Pin Location Section */}
        <View style={styles.locationContainer}>
          <Image style={styles.pinLocation} source={{uri: 'https://cdn-icons-png.flaticon.com/512/10831/10831906.png'}} />
          <View>
            <View style={styles.locationInfoHead}>
              <Text style={styles.locationInfoHeadText}>Your Current Location</Text>
            </View>
            <View style={styles.locationInfo}>
              {address ? (
                <Text style={styles.locationInfoText}>{address}</Text>
              ) : locationError ? (
                <Text style={styles.locationInfoText}>{locationError}</Text>
              ) : (
                <Text style={styles.locationInfoText}>Fetching location...</Text>
              )}
            </View>
          </View>
        </View>

        {/* Banner Section */}
        <View style={styles.banner}>
          <ImageBackground
            source={require('../assets/images/welcomeBanner.jpg')}
            style={styles.imageBackground}
            resizeMode="cover"
          >
            {/* Centered Content */}
            <View style={styles.centeredContent}>
              <Animated.Text style={styles.welcome}>Welcome, User</Animated.Text>
              <Text style={styles.sectionTitleExplore}>Explore the app, and decide</Text>
            </View>
          </ImageBackground>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <SearchBar
            placeholder="Search"
            onChangeText={getSearch}
            value={search}
            lightTheme
            round
            searchIcon={{ size: 24, containerStyle: styles.iconContainer }}
            clearIcon={{ size: 24, containerStyle: styles.clearContainer  }}
            containerStyle={styles.searchBarContainer}
            inputContainerStyle={styles.searchBarInputContainer}
            inputStyle={styles.searchBarInput}
          />
        </View>
        <View>
        <PopularCar/>
         <PopularMaker/>
         <Why/> 
        </View>

      </ScrollView>
      
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 15,
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'transparent',
  },
  pinLocation: {
    width: 25,
    height: 35,
    marginRight: 10,
  },
  locationInfoHead: {
    marginBottom: 5,
    textAlign: 'left',
  },
  locationInfoHeadText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
  },
  locationInfo: {
    marginBottom: 10,
  },
  locationInfoText: {
    fontSize: 14,
    color: '#666',
  },
  banner: {

    height: 135,
    width: '100%'
  },
  imageBackground: {
    flex: 1,
    margin:0, 
    justifyContent: 'center',
    alignItems: 'start',
  },
  centeredContent: {
    alignItems: 'start',
    padding: 35,
  },
  welcome: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#9B9B9B',
    width: 110,
  },
  sectionTitleExplore: {
    fontSize: 23,
    color: '#fff',
    marginTop: 10,
    width: 170,
  },
  searchContainer: {
    marginTop: 20,
    marginHorizontal: 25,
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    padding: 0
  },
  searchBarInputContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderBottomWidth: 3,
    borderColor: '#000',
    borderRadius: 30,
    paddingRight: 10,
    flexDirection: 'row-reverse'
  },
  searchBarInput: {
    backgroundColor: '#fff',
  },
  iconContainer: {
    paddingRight: 10,
    justifyContent: 'flex-end',
  },
  clearContainer: {
    paddingLeft: 10
  }
});
