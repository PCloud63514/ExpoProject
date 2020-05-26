import React from "react"
import PropTypes from "prop-types"
import {View, Text, StyleSheet, StatusBar } from "react-native"
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm : {
        iconName:"weather-tornado",
        gradient:["#283048", "#859398"],
        title:"Thunderstorm",
        subtitle:"plz don't go outsize."
    },
    Drizzle : {
        iconName:"weather-rainy",
        gradient:["#003973", "#E5E5BE"],
        title:"Drizzle",
        subtitle:"Take your umbrella with you."
    },
    Rain : {
        iconName:"weather-rainy",
        gradient:["#000046", "#1CB5E0"],
        title:"Rain",
        subtitle:"Take your umbrella with you."
    },
    Snow : {
        iconName:"weather-snowy",
        gradient:["#076585", "#fff"],
        title:"Snow",
        subtitle:"Take a rest in a warm indoor space."
    },
    Atmosphere : {
        iconName:"weather-sunny",
        gradient:["#FFC837", "#FF8008"],
        title:"Atmosphere",
        subtitle:"It's sunny! It's a nice day for a walk."
    },
    Clear : {
        iconName:"weather-sunny",
        gradient:["#1FA2FF", "#12D8FA", "#A6FFCB"],
        title:"Clear",
        subtitle:"It's sunny! It's a nice day for a walk."
    },
    Clouds : {
        iconName:"weather-cloudy",
        gradient:["#4B79A1", "#283E51"],
        title:"Clouds",
        subtitle:"It won't be hot."
    },
    Mist : {
        iconName:"weather-fog",
        gradient:["#757F9A", "#D7DDE8"],
        title:"Mist",
        subtitle:"Be careful when you drive."
    },
    Dust : {
        iconName:"weather-hail-",
        gradient:["#544a7d", "#ffd452"],
        title:"Dust",
        subtitle:"Just don't go outsize."
    }, 
    Haze: {
        iconName:"weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title:"Haze",
        subtitle:"Just don't go outsize."
    }
}

export default function Weather({temp, condition}) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color='white'/>
                <Text style={styles.temp}>
                    {temp}℃
                </Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.prototype = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize:36,
        color:"white"
    },
    halfContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title:{
        fontSize: 54,
        fontWeight: "300",
        marginBottom: 20,
        color:"white"
    },
    subtitle:{
        fontSize: 24,
        fontWeight: "600",
        color:"white"
    },
    textContainer:{
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});