import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../../AppState'
import Phone from './../../../assets/SVGS/Phone.svg'
import SMS from './../../../assets/SVGS/SMS.svg'
import WhatsApp from './../../../assets/SVGS/WhatsApp.svg'
import Line from './../../../assets/SVGS/Line.svg'
import Input from '../../../UI/Input'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'

const ContactsBusiness = () => {
    const { CreateAccountState, CreateAccountDispatch } = useContext(AppContext)
    const [personInfo, setPersonInfo] = useState(
        {
            eMail: '',
            phone: '',
            whatsApp: '',
            telegram: '',
        }
    )
    const startJourney = () => {
        CreateAccountDispatch({ type: 'nextPage' })
    }

    return (

        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">

            <View className="relative justify-center items-center p-6">
                <View>

                    <Image className="w-[198px] h-[143px]" source={require('./../../../assets/Images/Contacts.png')} />

                    <View className="absolute -top-5 -left-2 bg-black rounded-full p-1 justify-center items-center">
                        <View className="py-[6px]">
                            <Phone />
                        </View>
                        <View className="py-[6px]">
                            <Line />
                        </View>
                        <View className="py-[6px]">
                            <SMS />
                        </View>
                        <View className="py-[6px]">
                            <Line />
                        </View>
                        <View className="py-[6px]">
                            <WhatsApp />
                        </View>
                    </View>

                </View>
            </View>



            <Text className="w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[18px] pb-1">Your Contacts</Text>

            <View >
                <Input placeholder='E-Mail' onChangeText={(text) => setPersonInfo(
                    prev => (
                        {
                            ...prev,
                            eMail: text
                        }
                    )
                )} />
                <Input placeholder='Phone' onChangeText={(text) => setPersonInfo(
                    prev => (
                        {
                            ...prev,
                            phone: text
                        }
                    )
                )} />
                <Input placeholder='whatsApp' onChangeText={(text) => setPersonInfo(
                    prev => (
                        {
                            ...prev,
                            whatsApp: text
                        }
                    )
                )} />
                <Input placeholder='Telegram' onChangeText={(text) => setPersonInfo(
                    prev => (
                        {
                            ...prev,
                            telegram: text
                        }
                    )
                )} />
            </View>

            <TouchableOpacity onPress={() => startJourney()} className="absolute bottom-40 w-[296px] h-[48px] rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">next</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default ContactsBusiness