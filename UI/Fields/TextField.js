import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const TextField = ( {edit , value , onChangeText , id}) => {
    return (
        <View className="relative m-1">
            {
                edit ?
                    <TextInput className="relative text-black border border-1 bg-white border-[#bfbfbf] rounded-lg p-1" autoFocus={true} value={value} onChangeText={(value) => onChangeText(id , value)} />
                    :
                    <Text numberOfLines={1} className="relative overflow-hidden text-[#707070] ">{value}</Text>
            }
        </View>
    )
}

export default TextField