import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../AppState'
import CardInfo from './../../../assets/SVGS/CardInfo.svg'
import HandsShakeHeartShape from './../../../assets/SVGS/HandsShakeHeartShape.svg'
import Input from '../../../UI/Input'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Animated , {SlideOutDown, SlideInDown, useSharedValue, ZoomIn, ZoomOut, SlideInLeft, SlideOutRight, SlideInRight, SlideOutLeft} from 'react-native-reanimated'

const StartJourneyBusiness = () => {
    const { CreateAccountState, CreateAccountDispatch } = useContext(AppContext)
    const [regestir, setRegester] = useState(false)
    const [personInfo, setPersonInfo] = useState(
        {
            userName: '',
            phoneNumber: '',
            eMail: '',
            password: '',
            confirmPassword: ''
        }
    )
    const startJourney = () => {
        if(regestir){
            CreateAccountDispatch({ type: 'nextPage' })
        }
        else{
            setRegester(true)
        }
    }


    return (

        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">

            <View className="relative justify-center items-center p-6">
                <View>

                    <Image className="w-[130px] h-[190px]" source={require('./../../../assets/Images/startJourneyBusiness.png')} />

                    {!regestir && <Animated.View entering={ZoomIn} exiting={ZoomOut} className="absolute top-[70%] -left-7 bg-black rounded-full p-2">
                        <CardInfo />
                    </Animated.View>}
                    {!regestir && <Animated.View entering={ZoomIn} exiting={ZoomOut} className="absolute top-[15%] -right-20 py-1 px-3 bg-black rounded-full">
                        <Text className=" text-lg text-[#00EBBD]">Business</Text>
                    </Animated.View>}


                    {regestir && <Animated.View entering={ZoomIn} exiting={ZoomOut} className="absolute -top-5 -left-7 bg-black rounded-full p-2">
                        <HandsShakeHeartShape />
                    </Animated.View>}
                    {regestir && <Animated.View entering={ZoomIn} exiting={ZoomOut} className="absolute top-[85%] flex-row  justify-center items-center -right-20 py-1 px-3 bg-black rounded-full">
                        <Text className=" text-lg text-[#B9FF00] pr-3"> Regester</Text>
                        <FontAwesomeIcon icon={['fas', 'thumbs-up']} color='#B9FF00' />
                    </Animated.View>}

                </View>
            </View>



            <Text className="w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[18px] pb-1">Let's Start The Journey!</Text>


            {!regestir &&
                <Animated.View entering={SlideInRight} exiting={SlideOutLeft} >
                    <Input placeholder='Username' onChangeText={(text) => setPersonInfo(
                        prev => (
                            {
                                ...prev,
                                userName:text
                            }
                        )
                    )} />
                    <Input placeholder='Phone Number' onChangeText={(text) => setPersonInfo(
                        prev => (
                            {
                                ...prev,
                                phoneNumber:text
                            }
                        )
                    )} />
                    <Input placeholder='E-mail' onChangeText={(text) => setPersonInfo(
                        prev => (
                            {
                                ...prev,
                                eMail:text
                            }
                        )
                    )} />
                </Animated.View>
            }
            {
                regestir &&
                <Animated.View entering={SlideInRight} exiting={SlideOutLeft} >
                    <Input placeholder='Password' onChangeText={(text) => setPersonInfo(
                        prev => (
                            {
                                ...prev,
                                password:text
                            }
                        )
                    )} />
                    <Input placeholder='Confirm Password' onChangeText={(text) => setPersonInfo(
                        prev => (
                            {
                                ...prev,
                                confirmPassword:text
                            }
                        )
                    )}/>
                </Animated.View>
            }
            <TouchableOpacity onPress={() => startJourney()} className="absolute bottom-40 w-[296px] h-[48px] rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">next</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default StartJourneyBusiness