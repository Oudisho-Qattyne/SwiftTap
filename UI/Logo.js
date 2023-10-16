import { View, Text } from 'react-native'
import React from 'react'
import { SvgUri } from 'react-native-svg'
import SwiftTapLogo from './../assets/SVGS/SwiftTap.svg'
const Logo = ({width , height}) => {
    return (
        <View className="justify-center items-center pb-6">
            <SwiftTapLogo />
        </View>
    )
}

export default Logo