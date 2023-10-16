import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../../AppState'
import Globe from './../../../assets/Globe.svg'
import Camera from './../../../assets/Camera.svg'
import Mobile from './../../../assets/Mobile.svg'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'

const SelectImageBusiness = () => {
    const { CreateAccountState, CreateAccountDispatch } = useContext(AppContext)
    const startJourney = () => {
        CreateAccountDispatch({ type: 'nextPage' })
    }
    return (

        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">

            <View className="relative justify-center items-center p-6">
                <View>

                    <Image className="w-[160px] h-[160px]" source={require('./../../../assets/SelectImage.png')} />

                    <View className="absolute top-[90%] -left-10 flex-row  bg-black rounded-full px-3 py-1 justify-center items-center">
                        <View className="px-[6px]">
                            <Globe />
                        </View>
                        <View className="px-[6px]">
                            <Camera />
                        </View>
                        <View className="px-[6px]">
                            <Mobile />
                        </View>
                    </View>

                </View>
            </View>

            <Text className="w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[18px] py-5">Your Image</Text>
            <TouchableOpacity>
                <View style={{ borderStyle: 'dashed' }} className="w-[164px] h-[164px] rounded-full border-dashed border-2 border-[#bfbfbf] justify-center items-center">
                    <Text className="text-5xl font-black text-[#bfbfbf]">+</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => startJourney()} className="absolute bottom-40 w-[296px] h-[48px] rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">next</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default SelectImageBusiness