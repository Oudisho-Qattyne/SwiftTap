import { View, Text, TouchableOpacity , Image} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { icon, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react'
import { AppContext } from '../AppState'
import Animated, { BounceIn } from 'react-native-reanimated'
import { iconName } from '@fortawesome/free-solid-svg-icons/faBell'

const Icon = ({ item }) => {
    const { AppState, dispatch, UiState, UiDispatch } = useContext(AppContext)
    const icons = AppState.profile.theme.icons
    let iconStyle = {}
    let svgStyle = {}
    const textStyle = {
        color: icons.textColor,
        fontFamily: AppState.profile.theme.textFont
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
    const iconContent = item.contents.filter(content => content.contentType == 'icon')
    let finalIcon = null 
    if(iconContent.length > 0){
        const iconName = iconContent[0].contentValue.split('|')
        
        if(iconName[0] == 'fas' || iconName[0] == 'fab'){
            finalIcon = <FontAwesomeIcon color={svgStyle.color} size={30} icon={iconName} />
        }
        else if(iconName[0] == 'image'){
            finalIcon = <Image source={{uri:iconName[1]}} className="relative w-[50px] h-[50px] z-10" style={{color:svgStyle.color}}/>
        }
    }
    else{
        finalIcon = <Text className="text-centet text-xl font-black" style={{color:svgStyle.color}}>{item.fieldName[0]}</Text>
    }
    return (
        <View className=" relative flex w-[100px] h-[100px] justify-between items-center py-2 z-10 ">
            {/* {
                UiState.pages.editable &&
                <Animated.View className='absolute top-5 right-5 z-20' entering={BounceIn} >
                    <TouchableOpacity style={{ zIndex: 20 }} onPressOut={() => dispatch({ type: 'deleteIcon', id: item.id, section: item.section })} className='min-w-[22px] min-h-[22px] rounded-full flex justify-center items-center bg-[#FF4656] '>
                        <FontAwesomeIcon color='#ffffff' size={10} icon={['fas', 'minus']} />
                    </TouchableOpacity>
                </Animated.View>
            } */}
            <TouchableOpacity style={iconStyle} disabled={UiState.pages.editable} className="w-[50px] h-[50px] flex justify-center items-center z-10 overflow-hidden">
                {finalIcon}
            </TouchableOpacity>
            <Text style={textStyle} className="pt-4 "> {item.fieldName}</Text>
        </View>
    )
}

export default React.memo(Icon)