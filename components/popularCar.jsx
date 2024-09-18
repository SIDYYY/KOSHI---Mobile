import React, {useState} from 'react';
import { StyleSheet,Text,View,SafeAreaView, ScrollView, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function Popular(){

    const [activeFrame, setActiveFrame] = useState('SUV');
    const navigation = useNavigation(); 

  // Function to handle frame selection
  const handleFrameSelect = (frame) => {
    setActiveFrame(frame);
  };

    const cars = [
        {
          id: '1',
          model: 'Ford Mustang 2024',
          year: 2024,
          type: 'Coupe',
          price: 'Php 3,800,000',
          image: 'https://autotijd.be/images/ford/2024/mustang/nieuw/ford-mustang-2024-01.jpg',
          logo: 'https://logos-world.net/wp-content/uploads/2021/05/Ford-Logo.png',
          variants: [
            { id: '1a', variant: 'Base', price: 'Php 3,800,000' },
            { id: '1b', variant: 'GT', price: 'Php 4,200,000' },
            { id: '1c', variant: 'Mach 1', price: 'Php 5,000,000' }
          ],
          gallery: [
            'https://autotijd.be/images/ford/2024/mustang/nieuw/ford-mustang-2024-01.jpg',
            'https://example.com/mustang-02.jpg',
            'https://example.com/mustang-03.jpg'
          ],
          features: [
            'Powerful V8 engine',
            'Advanced safety features',
            'Premium interior with leather seats',
            'High-performance braking system'
          ]
        },
        {
            id: '2',
            model: 'Nissan Altima 2024',
            year: 2024,
            type: 'Sedan',
            price: 'Php 2,200,000',
            image: 'https://di-uploads-development.dealerinspire.com/hanovernissan/uploads/2019/10/2019-Altima.png',
            logo: 'https://i3.wp.com/di-uploads-pod18.dealerinspire.com/walsernissanburnsville/uploads/2019/07/maxresdefault.jpg',
            variants: [
              { id: '1a', variant: 'S', price: 'Php 2,200,000' },
              { id: '1b', variant: 'SV', price: 'Php 2,500,000' },
              { id: '1c', variant: 'SR', price: 'Php 2,800,000' }
            ]
        },
        {
            id: '3',
            model: 'Mitsubishi Outlander 2024',
            year: 2024,
            type: 'SUV',
            price: 'Php 2,800,000',
            image: 'https://images.dealer.com/ddc/vehicles/2024/Mitsubishi/Outlander%20Sport/SUV/color/Oak%20Brown%20Metallic-C22-101,82,74-640-en_US.jpg',
            logo: 'https://logos-world.net/wp-content/uploads/2021/09/Mitsubishi-Logo.png',
            variants: [
              { id: '1a',variant: 'ES', price: 'Php 2,800,000' },
              { id: '1b',variant: 'LE', price: 'Php 3,100,000' },
              { id: '1c',variant: 'SEL', price: 'Php 3,500,000' }
            ]
        },
        {
            id: '4',
            model: 'BMW 3 Series 2024',
            year: 2024,
            type: 'Sedan',
            price: 'Php 3,600,000',
            image: 'https://mediapool.bmwgroup.com/cache/P9/201809/P90323736/P90323736-the-all-new-bmw-3-series-sedan-luxury-line-model-10-2018-599px.jpg',
            logo: 'https://blog.logomaster.ai/hs-fs/hubfs/bmw-logo-1963.jpg?width=672&height=454&name=bmw-logo-1963.jpg',
            variants: [
              { id: '1a',variant: '320i', price: 'Php 3,600,000' },
              { id: '1b',variant: '330i', price: 'Php 4,000,000' },
              { id: '1c',variant: 'M340i', price: 'Php 5,000,000' }
            ]
        },
        {
            id: '5',
            model: 'Toyota Camry 2024',
            year: 2024,
            type: 'Sedan',
            price: 'Php 1,800,000',
            image: 'https://images.dealer.com/ddc/vehicles/2025/Toyota/Camry/Sedan/trim_LE_4b85cc/color/Midnight%20Black%20Metallic-218-105%2C82%2C70-640-en_US.jpg',
            logo: 'https://garethdavidstudio.com/blog/wp-content/uploads/2020/10/toyota_1989-1024x576.jpg',
            variants: [
              { id: "1a",variant: 'LE', price: 'Php 1,800,000' },
              { id: "1b",variant: 'SE', price: 'Php 2,000,000' },
              { id: "1c",variant: 'XSE', price: 'Php 2,300,000' }
            ]
        },
        {
            id: "6",
            model: "Chevrolet Malibu 2024",
            year: 2024,
            type: "Sedan",
            price: "Php 1,700,000",
            image: "https://inv.assets.ansira.net/RTT/Chevrolet/2024/6057663/default/ext_GXP_deg01.jpg",
            logo: 'https://1000logos.net/wp-content/uploads/2019/12/Chevrolet-logo.png',
            variants: [
              {
                id: "1a",
                variant: "LT",
                price: "Php 1,800,000"
              },
              {
                id: "1b",
                variant: "Premier",
                price: "Php 2,000,000"
              }
            ]
        },
      ];
      const handleCarSelect = (car) => {
        navigation.navigate('Details', { car });
      };
      
    return(
          <View style={styles.container}>
                <View style={styles.headContent}>
                    <Text style={styles.Popular}>Popular New Cars</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('MoreCar')}>
                    <Text style={styles.seeMore}>See More
                        <Text style={styles.boldArrow}> {'>'} </Text> 
                    </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal contentContainerStyle={styles.horizontalFrameContainer}>
      <View style={styles.frameContainer}>
        {/* Frames */}
        {['SUV', 'Sedan', 'Hatchback', 'Convertible', 'Crossover', 'Coupe'].map(frame => (
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
    </ScrollView>
                <ScrollView horizontal contentContainerStyle={styles.horizontalCarContainer}>
                <View style={styles.carList}>
                        {cars.map(car => (
                        <View key={car.id} style={styles.carCard}>
                            <Image source={{ uri: car.image }} style={styles.carImage} resizeMode='cover'/>
                            <View style={styles.carInfo}>
                            <Text style={styles.carName}>{car.model}</Text>
                            <Image source={{uri: car.logo}} style={styles.carLogo}/>
                            </View>
                            <Text style={styles.carVariant}>{car.variants.length} Variants & Specifications</Text>

                            <TouchableOpacity style={styles.detailButton} onPress={() => handleCarSelect(car)}>
                              <Text style={styles.detailText}>View Detail</Text>
                            </TouchableOpacity>

                        </View>
                        ))}
                    </View>
                </ScrollView>
                </View>
    );
}

const styles = StyleSheet.create({
      container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        padding: 5
      },
      headContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 45,
        width: '100%'
      },
      Popular: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#101820'
      },
      seeMore: {
        marginTop: 5,
        fontSize: 14,
        color: '#ECAE36'
      },
      boldArrow: {
        fontWeight: 'bold'
      },
      horizontalCarContainer: {
        marginVertical: 20
    },
    frameContainer: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'

      },
      frame: {
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
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
    horizontalFrameContainer: {
        marginVertical: 5
    },
      carList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      carCard: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1.8,
        paddingBottom: 20,
        paddingHorizontal: 20,
        aspectRatio: 1,
        marginVertical: 20,
      },
      carImage: {
        width: 300,
        height: 140,
        aspectRatio:2.14,
        marginBottom: 10,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
      },
      carInfo: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginTop: 10,
        width: '100%',
        justifyContent: 'space-between',
        textAlign: 'center'
      },
      carName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
      },
      carLogo: {
        width: 50,
        height: 16,
        alignSelf: 'flex-end'
      },
      carVariant: {
        fontSize: 12,
        color: '#9B9B9B',
        marginVertical: 5,
        width: '100%'
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
