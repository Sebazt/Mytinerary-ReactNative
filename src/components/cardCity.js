import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux'
import citiesActions from '../../redux/actions/citiesAction'
import Icon from 'react-native-vector-icons/FontAwesome';

function CardCity(props) {
  //const [data, filterCity] = React.useState("");

  useEffect(() => {
    props.fetchearCities()
  }, [])

  function filterCity(e) {
    props.filtrarCities(props.cities, e)

  }

  return (
    <View>
      <View style={{ display: "flex", alignItems: 'center', direction: 'row', position: 'relative' }}>

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderColor: "#000", borderWidth: 1.5, padding: 10, width: '80%', alignSelf: 'center' }}
          underlineColorAndroid="transparent"
          placeholder="Search a city"
          placeholderTextColor="#17F5F9"
          textAlign='center'          
          borderRadius={20}
          padding={10}
          fontSize={20}
          color="#000"
          marginBottom={30}
          onChangeText={(text) => { filterCity(text) }}

        />
        <Icon
          name='search'
          color='#000'
          size={26}
          style={{ width: 30, position: 'absolute', left: '80%', bottom:38 }}
        />
        {/* <Text>Welcome to {data}</Text> */}
      </View>
      
      {props.filterCities?.map((city, index) =>
        <TouchableOpacity key={index} style={styles.containerCity}
          onPress={() => props.navigation.navigate('City', {
            id: place._id
          })}>

          <Image source={{ uri: city.image }} style={styles.imagecity} />
          <Text style={styles.textCity}>{city.name}</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}


const mapDispatchToProps = {
  fetchearCities: citiesActions.fetchearCities,
  filtrarCities: citiesActions.filtrarCities
}

const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
    filterCities: state.citiesReducer.filterCities
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardCity);

const styles = StyleSheet.create({
  containerCity: {
    position: "relative",
    width: "80%",
    height: 320,
    marginBottom: 30,
    alignSelf: 'center',
    borderRadius: 20,
    marginVertical: 15
  },
  imagecity: {
    width: "100%",
    height: "100%",
    borderRadius: 20,

  },
  textCity: {
    width: "80%",
    alignSelf: 'center',
    color: "#17F5F9",
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: 'serif',
    backgroundColor: "#000000f0",
    zIndex: 10,
    position: "absolute",
    bottom: "90%",
    borderRadius: 10,
  }
});