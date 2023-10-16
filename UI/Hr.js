import { View, Text } from 'react-native'
import React from 'react'

const Hr = ({color , height , width}) => {
    return (
        <View  style={{backgroundColor:color , minHeight:height, minWidth:width}}></View>
    )
}

export default Hr