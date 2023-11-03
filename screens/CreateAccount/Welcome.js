import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../AppState'
import Hi from './../../assets/SVGS/Hi.svg'
import TwoWifi from './../../assets/SVGS/TwoWifi.svg'
import WelcomeOnBoard from './../../assets/SVGS/WelcomeOnBoard.svg'
import Animated, { SlideInDown, SlideInLeft, SlideInRight, SlideOutDown, SlideOutLeft, SlideOutRight } from 'react-native-reanimated'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Input from '../../UI/Input'
import swifttapAxios from '../../axios/SwftTapAxios'
import * as SecureStore from 'expo-secure-store';
import API from '../../API/API'


const Welcome = () => {
    const { CreateAccountState,dispatch, CreateAccountDispatch , UiEventsDispatch  } = useContext(AppContext)
    const [logIn, setLogIn] = useState(false)
    const [personInfo, setPersonInfo] = useState(
        {

            eMail: {
                value: '',
                validation: 'name',
                valid: true,
                backValid: true,
                placeholder: "e-mail",
                error: 'invalid e-mail'
            },
            password: {
                value: '',
                validation: '',
                valid: true,
                backValid: true,
                placeholder: "password",
                error: 'invalid password',
                password:true
            },
        }
    )

    async function save(key, value) {
        await SecureStore.setItemAsync(key, value);
    }


    const onChangeText = (text, inputType) => {
        const prevState = { ...personInfo }
        prevState[inputType].value = text
        setPersonInfo(prevState)
    }


    const checkValidation = () => {
        const prevState = {
            ...personInfo
        }
        let valid = true
        Object.keys(prevState).map(
            inputType => {
                switch (inputType) {
                    case 'eMail':
                        const eMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                        if (!eMail.test(prevState[inputType].value)) {
                            prevState[inputType].valid = false
                            valid = false
                            setPersonInfo(prevState)
                        }
                        else {
                            prevState[inputType].valid = true
                            setPersonInfo(prevState)
                        }
                        break;
                    case 'password':
                        if (prevState[inputType].value.length < 8 || prevState[inputType].value.length > 200) {
                            prevState[inputType].valid = false
                            valid = false
                            setPersonInfo(prevState)
                        }
                        else {
                            prevState[inputType].valid = true
                            setPersonInfo(prevState)
                        }

                        break;
                }
            }
        )
        return (valid)
    }


    const changeErrorValidation = (prop, value) => {
        const newState = { ...personInfo }
            newState[prop].error = value
            newState[prop].valid = false
        return (newState)
    }

    const fetchProfiles = async () => {
        const {res , err } = await API({
            type: 'profiles',
                payload: {
                    CreateAccountDispatch: CreateAccountDispatch,
                    UiEventsDispatch: UiEventsDispatch,
                }
        })
        if(res?.status==200){
            await dispatch({type:'setState' , key:'profiles' , value:res.data.data})
            await UiEventsDispatch({event:'logedIn' , value:true})
        }
    }

    const login = async () => {
        if (checkValidation()) {
            try {
                UiEventsDispatch({ event: 'loading', value: true })
                // useRefreshToken()
                const res = await swifttapAxios({
                    method: 'POST',

                    url: '/login',

                    headers: {
                        'Accept': 'application/json'
                    },

                    params: {
                        'email': personInfo.eMail.value,
                        'password': personInfo.password.value,
                    }
                })
                // setRes(res.data)
                if(res.status){
                    console.log(res);
                    console.log(res.data);
                    await save('accessToken', res.data.access_token)
                    await save('refreshToken', res.data.refresh_token)
                    await save('expiresIn', JSON.stringify(parseInt(Date.now() / 1000) + res.data.expires_in - 60))
                    await fetchProfiles()
                    UiEventsDispatch({ event: 'loading', value: false })
                }


                // await save('expiresIn','1697013539' )
                UiEventsDispatch({ event: 'logedIn', value: true })
            }
            catch(error) {
                // setError(error)
                const error2 = error
                console.log(error);
                console.log(error2.response?.data?.message == 'messages.wrong_password');
                if(error2.response?.data?.message == 'messages.wrong_password'){
                    changeErrorValidation('password','wrong password' )
                }
                if (error2.response.data.validationErrors) {
                    Object.keys(error2.response.data.validationErrors).map(
                        prop => {
                            switch (prop) {
                                case 'email':
                                    changeErrorValidation('eMail', error2.response.data.validationErrors[prop])
                                    break;
                                case 'password':
                                    changeErrorValidation('password', error2.response.data.validationErrors[prop])
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
            UiEventsDispatch({ event: 'loading', value: false })

            // CreateAccountDispatch({ type: 'nextPage' })
        }
    }




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
                <Animated.View entering={SlideInLeft} exiting={SlideOutLeft} className="relative w-full flex flex-col justify-center items-center">

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
            {
                logIn &&
                <Animated.View className="relative w-full flex flex-col justify-center items-center" entering={SlideInRight} exiting={SlideOutRight}>
                    {
                        Object.keys(personInfo).map(
                            input => <Input key={input} onChangeText={(text) => onChangeText(text, input)} {...personInfo[input]} />
                        )
                    }
                    <TouchableOpacity
                        onPress={() => login()}
                        className="w-[296px] h-[48px] rounded-full bg-[#1776F2] justify-center items-center mt-5">
                        <Text className="text-white text-xl">Log in</Text>
                    </TouchableOpacity>

                </Animated.View>
            }
        </Animated.View>
    )
}

export default Welcome