import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../AppState'
import Hi from './../../assets/SVGS/Hi.svg'
import TwoWifi from './../../assets/SVGS/TwoWifi.svg'
import WelcomeOnBoard from './../../assets/SVGS/WelcomeOnBoard.svg'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'

const Welcome = () => {
    const { CreateAccountState, CreateAccountDispatch } = useContext(AppContext)
    return (
        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">

            <View className="relative justify-center items-center p-10">
                <View>
                    <Image source={require('./../../assets/Images/welcomeGirl.png')} />
                    <View className="absolute -top-5 -right-5">
                        <Hi />
                    </View>
                    <View className="absolute top-2/3 -left-5">
                        <TwoWifi />
                    </View>
                    <View className="absolute top-[80%] -right-20">
                        <WelcomeOnBoard />
                    </View>
                </View>
            </View>

            <TouchableOpacity
                className="w-[296px] h-[48px] rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity
                className="pt-10"
                onPress={() => CreateAccountDispatch({ type: 'nextPage' })}>
                <Text className="text-lg text-[#1E1E1E] underline">Create new Account</Text>
            </TouchableOpacity>



            <View className="w-full absolute bottom-0 justify-center items-center pb-10">
                <Text className="text-[#8F8F8F]">By Continuing you accept our</Text>
                <TouchableOpacity>
                    <Text className="text-[#1E1E1E] underline">Privacy Policy, Terms of Use</Text>
                </TouchableOpacity>
            </View>


        </Animated.View>
    )
}

export default Welcome