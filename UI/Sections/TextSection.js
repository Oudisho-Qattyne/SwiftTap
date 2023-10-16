import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../AppState'

const TextSection = ({ items }) => {
    const { AppState, dispatch } = useContext(AppContext)
    let textStyle = {
        color: AppState.theme.textColor,
        fontFamily: AppState.theme.textFont
    }
    return (
        <View className='w-full flex justify-center items-center py-5'>
            <TouchableOpacity>
                <Text style={textStyle} className="text-[24px] pb-3">userName</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={textStyle} className="text-[17px] pb-3">title</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={textStyle} className="text-[13px] pb-3">bio</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TextSection