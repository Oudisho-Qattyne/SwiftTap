import { View, Text, TouchableOpacity, Image } from 'react-native'
import React , { useContext }from 'react'
import { AppContext } from '../../../AppState'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'

const StyleBusiness = () => {
    const {CreateAccountState,CreateAccountDispatch} = useContext(AppContext)

    return (
        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">
            <Text>Style</Text>
           <TouchableOpacity onPress={() => CreateAccountDispatch({type:'nextPage'})} className="w-[296px] h-[48px] rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">next</Text>
           </TouchableOpacity>
        </Animated.View>
    )
}

export default StyleBusiness