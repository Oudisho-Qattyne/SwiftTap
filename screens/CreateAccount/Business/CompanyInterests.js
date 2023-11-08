import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../AppState'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'
import BusinessLocation from './../../../assets/SVGS/BusinessLocation.svg'
import API from '../../../API/API'

const CompanyInterests = () => {
    const { CreateAccountState, CreateAccountDispatch, UiEventsDispatch, journeyInputFields, journeyDispatch } = useContext(AppContext)
    const [interests, setInterests] = useState([])
    const [info, setInfo] = useState({
        interests:{
            ...journeyInputFields['interests']
        }
    }
    )

    const addOrRemoveInterest = (id) => {
        const prevInterests = [...info.interests.interests.value]
        if (prevInterests.find(id2 => id2 == id)) {
            const newInterests = []
            for (let i = 0; i < prevInterests.length; i++) {
                if (prevInterests[i] != id) {
                    newInterests.push(prevInterests[i])
                }
            }
            console.log(info);
            setInfo(prev => ({
                ...prev,
                interests: {
                    ...prev.interests,
                    interests:{
                        ...prev.interests.interests,
                        value:newInterests,
                        error:null
                    }
                }
            }))
        }
        else {
            prevInterests.push(id)
            setInfo(prev => ({
                ...prev,
                interests: {
                    ...prev.interests,
                    interests:{
                        value:prevInterests,
                        error:null
                    }
                }
            }))
        }
    }


    const sendInterests = () => {
        if (info.interests.interests.value.length != 0) {
            journeyDispatch({ function: 'setSection', section: info })
            CreateAccountDispatch({ type: 'nextPage' })
        }
        else {
            setInfo(prev => (
                {
                    ...prev,
                    interests:{
                        ...prev.interests,
                        interests:{
                            ...prev.interests.interests,
                            error:'select interest'
                        }
                    }
                }
            ))
        }
    }

    const fetchInterests = async () => {
        const { res, err } = await API({
            type: 'interests',
            payload: {
                CreateAccountDispatch: CreateAccountDispatch,
                UiEventsDispatch: UiEventsDispatch
            }
        })
        if (res?.status == 200) {
            console.log(res.data);
            setInterests(res.data.data)
        }
        else {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchInterests()
    }, [])

    return (
        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">
            <View className='p-6'>

                <View className='w-[213px] h-[200px] '>
                    <Image className="absolute max-w-[120px] max-h-[130px]" source={require('./../../../assets/Images/Doctor.png')} />
                    <Image className="absolute bottom-0 right-10 max-w-[96px] max-h-[104px]" source={require('./../../../assets/Images/teacher.png')} />
                    <Image className="absolute top-5 right-5 max-w-[67px] max-h-[73px]" source={require('./../../../assets/Images/garson.png')} />
                    <View className="absolute top-[75%] left-10 p-2 rounded-full justify-center items-center bg-black">
                        <BusinessLocation />
                    </View>
                </View>
            </View>
            <Text className="w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[18px] pb-6">Company Interests</Text>
            {
                info.interests.interests.error &&
                <View>
                    <Text className="text-left text-red-700">{info.interests.interests.error}</Text>
                </View>

            }
            <FlatList
                style={{ width: '100%' }}
                contentContainerStyle={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}
                data={interests}
                keyExtractor={item => item.id}
                renderItem={item =>
                    <TouchableOpacity
                        onPress={() => addOrRemoveInterest(item.item.id)}
                        className="relative w-[140px] h-[50px] border border-1 border-[#bfbfbf] rounded-[10px] flex justify-center items-center m-1"
                        style={{
                            borderColor: info.interests.interests.value.find(id => id == item.item.id) ? '#1776F2' : '#bfbfbf',
                            backgroundColor: info.interests.interests.value.find(id => id == item.item.id) ? '#1776F2' : '#ffffff',

                        }}
                    >
                        <Text className="text-black"
                            style={{
                                color: info.interests.interests.value.find(id => id == item.item.id) ? '#ffffff' : '#000000'
                            }}
                        >{item.item.name}</Text>
                    </TouchableOpacity>
                }
            />



            <TouchableOpacity onPress={() => sendInterests()} className="absolute w-[296px] h-[48px] bottom-40 rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">next</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default CompanyInterests