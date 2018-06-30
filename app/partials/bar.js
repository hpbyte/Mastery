import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';

export default Bar = () => {
    if(Platform.OS === 'android') {
        return(
            <StatusBar
                backgroundColor="#43A047"
                barStyle="light-content"
            />
        )
    } else {
        return null
    }
}