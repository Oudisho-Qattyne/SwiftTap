import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../../AppState'
import CardInfoVerification from './../../../assets/SVGS/CardInfoVerification.svg'
import KorianLove from './../../../assets/SVGS/KorianLove.svg'
import Input from '../../../UI/Input'
import Animated, { SlideInDown, SlideInLeft, SlideInRight, SlideOutDown, SlideOutLeft, SlideOutRight } from 'react-native-reanimated'
import * as SecureStore from 'expo-secure-store';
import API from '../../../API/API'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
const Verification = () => {
    const { CreateAccountState, CreateAccountDispatch , UiEventsDispatch } = useContext(AppContext)
    const [stepTwo, setStepTwo] = useState(false)
    const [resendeCodeDone , setResendeCodeDone] = useState(false)
    const [resendeCodeError , setResendeCodeError] = useState(false)
    const [error , setError] = useState(null)
    const [verificationInfo, setVerificationInfo] = useState(
        {
            stepOne: {
                // phoneNumber: {
                //     value: '',
                //     placeholder: 'Phone Number',
                //     validation: 'phone-pad',
                //     valid: true,
                //     backValid: true,
                //     toched: false,
                //     error: 'invalid Phone Number'
                // },
                eMail: {
                    value: '',
                    placeholder: 'E-mail',
                    validation: 'email-address',
                    valid: true,
                    backValid: true,
                    toched: false,
                    error: 'invalid e-mail'
                },
            },
            stepTwo: {
                verificationCode: {
                    value: '',
                    placeholder: 'Verification Code',
                    validation: 'phone-pad',
                    valid: true,
                    backValid: true,
                    toched: false,
                    error: 'invalid code'
                },
            }
        }
    )


    const checkValidation = (step) => {
        const newState = { ...verificationInfo }
        let valid=true
        if (step == 1) {
            Object.keys(newState.stepOne).map(inputType => {
                switch (inputType) {
                    case 'phoneNumber':
                        console.log('pokefdp,');
                        const phoneNumber = /^\d+$/
                        if (!phoneNumber.test(newState.stepOne[inputType].value)) {
                            newState.stepOne[inputType].valid = false
                            newState.stepOne[inputType].error = 'this is not a valid phone number'
                            valid = false
                            setVerificationInfo(newState)
                        }
                        else if (newState.stepOne[inputType].value.length < 8) {
                            newState.stepOne[inputType].valid = false
                            newState.stepOne[inputType].error = 'the phone field must be at least 8 characters'
                            valid = false
                            setVerificationInfo(newState)
                        }

                        else {
                            newState.stepOne[inputType].valid = true
                            setVerificationInfo(newState)
                        }

                    default:
                        break;
                    case 'eMail':
                        const eMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                        if (!eMail.test(newState.stepOne[inputType].value)) {
                            newState.stepOne[inputType].valid = false
                            valid = false
                            setVerificationInfo(newState)
                        }
                        else {
                            newState.stepOne[inputType].valid = true
                            setVerificationInfo(newState)
                        }
                        break;
                }
            })
        }
        else{
            Object.keys(newState.stepTwo).map(inputType => {
                switch (inputType) {
                    case 'verificationCode':
                        const phoneNumber = /^\d+$/
                        if (!phoneNumber.test(newState.stepTwo[inputType].value)) {
                            newState.stepTwo[inputType].valid = false
                            newState.stepTwo[inputType].error = 'this is not a valid code'
                            valid = false
                            setVerificationInfo(newState)
                        }
                        else {
                            newState.stepTwo[inputType].valid = true
                            setVerificationInfo(newState)
                        }
                        break;
                
                    default:
                        break;
                }
            })
        }

        return(valid)
    }

    const onChangeText = (text, inputType, step) => {
        const newState = { ...verificationInfo }
        if (step == 1) {
            newState.stepOne[inputType].value = text
            setVerificationInfo(newState)
        }
        else {
            newState.stepTwo[inputType].value = text
            setVerificationInfo(newState)
        }
    }

    const verification = async () => {
        if (stepTwo) {
            setError(null)
            const {err , response } = await API({
                type:'verify',
                payload:{
                    code:'111111',
                    UiEventsDispatch:UiEventsDispatch,
                    CreateAccountDispatch:CreateAccountDispatch
                },
            })
            if(response){
                CreateAccountDispatch({ type: 'nextPage' })
            }
            if(err.response?.data?.data?.code==116){
                setError(err.response.data.message)
            }
        }
        else {
            if(checkValidation(1)){
                setStepTwo(true)
            }
        }
    }

    const resendCode = async () => {
        const res = await API(
            {
                type:'resendCode',
                payload:{
                    UiEventsDispatch:UiEventsDispatch,
                    CreateAccountDispatch:CreateAccountDispatch
                }
            }
        )
        if(res.response?.status==200){
            setResendeCodeDone(true)
            setResendeCodeError(false)
        }
        if(res.err){
            setResendeCodeError(true)
            setResendeCodeDone(false)
        }
    }
    return (

        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">
           {
            stepTwo&&
            <TouchableOpacity onPress={() => setStepTwo(false)} className="absolute top-10 left-10 ">
                <FontAwesomeIcon icon={faArrowLeft} size={25}/>
            </TouchableOpacity>
            }
            <View className="relative justify-center items-center p-6">
                <View>

                    <Image className="w-[130px] h-[190px]" source={require('./../../../assets/Images/verificationl.png')} />

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
                    {
                        Object.keys(verificationInfo.stepOne).map(inputType => {
                            return (
                                <Input
                                    key={verificationInfo.stepOne[inputType].placeholder}
                                    placeholder={verificationInfo.stepOne[inputType].placeholder}
                                    value={verificationInfo.stepOne[inputType].value}
                                    valid={verificationInfo.stepOne[inputType].valid}
                                    error={verificationInfo.stepOne[inputType].error}
                                    keyboardType={verificationInfo.stepOne[inputType].validation}
                                    onChangeText={(text) => onChangeText(text, inputType, 1)}
                                    password={false} />
                            )
                        }
                        )
                    }
                </Animated.View>
            }
            {
                stepTwo &&
                <Animated.View entering={SlideInRight} exiting={SlideOutLeft}>
                    {
                        Object.keys(verificationInfo.stepTwo).map(inputType => {
                            return (
                                <Input
                                    key={verificationInfo.stepTwo[inputType].placeholder}
                                    placeholder={verificationInfo.stepTwo[inputType].placeholder}
                                    value={verificationInfo.stepTwo[inputType].value}
                                    valid={verificationInfo.stepTwo[inputType].valid}
                                    error={verificationInfo.stepTwo[inputType].error}
                                    keyboardType={verificationInfo.stepTwo[inputType].validation}
                                    onChangeText={(text) => onChangeText(text, inputType, 2)}
                                    password={false} />
                            )
                        }
                        )
                    }
                    <TouchableOpacity onPress={
                       () => resendCode()
                    }>
                        <Text className="w-full text-center pt-5 text-black font-[montserrat] underline font-semibold">Resend code</Text>
                    </TouchableOpacity>
                    
                    {
                    resendeCodeDone&&
                    <Text className="text-center py-3 mt-5 text-white bg-green-600 font-black rounded-full">The code has been re-sent</Text>
                    }
                    {
                    resendeCodeError&&
                    <Text className="text-center py-3 mt-5 text-white bg-red-600 font-black rounded-full">SomeThing went wrong, re-send the code</Text>
                    }
                    {
                    error &&
                        <Text className="text-center py-3 mt-5 text-white bg-red-600 font-black rounded-full">{error}</Text>
                    }
                </Animated.View >
            }
            <TouchableOpacity onPress={() => verification()} className="absolute bottom-40 w-[296px] h-[48px] rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">next</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default Verification