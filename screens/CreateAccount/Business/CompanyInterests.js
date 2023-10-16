import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../../AppState'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'
import BusinessLocation from './../../../assets/SVGS/BusinessLocation.svg'

const CompanyInterests = () => {
    const { CreateAccountState, CreateAccountDispatch } = useContext(AppContext)

    return (
        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">
            <Text>Style</Text>
            <View className='p-6'>

                <View className='w-[213px] h-[200px] '>
                    <Image className="absolute max-w-[120px] max-h-[130px]" source={require('./../../../assets/Images/Doctor.png')} />
                    <Image className="absolute bottom-0 right-10 max-w-[96px] max-h-[104px]" source={require('./../../../assets/Images/teacher.png')} />
                    <Image className="absolute top-5 right-5 max-w-[67px] max-h-[73px]" source={require('./../../../assets/Images/garson.png')} />
                    <View className="absolute top-[75%] left-10 p-2 rounded-full justify-center items-center bg-black">
                        <BusinessLocation />
                    </View>
                </View>
            </View>
            <Text className="w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[18px] pb-6">Company Interests</Text>

            <TouchableOpacity onPress={() => CreateAccountDispatch({ type: 'nextPage' })} className="absolute w-[296px] h-[48px] bottom-40 rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">next</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default CompanyInterests