import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

export default function Popular({ route }) {
  const [activeFrame, setActiveFrame] = useState('Car Makes');
  const navigation = useNavigation(); // Use the hook to get navigation

  const handleFrameSelect = (frame) => {
    setActiveFrame(frame);
  };

  const logos = [
    {
      id: '1',
      name: 'Ford',
      logo: 'https://logos-world.net/wp-content/uploads/2021/05/Ford-Logo.png',
    },
    {
      id: '2',
      name: 'Nissan',
      logo: 'https://i3.wp.com/di-uploads-pod18.dealerinspire.com/walsernissanburnsville/uploads/2019/07/maxresdefault.jpg',
    },
    {
      id: '3',
      name: 'Mitsubishi',
      logo: 'https://logos-world.net/wp-content/uploads/2021/09/Mitsubishi-Logo.png',
    },
    {
      id: '4',
      name: 'BMW',
      logo: 'https://blog.logomaster.ai/hs-fs/hubfs/bmw-logo-1963.jpg?width=672&height=454&name=bmw-logo-1963.jpg',
    },
    {
      id: '5',
      name: 'Toyota',
      logo: 'https://garethdavidstudio.com/blog/wp-content/uploads/2020/10/toyota_1989-1024x576.jpg',
    },
    {
      id: '6',
      name: 'Chevrolet',
      logo: 'https://1000logos.net/wp-content/uploads/2019/12/Chevrolet-logo.png',
    },
  ];
  
  const handleChangeModel = (Maker) => {
    navigation.navigate('Model', { brand: Maker.name }); 
  };
  

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headContent}>
          <Text style={styles.Popular}>Popular Car Makes & Body Type</Text>
          <View style={styles.rowCarMaker}>
            <View style={styles.frameContainer}>
              {['Car Makes', 'Body Type'].map(frame => (
                <TouchableOpacity
                  key={frame}
                  style={[
                    styles.frame,
                    activeFrame === frame ? styles.activeFrame : styles.inactiveFrame
                  ]}
                  onPress={() => handleFrameSelect(frame)}
                >
                  <Text style={activeFrame === frame ? styles.activeFrameText : styles.inactiveFrameText}>
                    {frame}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
              {/* <Text style={styles.seeMore}>
                See More
                <Text style={styles.boldArrow}> {'>'} </Text>
              </Text> */}
          </View>
        </View>

        <ScrollView horizontal contentContainerStyle={styles.horizontalCarContainer}>
          <View style={styles.makerList}>
            {logos.map(logo => (
              <TouchableOpacity
                key={logo.id}
                style={styles.logoCard}
                onPress={() => handleChangeModel(logo)} 
              >
                <Image source={{ uri: logo.logo }} style={styles.carLogo} resizeMode='contain' />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
  );
}


const styles = StyleSheet.create({
      container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        padding: 5
      },
      rowCarMaker: {
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      choice: {
        padding: 15,
        color: '#9B9B9B'
      },
      Popular: {
        fontSize: 24,
        width: 220,
        fontWeight: 'bold' 
      },
      seeMore: {
        marginTop: 30,
        textAlign: 'right',
        fontSize: 14,
        color: '#ECAE36'
      },
      boldArrow: {
        fontWeight: 'bold'
      },
      headContent: {
        justifyContent: 'space-around',
        width: '100%'
      },
      horizontalCarContainer: {
        marginVertical: 20
      },
      frameContainer: {
        marginTop: 20,
        marginRight: 170,
        flexDirection: 'row',
        alignItems: 'start',
      },
      frame: {
        padding: 10,
        borderRadius: 5,
        marginRight: 10
      },
      activeFrame: {
        backgroundColor: '#000',
        borderColor: '#0056b3',
      },
      inactiveFrame: {
        backgroundColor: '#E0E0E0',
        borderColor: '#B0B0B0',
      },
      activeFrameText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
      },
      inactiveFrameText: {
        color: '#000000',
      },
      makerList: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
      },
      logoCard: {
        width: 150,
        height: 150,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1.8,
      },
      carLogo: {
        aspectRatio: 1
      }
      
})