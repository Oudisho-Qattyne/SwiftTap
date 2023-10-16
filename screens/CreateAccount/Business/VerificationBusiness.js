import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../../AppState'
import CardInfoVerification from './../../../assets/SVGS/CardInfoVerification.svg'
import KorianLove from './../../../assets/SVGS/KorianLove.svg'
import Input from '../../../UI/Input'
import Animated, { SlideInDown, SlideInLeft, SlideInRight, SlideOutDown, SlideOutLeft, SlideOutRight } from 'react-native-reanimated'

const VerificationBusiness = () => {
    const { CreateAccountState, CreateAccountDispatch } = useContext(AppContext)
    const [stepTwo, setStepTwo] = useState(false)
    const [verificationInfo, setVerificationInfo] = useState(
        {
            phoneNumber: '',
            eMail: '',
            verificationCode: '',
        }
    )
    const verification = () => {
        if (stepTwo) {
            CreateAccountDispatch({ type: 'nextPage' })
        }
        else {
            setStepTwo(true)
        }
    }

    return (

        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">

            <View className="relative justify-center items-center p-6">
                <View>

                    <Image className="w-[160px] h-[202px]" source={require('./../../../assets/Images/VerficationBusiness.png')} />

                    <View className="absolute w-14 h-14 justify-center items-center top-[80%] -right-7 bg-black rounded-full p-2">
                        <KorianLove />
                    </View>
                    <View className="absolute top-5 -left-7 bg-black rounded-md p-1">
                        <CardInfoVerification />
                    </View>

                </View>
            </View>



            <Text className="w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[18px] pb-1">Verification</Text>


            {!stepTwo &&
                <Animated.View entering={SlideInRight} exiting={SlideOutLeft} >
                    <Input placeholder='Phone Number' onChangeText={(text) => setVerificationInfo(
                        prev => (
                            {
                                ...prev,
                                phoneNumber: text
                            }
                        )
                    )} />
                    <Input placeholder='E-mail' onChangeText={(text) => setVerificationInfo(
                        prev => (
                            {
                                ...prev,
                                eMail: text
                            }
                        )
                    )} />
                </Animated.View>
            }
            {
                stepTwo &&
                <Animated.View entering={SlideInRight} exiting={SlideOutLeft}>
                    <Input placeholder='Verification Code' onChangeText={(text) => setVerificationInfo(
                        prev => (
                            {
                                ...prev,
                                verificationCode: text
                            }
                        )
                    )} />
                    <TouchableOpacity>
                        <Text className="w-full text-center pt-5 text-black font-[montserrat] underline font-semibold">Resend code</Text>
                    </TouchableOpacity>
                </Animated.View >
            }
            <TouchableOpacity onPress={() => verification()} className="absolute bottom-40 w-[296px] h-[48px] rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">next</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default VerificationBusiness