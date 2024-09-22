import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, SafeAreaView, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Compare({ route }) {
    const navigation = useNavigation();

    const [car1, setCar1] = useState(null);
    const [car2, setCar2] = useState(null);

    useEffect(() => {
        const { car, slot } = route.params || {};
        if (car && slot !== undefined) {
            if (slot === 1) {
                setCar1(car);
            } else if (slot === 2) {
                setCar2(car);
            }
        }
    }, [route.params]);

    const clear = (slot) => {
        if (slot ===1){
            setCar1(null);
        }
            else if( slot === 2){
                setCar2(null);
            }
    }

    const handleSelectCar = (slot) => {
        navigation.navigate('List', { slot }); // Pass slot num correctly
        console.log('Slot #' , slot);
    };

    const handleComparePress = () => {
        if (car1 && car2) {
            navigation.navigate('Both', { car1, car2 });
        } else {
            Alert.alert('Error', 'Please select two cars to compare.');
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Car Comparison Tool</Text>
                    <Text style={styles.headerText}>
                        Not decided on a new vehicle yet? 
                        You can compare 2 cars using our 
                        dynamic car comparison tool.
                    </Text>
                </View>

                <View style={styles.comparingBox}>
                    <TouchableOpacity style={styles.box} onPress={() => handleSelectCar(1)}>
                    {car1 && (<TouchableOpacity style={styles.removeButton} onPress={() => clear(1)}>
                                <Ionicons name="close-circle" size={24} color="#FF4D4D" />
                            </TouchableOpacity>
                        )}
                        <View style={styles.boxBorder}>
                            {car1 ? (
                                <Image source={{ uri: car1.image }} style={styles.carImage} />
                            ) : (
                                <Ionicons name="add" size={60} color="#ECAE36" />
                            )}
                        </View>
                        <Text style={styles.boxText}>{car1 ? car1.model : 'Select Car 1'}</Text>
                    </TouchableOpacity>
                    
                    
                    <TouchableOpacity style={styles.box} onPress={() => handleSelectCar(2)}>
                    {car2 && (<TouchableOpacity style={styles.removeButton} onPress={() => clear(2)}>
                                <Ionicons name="close-circle" size={24} color="#FF4D4D" />
                            </TouchableOpacity>
                        )}
                        <View style={styles.boxBorder}>
                        

                        {car2 ? (
                             <Image source={{ uri: car2.image }} style={styles.carImage} />
                        ) : (
                            <Ionicons name="add" size={60} color="#ECAE36" />
                        )}
                        </View>
                        <Text style={styles.boxText}>{car2 ? car2.model : 'Select Car 2'}</Text>                        
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={styles.compareButton} onPress={handleComparePress}>
                    <Text style={styles.compareText}>Compare Cars</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
      },
      container: {
        padding: 28,
        flexGrow: 1,
        justifyContent: 'flex-start',
      },
    header: {
        flexDirection: 'column'
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 30
    },
    headerText: {
        fontSize: 18,
        textAlign: 'center',
    },
    comparingBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: 60
    },
    box: {
        alignItems: 'center',
        marginHorizontal: 20,
        alignContent: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1.8,
        borderRadius: 8,
        width: 160,
        padding: 10,
        height: 160
    },
    boxBorder: {
        padding: 5,
        borderStyle: 'dotted',
        borderWidth: 1,
        borderColor: '#ECAE36',
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 10
    },
    boxText:{
        fontSize: 14
    },
    compareButton: {
        marginTop: 30,  
        backgroundColor: '#9B9B9B',
        padding: 20,
        borderRadius: 8
    },
    compareText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    carImage: {
        resizeMode: 'contain',
        width: '100%',
        height: '85%',
        padding: 30,
        aspectRatio: 1.5,
        borderRadius: 4,
        position: 'relative'
    },
    removeButton: {
        position: 'absolute',
        right: 0
    }

})