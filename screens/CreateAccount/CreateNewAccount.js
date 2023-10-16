import { View, Text, TouchableOpacity, Image } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useContext } from 'react'
import { AppContext } from '../../AppState'
import SwiftTapMiniLogo from './../../assets/SVGS/swiftMiniLogo.svg'
import Buildings from './../../assets/SVGS/Buildings.svg'
import Laptop from './../../assets/SVGS/Laptop.svg'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'

const CreateNewAccount = () => {
    const { CreateAccountState, CreateAccountDispatch } = useContext(AppContext)

    return (
        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">

            <View className="relative justify-center items-center p-10">
                <View>
                    <Image className='w-[137px] h-[141px]' source={require('./../../assets/Images/HowToUse.png')} />
                    <View className="absolute -top-5 -left-5">
                        <SwiftTapMiniLogo />
                    </View>
                    <View className="absolute -top-5 -right-5 p-1 bg-black rounded-lg">
                        <Buildings />
                    </View>
                    <View className="absolute w-[52px] h-[52px] top-[80%] -left-10 justify-center items-center p-3 bg-black rounded-lg">
                        <Laptop />
                    </View>
                </View>
            </View>


            <Text className="w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[18px] pb-5">How do you want to use Swifttap?</Text>


            <View className="flex justify-center items-center gap-5">
                <TouchableOpacity onPress={() => {
                    CreateAccountDispatch({ type: 'selectAccountType', accountType: 'individual' })
                    CreateAccountDispatch({ type: 'nextPage' })
                }} className="w-[296px] h-[48px] rounded-[10px] border border-1 border-[#BFBFBF] flex justify-center items-center">
                    <Text className="text-[17px] text-[#1E1E1E]">Individual</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => {
                    CreateAccountDispatch({ type: 'selectAccountType', accountType: 'business' })
                    CreateAccountDispatch({ type: 'nextPage' })
                }} className="w-[296px] h-[48px] rounded-[10px] border border-1 border-[#BFBFBF] flex justify-center items-center">
                    <Text className="text-[17px] text-[#1E1E1E]">Business</Text>
                </TouchableOpacity> */}
            </View>
        </Animated.View>
    )
}

export default CreateNewAccount