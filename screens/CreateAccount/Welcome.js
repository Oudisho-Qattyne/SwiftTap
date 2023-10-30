import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../AppState'
import Hi from './../../assets/SVGS/Hi.svg'
import TwoWifi from './../../assets/SVGS/TwoWifi.svg'
import WelcomeOnBoard from './../../assets/SVGS/WelcomeOnBoard.svg'
import Animated, { SlideInDown, SlideInRight, SlideOutDown, SlideOutLeft } from 'react-native-reanimated'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Welcome = () => {
    const { CreateAccountState, CreateAccountDispatch } = useContext(AppContext)
    const [logIn, setLogIn] = useState(false)
    return (
        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">
            {logIn &&
            <TouchableOpacity onPress={() => setLogIn(prev => !prev)} className="absolute top-10 left-10 ">
                <FontAwesomeIcon color='#000000' size={30} icon={faArrowLeft} />
            </TouchableOpacity>}
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
            {
                !logIn &&
                <Animated.View entering={SlideInRight} exiting={SlideOutLeft} className="relative w-full flex flex-col justify-center items-center">

                    <TouchableOpacity
                        onPress={() => setLogIn(true)}
                        className="w-[296px] h-[48px] rounded-full bg-[#1776F2] justify-center items-center">
                        <Text className="text-white text-xl">Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="pt-10"
                        onPress={() => CreateAccountDispatch({ type: 'nextPage' })}>
                        <Text className="text-lg text-[#1E1E1E] underline">Create new Account</Text>
                    </TouchableOpacity>





                </Animated.View>
            }
            {
                !logIn &&
                <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="w-full absolute bottom-40 justify-center items-center pb-10">
                    <Text className="text-[#8F8F8F]">By Continuing you accept our</Text>
                    <TouchableOpacity>
                        <Text className="text-[#1E1E1E] underline">Privacy Policy, Terms of Use</Text>
                    </TouchableOpacity>
                </Animated.View>
            }

        </Animated.View>
    )
}

export default Welcome