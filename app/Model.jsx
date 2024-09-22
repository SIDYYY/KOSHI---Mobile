import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { carModels } from '../components/CarLISTS'; 
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CarModel = ({ route }) => {
  const { brand, slot } = route?.params || {};
  const models = carModels[brand] || [];
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  const getSearch = (value) => {
    setSearch(value);
  };

  const handleCarSelect = (model,brand, slot) => {
    navigation.navigate('Variant', { model,brand, slot }); // Pass model, brand, and slot
  };

  const handleChangeBrand = (slot) => {
    navigation.navigate('List', { slot }); // Navigate back to brand selection
  };

  const filteredModels = models.filter(item =>
    item.model.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
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
          <Text style={styles.header}>Select A {brand} Car Model</Text>
          <TouchableOpacity style={styles.changeBrandButton} onPress={() => handleChangeBrand(slot)}>
            <View style={styles.rowChange}>
              <Text style={styles.changeBrandText}>Change Model</Text>
              <Ionicons name="swap-horizontal" size={20} color="#ECAE36" />
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {filteredModels.map((item) => (
            <TouchableOpacity
              key={item.model}
              style={styles.item}
              onPress={() => handleCarSelect(item,brand, slot)} // Pass model, brand, and slot to Variant page
            >
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.modelInfo}>
                <Text style={styles.text}>{item.model} ({item.year})</Text>
                <Text style={styles.priceText}>Price:</Text>
                <Text style={styles.displayPrice}>{item.price}</Text>
                <View style={styles.rowFoot}>
                  <Text style={styles.variants}>7 Variants & Specifications</Text>
                  <Text style={styles.type}>Type: {item.type}</Text>
                </View>
              </View>
            </TouchableOpacity>
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
  iconContainer: {
    paddingRight: 10,
    justifyContent: 'flex-end',
  },
  clearContainer: {
    paddingLeft: 10
  },
  rowChange: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  rowHead: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  changeBrandText: {
    color: '#ECAE36',
    marginRight: 5
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    width: 180
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  item: { 
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
  modelInfo: {
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
    width: 100,
    height: 100,
    marginRight: 20,
    borderRadius: 8,
    aspectRatio: 1.7,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    width: 200,
  },
});

export default CarModel;
