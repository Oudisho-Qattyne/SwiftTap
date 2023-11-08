import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../../AppState'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'
import Spinner from '../../../UI/Spinner'
import API from '../../../API/API'

const BakeAccountBusiness = () => {
    const { CreateAccountState, CreateAccountDispatch , UiEventsDispatch , dispatch , AppState} = useContext(AppContext)

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

    return (
        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">
            <Text className="relative w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[30px] py-10">Your registration is completed!</Text>
            {/* <View className="w-full flex flex-col justify-center items-center">
                <Spinner />
                <Text className="relative w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[20px] py-10">Bakeing your Account</Text>
            </View> */}
            <TouchableOpacity onPress={() => fetchProfiles()}>
                <Text className="relative w-full text-[#bfbfbf] font-[montserrat] font-black text-center text-[20px] py-10">Click here to bake your account</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => CreateAccountDispatch({ type: 'nextPage' })} className=" absolute bottom-40 w-[296px]  h-[48px] rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">next</Text>
            </TouchableOpacity> */}
        </Animated.View>
    )
}

export default BakeAccountBusiness