import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../AppState'

const Separate = ({ title }) => {
    const {AppState , dispatch } = useContext(AppContext);
    const lineStyle = {
        backgroundColor:AppState.profile.theme.textColor,
    }
    const textStyle = {
        color:AppState.profile.theme.textColor,
        fontFamily:AppState.profile.theme.textFont
    }
    return (
        <View className='w-full flex flex-row justify-between items-center'>
            <View style={lineStyle} className='w-32 h-1 rounded-sm bg-[#241D57]'></View>
            <Text style={textStyle} className="text-[#241D57] text-center">
                {title}
            </Text>
            <View style={lineStyle} className='w-32 h-1 rounded-sm bg-[#241D57]'></View>
        </View>
    )
}

export default Separate