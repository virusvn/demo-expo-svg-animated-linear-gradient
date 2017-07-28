import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Text, View, StyleSheet, Animated, ScrollView} from 'react-native';

import Expo, { Svg } from 'expo';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'

let Facebook = () => {
    return (
        <SvgAnimatedLinearGradient
            primaryColor="#e8f7ff"
            secondaryColor="#4dadf7"
            height={140}
            x1="0"
            y1="0"
            x2="100%"
            y2="100%"
        >
            <Svg.Rect x="0" y="0" rx="5" ry="5" width="70" height="70"/>
            <Svg.Rect x="80" y="17" rx="4" ry="4" width="300" height="13"/>
            <Svg.Rect x="80" y="40" rx="3" ry="3" width="250" height="10"/>
            <Svg.Rect x="0" y="80" rx="3" ry="3" width="350" height="10"/>
            <Svg.Rect x="0" y="100" rx="3" ry="3" width="200" height="10"/>
            <Svg.Rect x="0" y="120" rx="3" ry="3" width="360" height="10"/>

        </SvgAnimatedLinearGradient>
    )
}
let Instagram = () => {
    return (
        <SvgAnimatedLinearGradient height={300}
            x1="100%"
            y1="0"
            x2="0"
            y2="0">
            <Svg.Circle cx="30" cy="30" r="30"/>
            <Svg.Rect x="75" y="13" rx="4" ry="4" width="100" height="13"/>
            <Svg.Rect x="75" y="37" rx="4" ry="4" width="50" height="8"/>
            <Svg.Rect x="0" y="70" rx="5" ry="5" width="400" height="200"/>
        </SvgAnimatedLinearGradient>
    )
}
let Code = () => {
    return (
        <SvgAnimatedLinearGradient
            primaryColor="#fff0f6"
            secondaryColor="#f783ac"
            height={80}
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
        >
            <Svg.Rect x="0" y="0" rx="3" ry="3" width="70" height="10"/>
            <Svg.Rect x="80" y="0" rx="3" ry="3" width="100" height="10"/>
            <Svg.Rect x="190" y="0" rx="3" ry="3" width="10" height="10"/>
            <Svg.Rect x="15" y="20" rx="3" ry="3" width="130" height="10"/>
            <Svg.Rect x="155" y="20" rx="3" ry="3" width="130" height="10"/>
            <Svg.Rect x="15" y="40" rx="3" ry="3" width="90" height="10"/>
            <Svg.Rect x="115" y="40" rx="3" ry="3" width="60" height="10"/>
            <Svg.Rect x="185" y="40" rx="3" ry="3" width="60" height="10"/>
            <Svg.Rect x="0" y="60" rx="3" ry="3" width="30" height="10"/>
        </SvgAnimatedLinearGradient>
    )
}
let App = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
            <Facebook/>
            <Code/>
            <Instagram />
             <SvgAnimatedLinearGradient
            primaryColor="#e8f7ff"
            secondaryColor="#4dadf7"
            height={140}
        >
            <Svg.Rect x="0" y="0" rx="5" ry="5" width="70" height="70"/>
            <Svg.Rect x="80" y="17" rx="4" ry="4" width="300" height="13"/>
            <Svg.Rect x="80" y="40" rx="3" ry="3" width="250" height="10"/>
            <Svg.Rect x="0" y="80" rx="3" ry="3" width="350" height="10"/>
            <Svg.Rect x="0" y="100" rx="3" ry="3" width="200" height="10"/>
            <Svg.Rect x="0" y="120" rx="3" ry="3" width="360" height="10"/>

        </SvgAnimatedLinearGradient>
            </ScrollView>
        </View>    
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});
Expo.registerRootComponent(App);
