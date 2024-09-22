import React, {useRef, useEffect}from 'react';
import { StyleSheet,View,SafeAreaView,ScrollView,Text,Animated, Image } from 'react-native';

const reasons = [
    { 
      icon: 'https://cdn-icons-png.freepik.com/512/40/40426.png', 
      text: 'Expert Advice', 
      description: 'Our knowledgeable team provides expert advice to help you make informed decisions. We use our extensive industry experience to guide you through the car-buying process with confidence.' 
    },
    { 
      icon: 'https://cdn-icons-png.freepik.com/512/1/1437.png', 
      text: 'Transparent Pricing', 
      description: 'We offer clear and honest pricing with no hidden fees. Our transparent pricing ensures that you understand exactly what you’re paying for, making your purchasing experience straightforward and stress-free.' 
    },
    { 
      icon: 'https://cdn-icons-png.flaticon.com/512/310/310831.png', 
      text: 'Quality Assurance', 
      description: 'Each vehicle undergoes a rigorous quality check to ensure it meets our high standards. We are committed to providing vehicles that are reliable and of the highest quality.' 
    }
  ];

export default function Why(){

    const slideAnimLeft = useRef(new Animated.Value(-500)).current; 
    const slideAnimRight = useRef(new Animated.Value(500)).current; 
    
    useEffect(() => {
        Animated.timing(slideAnimLeft, {
          toValue: 0, 
          duration: 1000,
          useNativeDriver: true,
        }).start();
      }, []);
    
      useEffect(() => {
        Animated.timing(slideAnimRight, {
          toValue: 0, 
          duration: 1000,
          useNativeDriver: true,
        }).start();
      }, []);
return(
    <View>
    <Text style={styles.sectionTitle}>Why trust KOSHI? </Text>
    <ScrollView horizontal contentContainerStyle={styles.horizontalReasonContainer}>
      <View style={styles.reasonSection}>
        {reasons.map((reason, index) => (
          <View key={index} style={styles.reasonItem}>
            <Image source={{ uri: reason.icon }} style={styles.reasonIcon} />
            <View style={styles.reasonTextContainer}>
            <Animated.Text style={[styles.sectionText, {transform: [{translateX: slideAnimLeft}]}]}>{reason.text}</Animated.Text>
            <Animated.Text style={[styles.sectionDescription, {transform: [{translateX: slideAnimRight}]}]}>{reason.description}</Animated.Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>

      {/* Contact Information Section */}
        <Text style={styles.sectionTitleCTC}>Contact Us</Text>
      <View style={styles.contactSection}>
        <Text style={styles.contactInfo}>Email: contact@koshi.com</Text>
        <Text style={styles.contactInfo}>Phone: +1 234 567 890</Text>
        <Text style={styles.contactInfo}>Address: 1234 Car Street, Auto City, AC 56789</Text>
      </View>
    </View>
)
}

const styles = StyleSheet.create({
      reasonSection: {
        padding: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      sectionTitle: {
        marginTop: 35,
        paddingLeft: 5,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'left'
      },
      sectionText: {
        fontSize: 20,
        textDecorationLine: 'underline',
        marginVertical: 15,
        color: '#000',
        lineHeight: 24,
      },
      sectionTitleCTC: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginVertical: 20,
        textAlign: 'left'
      },
      reasonItem: {
        backgroundColor: '#fff',
        padding: 30,
        marginBottom: 15,
        width: 300,
        marginHorizontal: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1.8,
        borderRadius: 8
      },
      reasonIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
        marginBottom: 15,
        borderRadius: 50
      },
      reasonTextContainer: {
        flex: 1,
      },
      sectionDescription: {
        fontSize: 14,
        color: '#000',
        lineHeight: 20,
      },
      contactInfo: {
        fontSize: 16,
        color: '#000',
        marginBottom: 10,
      },
      contactSection: {
        padding: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
        backgroundColor: '#fff'
      },
      horizontalReasonContainer: {
        marginVertical: 10,
        flexWrap: 'wrap',
        flexDirection: 'row'
      }
});