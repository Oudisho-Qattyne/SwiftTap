import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../AppState'
import Phone from './../../../assets/SVGS/Phone.svg'
import SMS from './../../../assets/SVGS/SMS.svg'
import WhatsApp from './../../../assets/SVGS/WhatsApp.svg'
import Line from './../../../assets/SVGS/Line.svg'
import Input from '../../../UI/Input'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'

const ContactsBusiness = () => {
    const { CreateAccountState, CreateAccountDispatch, journeyInputFields, journeyDispatch } = useContext(AppContext)
    const [personInfo, setPersonInfo] = useState(
        {
            ...journeyInputFields['contacts']
        }
    )

    const sendContacts = () => {
        if (checkValidation()) {
            console.log(journeyInputFields['contacts']);
            console.log('state',personInfo);
            journeyDispatch({ function: 'setSection', section: personInfo })
            CreateAccountDispatch({ type: 'nextPage' })
        }
    }
    const checkValidation = () => {
        let valid = true
        const newState = {
            ...personInfo
        }
        Object.keys(newState).map(
            inputType => {
                switch (inputType) {
                    case 'eMail':
                        const eMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                        if (!eMail.test(newState[inputType].value)) {
                            newState[inputType].valid = false
                            valid = false
                        }
                        else {
                            newState[inputType].valid = true
                        }

                        break;
                    case 'phone':
                        const phoneNumber = /^\d+$/
                        if (!phoneNumber.test(newState[inputType].value)) {
                            newState[inputType].valid = false
                            newState[inputType].error = 'this is not a valid phone number'
                            valid = false
                        }
                        else if (newState[inputType].value.length < 8) {
                            newState[inputType].valid = false
                            newState[inputType].error = 'the phone field must be at least 8 numbers'
                            valid = false
                        }
                        else {
                            newState[inputType].valid = true
                        }
                        break;
                    case 'whatsApp':
                        const whatsApp = /^\d+$/
                        if (newState[inputType].value == '') {
                            newState[inputType].valid = false
                            newState[inputType].error = 'required'
                            valid = false
                        }
                        else if (!whatsApp.test(newState[inputType].value)) {
                            newState[inputType].valid = false
                            newState[inputType].error = 'this is not a valid phone number'
                            valid = false
                        }
                        else {
                            newState[inputType].valid = true
                        }
                        break;
                        case 'telegram':
                        const telegram = /^\d+$/
                        if (newState[inputType].value == '') {
                            newState[inputType].valid = false
                            newState[inputType].error = 'required'
                            valid = false
                        }
                        else if (!telegram.test(newState[inputType].value)) {
                            newState[inputType].valid = false
                            newState[inputType].error = 'this is not a valid phone number'
                            valid = false
                        }
                        else {
                            newState[inputType].valid = true
                        }
                        break;
                    default:
                        break;
                }
            }
        )
        setPersonInfo({
            ...newState
        })

        return (valid)

    }



    const onChangeInformationText = (text, inputType) => {
        const prevState = { ...personInfo }
        let newtext = text
        if (typeof text == 'string') {
            newtext = text.trim()
        }
        prevState[inputType].value = newtext
        setPersonInfo(prevState)
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
                <Input
                    valid={personInfo.eMail.valid}
                    error={personInfo.eMail.error}
                    value={personInfo.eMail.value}
                    placeholder='e-mail'
                    password={false}
                    onChangeText={(text) => onChangeInformationText(text, 'eMail')} />

                <Input
                    valid={personInfo.phone.valid}
                    error={personInfo.phone.error}
                    value={personInfo.phone.value}
                    placeholder='phone'
                    keyboardType='phone-pad'
                    password={false}
                    onChangeText={(text) => onChangeInformationText(text, 'phone')} />

                <Input
                    valid={personInfo.whatsApp.valid}
                    error={personInfo.whatsApp.error}
                    keyboardType='phone-pad'
                    value={personInfo.whatsApp.value}
                    placeholder='whatsApp'
                    password={false}
                    onChangeText={(text) => onChangeInformationText(text, 'whatsApp')} />


                <Input
                    valid={personInfo.telegram.valid}
                    error={personInfo.telegram.error}
                    keyboardType='phone-pad'
                    value={personInfo.telegram.value}
                    placeholder='telegram'
                    password={false}
                    onChangeText={(text) => onChangeInformationText(text, 'telegram')} />
                {/* <Input placeholder='E-Mail' onChangeText={(text) => setPersonInfo(
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
                )} /> */}
            </View>

            <TouchableOpacity onPress={() => sendContacts()} className="absolute bottom-40 w-[296px] h-[48px] rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">next</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default ContactsBusiness