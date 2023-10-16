import { View, Text, Image } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faBell} from '@fortawesome/free-solid-svg-icons/faBell'
import SwiftTapLogo from './../assets/SVGS/SwiftTap.svg'
import React from 'react'
import Logo from './Logo'

const HeaderTop = () => {
    return (
        <View className="relative flex flex-row p-3 justify-between items-center">
            <SwiftTapLogo width={91} height={21} />
            <FontAwesomeIcon size={25} color='#00EBBD' icon={faBell} />


        </View>
    )
}

export default HeaderTop