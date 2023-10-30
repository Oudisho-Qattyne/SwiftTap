import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Profile = ({ image, name }) => {
    return (
            <View className="relative w-[160px] h-[200px] flex flex-col justify-start items-center rounded-[20px] p-10 bg-[#FBF9F9]">
                <Image source={require('./../../assets/Images/Doctor.png')} className="relative w-[77px] h-[77px] rounded-full" />
                <Text className='relative w-full text-center font-black text-[#6E6E6E] py-5'>{name}</Text>
            </View>
    )
}

export default Profile