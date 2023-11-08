import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../AppState'
import CardInfo from './../../../assets/SVGS/CardInfo.svg'
import HandsShakeHeartShape from './../../../assets/SVGS/HandsShakeHeartShape.svg'
import Input from '../../../UI/Input'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Animated, { SlideOutDown, SlideInDown, useSharedValue, ZoomIn, ZoomOut, SlideInLeft, SlideOutRight, SlideInRight, SlideOutLeft } from 'react-native-reanimated'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import swifttapAxios from '../../../axios/SwftTapAxios'
import * as SecureStore from 'expo-secure-store';

const StartJourneyBusiness = () => {
    const { CreateAccountState, CreateAccountDispatch, UiEventsDispatch } = useContext(AppContext)
    const [regestir, setRegester] = useState(false)
    const [err, setError] = useState(null)
    const [personInfo, setPersonInfo] = useState(
        {
            information: {
                userName: {
                    value: '',
                    validation: 'name',
                    valid: true,
                    backValid: true,
                    toched: false,
                    error: 'invalid User name'
                },
                phoneNumber: {
                    value: '',
                    validation: 'phone-pad',
                    valid: true,
                    backValid: true,
                    toched: false,
                    error: 'invalid phone number'
                },
                eMail: {
                    value: '',
                    validation: 'email-address',
                    valid: true,
                    backValid: true,
                    toched: false,
                    error: 'invalid e-mail'
                },
            },
            regestir: {
                password: {
                    value: '',
                    validation: '',
                    valid: true,
                    backValid: true,
                    toched: false,
                    error: 'invalid password'
                },
                confirmPassword: {
                    value: '',
                    validation: '',
                    valid: true,
                    backValid: true,
                    toched: false,
                    error: "invalid password"
                },
            }

        }
    )





    const checkInformationValidation = () => {
        const prevState = {
            ...personInfo
        }
        let valid = true
        Object.keys(prevState.information).map(
            inputType => {
                switch (inputType) {
                    case 'userName':
                        if (prevState.information[inputType].value.length > 200) {
                            prevState.information[inputType].valid = false
                            prevState.information[inputType].error = 'the name field too long'
                            valid = false
                            setPersonInfo(prevState)
                        }
                        else if (prevState.information[inputType].value.length < 5) {
                            prevState.information[inputType].valid = false
                            prevState.information[inputType].error = 'the name field must be at least 5 characters'
                            valid = false
                            setPersonInfo(prevState)
                        }
                        else {
                            prevState.information[inputType].valid = true

                            setPersonInfo(prevState)
                        }

                        break;
                    case 'phoneNumber':
                        const phoneNumber = /^\d+$/
                        if (!phoneNumber.test(prevState.information[inputType].value)) {
                            prevState.information[inputType].valid = false
                            prevState.information[inputType].error = 'this is not a valid phone number'
                            valid = false
                            setPersonInfo(prevState)
                        }
                        else if (prevState.information[inputType].value.length < 8) {
                            prevState.information[inputType].valid = false
                            prevState.information[inputType].error = 'the phone field must be at least 8 characters'
                            valid = false
                            setPersonInfo(prevState)
                        }

                        else {
                            prevState.information[inputType].valid = true
                            setPersonInfo(prevState)
                        }
                        break;
                    case 'eMail':
                        const eMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                        if (!eMail.test(prevState.information[inputType].value)) {
                            prevState.information[inputType].valid = false
                            valid = false
                            setPersonInfo(prevState)
                        }
                        else {
                            prevState.information[inputType].valid = true
                            setPersonInfo(prevState)
                        }
                        break;
                }
            }
        )
        return (valid)

    }


    const checkRegisterValidation = () => {
        const prevState = {
            ...personInfo
        }
        let valid = true
        Object.keys(prevState.regestir).map(
            inputType => {
                switch (inputType) {
                    case 'password':
                        if (prevState.regestir[inputType].value.length < 8 || prevState.regestir[inputType].value.length > 200) {
                            prevState.regestir[inputType].valid = false
                            valid = false
                            setPersonInfo(prevState)
                        }
                        else {
                            prevState.regestir[inputType].valid = true
                            setPersonInfo(prevState)
                        }

                        break;
                    case 'confirmPassword':
                        if (prevState.regestir[inputType].value != prevState.regestir.password.value) {
                            prevState.regestir[inputType].valid = false
                            valid = false
                            setPersonInfo(prevState)
                        }
                        else {
                            prevState.regestir[inputType].valid = true
                            setPersonInfo(prevState)
                        }
                        break;

                }
            }
        )
        return (valid)

    }


    const changeErrorValidation = (prop, value, information) => {
        const newState = { ...personInfo }
        if (information) {
            newState.information[prop].error = value
            newState.information[prop].valid = false
            setRegester(false)
            console.log(regestir);
        }
        else {
            newState.regestir[prop].error = value
            newState.regestir[prop].valid = false
        }
        return (newState)
    }


    const onChangeInformationText = (text, inputType) => {
        const prevState = { ...personInfo }
        prevState.information[inputType].value = text
        setPersonInfo(prevState)
    }


    const onChangeRegisterText = (text, inputType) => {
        const prevState = { ...personInfo }
        prevState.regestir[inputType].value = text
        setPersonInfo(prevState)
    }


    async function save(key, value) {
        await SecureStore.setItemAsync(key, value);
    }


    const startJourney = () => {
        if (regestir) {
        }
        else {
            if (checkInformationValidation()) {
                setRegester(true)
            }
        }
    }


    const signUp = async () => {
        if (checkRegisterValidation()) {
            try {
                UiEventsDispatch({ event: 'loading', value: true })
                // useRefreshToken()
                console.log();
                const res = await swifttapAxios({
                    method: 'POST',

                    url: '/register',

                    headers: {
                        'Accept': 'application/json'
                    },

                    params: {
                        'phone': personInfo.information.phoneNumber.value,
                        'email': personInfo.information.eMail.value,
                        'password': personInfo.regestir.password.value,
                        'password_confirmation': personInfo.regestir.confirmPassword.value,
                        'name': personInfo.information.userName.value,
                        'role': CreateAccountState.role,
                    }
                })
                UiEventsDispatch({ event: 'loading', value: false })
                // setRes(res.data)
                console.log(res);
                await save('accessToken', res.data.access_token)
                await save('refreshToken', res.data.refresh_token)
                await save('expiresIn', JSON.stringify(parseInt(Date.now() / 1000) + res.data.expires_in - 60))
                // await save('expiresIn','1697013539' )
                CreateAccountDispatch({ type: 'nextPage' })
            }
            catch (error) {
                // setError(error)
                const error2 = error
                if (error2.response.data.validationErrors) {
                    Object.keys(error2.response.data.validationErrors).map(
                        prop => {
                            switch (prop) {
                                case 'email':
                                    changeErrorValidation('eMail', error2.response.data.validationErrors[prop], true)
                                    break;
                                case 'name':
                                    changeErrorValidation('userName', error2.response.data.validationErrors[prop], true)
                                    break;
                                case 'phone':
                                    changeErrorValidation('phoneNumber', error2.response.data.validationErrors[prop], true)
                                    break;
                                case 'password':
                                    changeErrorValidation('password', error2.response.data.validationErrors[prop], false)
                                    break;
                                case 'password_confirmation':
                                    changeErrorValidation('confirmPassword', error2.response.data.validationErrors[prop], false)
                                    break;
                                default:
                                    break;
                            }
                        }
                    )
                }
                // else {
                // setError(error)
                // }
                UiEventsDispatch({ event: 'loading', value: false })
            }
            // CreateAccountDispatch({ type: 'nextPage' })

        }


    }

    return (

        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">
            {regestir &&
                <TouchableOpacity onPress={() => setRegester(prev => !prev)} className="absolute top-10 left-10 ">
                    <FontAwesomeIcon color='#000000' size={30} icon={faArrowLeft} />
                </TouchableOpacity>
            }
            <View className="h-full">
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
                            <Text className=" text-lg text-[#B9FF00] pr-3"> Register</Text>
                            <FontAwesomeIcon icon={['fas', 'thumbs-up']} color='#B9FF00' />
                        </Animated.View>}

                    </View>
                </View>



                <Text className="w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[18px] pb-1">Let's Start The Journey!</Text>


                {!regestir &&
                    <Animated.View entering={SlideInRight} exiting={SlideOutLeft} >


                        <Input
                            valid={personInfo.information.userName.valid}
                            error={personInfo.information.userName.error}
                            value={personInfo.information.userName.value}
                            placeholder='Username'
                            password={false}
                            onChangeText={(text) => onChangeInformationText(text, 'userName')} />


                        <Input
                            valid={personInfo.information.phoneNumber.valid}
                            error={personInfo.information.phoneNumber.error}
                            value={personInfo.information.phoneNumber.value}
                            placeholder='Phone Number'
                            password={false}
                            keyboardType='phone-pad'
                            onChangeText={(text) => onChangeInformationText(text, 'phoneNumber')} />


                        <Input
                            valid={personInfo.information.eMail.valid}
                            error={personInfo.information.eMail.error}
                            value={personInfo.information.eMail.value}
                            placeholder='E-mail'
                            password={false}
                            keyboardType='email-address'
                            onChangeText={(text) => onChangeInformationText(text, 'eMail')} />


                    </Animated.View>
                }
                {
                    regestir &&
                    <Animated.View entering={SlideInRight} exiting={SlideOutLeft} >


                        <Input
                            valid={personInfo.regestir.password.valid}
                            error={personInfo.regestir.password.error}
                            value={personInfo.regestir.password.value}
                            placeholder='Password'
                            password={true}
                            onChangeText={(text) => onChangeRegisterText(text, 'password')} />


                        <Input
                            valid={personInfo.regestir.confirmPassword.valid}
                            error={personInfo.regestir.confirmPassword.error}
                            value={personInfo.regestir.confirmPassword.value}
                            placeholder='Confirm Password'
                            password={true}
                            onChangeText={(text) => onChangeRegisterText(text, 'confirmPassword')} />


                    </Animated.View>

                }
                {
                    err &&
                    <Text className=" py-3 bg-red-600 text-white font-black rounded-[10px] text-center">SomeThing Went Wrong</Text>
                }
                {
                    regestir &&
                    <TouchableOpacity onPress={() => signUp()} className="absolute bottom-40 w-[296px] h-[48px] rounded-full bg-[#1776F2] justify-center items-center">
                        <Text className="text-white text-xl">next</Text>
                    </TouchableOpacity>
                }
                {
                    !regestir &&
                    <TouchableOpacity onPress={() => startJourney()} className="absolute bottom-40 w-[296px] h-[48px] rounded-full bg-[#1776F2] justify-center items-center">
                        <Text className="text-white text-xl">next</Text>
                    </TouchableOpacity>
                }
            </View>
        </Animated.View>
    )
}

export default StartJourneyBusiness