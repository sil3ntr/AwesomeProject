import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherConditions } from '../utils/WeatherConditions';


const Weather = ({ weather, temperature, location,}) => {
    return (
        <View style = {[styles.weatherContainer,{ backgroundColor: weatherConditions[weather].color}]}>
            <View style = {styles.headerContainer}>
                <MaterialCommunityIcons
                    size={72}
                    name={weatherConditions[weather].icon}
                    color={'#fff'}
                    />
                    <Text style={styles.tempText}>{temperature + " \u2103"}</Text>
                    <Text style={styles.locationText}>{location}</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.title}>{weatherConditions[weather].title}</Text>
                    <Text style={styles.subtitle}>{weatherConditions[weather].subtitle}</Text>
                </View>
        </View>
    );

};

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    weather: PropTypes.string
};

const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1
    },
    headerContainer:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 40
    },
    tempText:{
        fontSize: 72,
        color: '#fff'

    },
    bodyContainer:{
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40

    },
    title:{
        fontSize: 60,
        color: '#fff'
    },
    subtitle: {
        fontSize: 24,
        color: '#fff'
    },locationText: {
        fontSize: 24,
        color: '#fff'
    }


});

export default Weather;