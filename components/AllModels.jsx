import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { carModels } from '../components/CarLISTS'; // Adjust import based on your file structure

const CarModel = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  // Flatten the carModels object to a single array
  const allCarModels = Object.values(carModels).flat();

  // Filter car models based on the search input
  const filteredCarModels = allCarModels.filter((carModel) =>
    carModel.model.toLowerCase().includes(search.toLowerCase())
  );

  const getSearch = (value) => {
    setSearch(value);
  };

  const handleCarSelect = (carModel) => {
    navigation.navigate('Details', { carModel });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>

        {/*search bar */}
        <View style={styles.searchContainer}>
          <SearchBar
            placeholder="Search"
            onChangeText={getSearch}
            value={search}
            lightTheme
            round
            containerStyle={styles.searchBarContainer}
            inputContainerStyle={styles.searchBarInputContainer}
            inputStyle={styles.searchBarInput}
          />
        </View>

        <View style={styles.rowHead}>
          <Text style={styles.header}>Car Models</Text>
        </View>

        {/*Car model mapping */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {filteredCarModels.length > 0 ? filteredCarModels.map((carModel) => (
            <TouchableOpacity
              key={carModel.id} // unique key
              style={styles.carModel}
              onPress={() => handleCarSelect(carModel)}
            >
              <Image source={{ uri: carModel.image }} style={styles.image} />
              <View style={styles.carModelInfo}>
                <Text style={styles.text}>{carModel.model} ({carModel.year})</Text>
                <Text style={styles.priceText}>Price:</Text>
                <Text style={styles.displayPrice}>{carModel.price}</Text>
                <View style={styles.rowFoot}>
                  <Text style={styles.variants}>{carModel.variants.length} Variants</Text>
                  <Text style={styles.type}>Type: {carModel.type}</Text>
                </View>
                <TouchableOpacity style={styles.detailButton} onPress={() => handleCarSelect(carModel)}>
                              <Text style={styles.detailText}>View Detail</Text>
                            </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )) : (
            <Text>No car models available</Text>
          )}
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
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
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
  rowHead: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  carModel: { 
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    padding: 10,
  },
  carModelInfo: {
    marginVertical: 10,
    flex: 1
  },
  priceText: {
    marginTop: 10,
    fontSize: 15,
    color: '#9B9B9B',
  },
  displayPrice: {
    color: '#3E9C35',
    fontSize: 17,
  },
  rowFoot: {
    flexDirection: 'column',
    width: '100%',
  },
  variants: {
    marginTop: 10,
    color: '#9B9B9B',
    fontSize: 15,
  },
  type: {
    color: '#ECAE36',
    fontSize: 15.5,
  },
  image: {
    width: '35%',
    marginRight: 20,
    borderRadius: 8,
    aspectRatio: 1.5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    width: 200,
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

export default CarModel;
