import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react'
import { AppContext } from '../AppState'
import Animated, { BounceIn } from 'react-native-reanimated'

const Icon = ({ item }) => {
    const { AppState, dispatch, UiState, UiDispatch } = useContext(AppContext)
    const icons = AppState.theme.icons
    let iconStyle = {}
    let svgStyle = {}
    const textStyle = {
        color: icons.textColor,
        fontFamily: AppState.theme.textFont
    }
    if (icons.fill) {
        iconStyle = {
            borderWidth: 1,
            borderColor: icons.color,
            backgroundColor: icons.color,
            borderStyle: AppState.iconsTypes[(icons.type - 1)].borderStyle,
            borderRadius: AppState.iconsTypes[(icons.type - 1)].borderRadius,
        }
    }
    else {
        iconStyle = {
            borderWidth: 1,
            borderColor: icons.color,
            borderStyle: AppState.iconsTypes[(icons.type - 1)].borderStyle,
            borderRadius: AppState.iconsTypes[(icons.type - 1)].borderRadius == "100%" ? 100 : AppState.iconsTypes[(icons.type - 1)].borderRadius,
        }
    }

    svgStyle = {
        color: '#ffffff'
    }
    return (
        <View className=" relative flex w-[100px] h-[100px] justify-between items-center py-2 z-10 ">
            {
                UiState.pages.editable &&
                <Animated.View className='absolute top-5 right-5 z-20' entering={BounceIn} >
                    <TouchableOpacity style={{ zIndex: 20 }} onPressOut={() => dispatch({ type: 'deleteIcon', id: item.id, section: item.section })} className='min-w-[22px] min-h-[22px] rounded-full flex justify-center items-center bg-[#FF4656] '>
                        <FontAwesomeIcon color='#ffffff' size={10} icon={['fas', 'minus']} />
                    </TouchableOpacity>
                </Animated.View>
            }
            <TouchableOpacity style={iconStyle} disabled={UiState.pages.editable} className="w-[50px] h-[50px] flex justify-center items-center z-10 ">
                <FontAwesomeIcon color={svgStyle.color} size={30} icon={item.icon} />
            </TouchableOpacity>
            <Text style={textStyle} className="pt-4 "> {item.name}</Text>
        </View>
    )
}

export default React.memo(Icon)