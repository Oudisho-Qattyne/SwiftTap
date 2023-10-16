import { View, Text , TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Hr from '../../UI/Hr'

const ShareType = ({ name, icon }) => {
    return (
        <View className="relative w-full h-24 flex-row justify-between items-center">
            <View className="absolute w-full h-full ">
                <Hr color='#8C8C8C' height={1} width='90%' />
            </View>
            <TouchableOpacity className=' w-[80%] h-full flex-row gap-5 items-center'>
                <FontAwesomeIcon icon={icon} size={30} color="#8C8C8C" />
                <Text className="text-[#8C8C8C]">
                    {name}
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default ShareType