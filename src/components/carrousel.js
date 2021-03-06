import React from 'react';
import { Text, Dimensions, StyleSheet, ImageBackground, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Cities from './dates';

const Carr = () => (
  <View style={styles.container}>   
    <SwiperFlatList autoplay autoplayDelay={4} autoplayLoop index={2}>
      {Cities.map((city) => (
        <ImageBackground key={city.id} source={{ uri: city?.image }} style={styles.imagedos} >
          <View  style={[styles.child,]}>
            <Text style={styles.text}>{city?.name}</Text>
          </View>
        </ImageBackground>
      ))}
    </SwiperFlatList>
    
  </View>
);

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400,
    width: "100%",
  },
  child: { width, justifyContent: "center" },
  text: { textAlign: "center", fontSize: 30, backgroundColor: "#17F5F970", fontFamily:'serif', fontWeight:'bold' },
  imagedos: {
    height: "100%",
    fontFamily: 'serif',
    borderRadius:20,
  },
});

export default Carr;
