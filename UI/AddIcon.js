import { Button, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { AppContext } from '../AppState'
import Animated, { BounceIn, BounceOut } from 'react-native-reanimated'

const AddIcon = ({ toggle , section}) => {
    const { AppState , dispatch , UiDispatch  } = useContext(AppContext)
    const icons = AppState.theme.icons
    let iconStyle = {}
    let svgStyle = {}
    const textStyle = { color: icons.textColor }
    if (icons.fill) {
        iconStyle = {
            borderWidth: 1,
            borderColor: icons.textColor,
            backgroundColor: icons.color,
            borderStyle: AppState.iconsTypes[icons.type].borderStyle,
            borderRadius: AppState.iconsTypes[icons.type].borderRadius,
        }
        svgStyle = {
            color: '#ffffff'
        }
    }
    else{
        iconStyle= {
            borderWidth:1,
            borderColor: icons.color,
            borderStyle: AppState.iconsTypes[(icons.type-1)].borderStyle,
            borderRadius: AppState.iconsTypes[(icons.type-1)].borderRadius =="100%" ? 100 : AppState.iconsTypes[(icons.type-1)].borderRadius ,
        }
    }
    svgStyle = {
        color:'#ffffff'
    }
    return (
        <View className="p-5 pb-10">
            <TouchableOpacity style={iconStyle} title='lasd' onPress={() => UiDispatch({ toggle: toggle , section : section})} className="flex w-[50px] h-[50px] rounded-full justify-center items-center  p-4">
                <FontAwesomeIcon color={svgStyle.color} size={30} icon={['fas', 'plus']} />
            </TouchableOpacity>
        </View>
    )
}

export default React.memo(AddIcon)