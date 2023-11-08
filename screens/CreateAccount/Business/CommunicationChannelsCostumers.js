import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../AppState'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'
import TeamNetwork from './../../../assets/SVGS/TeamNetwork.svg'
import Messages from './../../../assets/SVGS/MessagesSmall.svg'
import API from '../../../API/API'

const CommunicationChannelsCostumers = () => {
    const { CreateAccountState, CreateAccountDispatch, UiEventsDispatch , journeyInputFields, journeyDispatch} = useContext(AppContext)
    const [communicationChannels, setCommunicationChannels] = useState([])
    const [info , setInfo] = useState({
        customer_channels:{
            ...journeyInputFields['customer_channels']
        }
    })


    const addOrRemoveCommunicationChannels = (id) => {
        const prevCommunicationChannels = [...info.customer_channels.customer_channels.value]
        if (prevCommunicationChannels.find(id2 => id2 == id)) {
            const newCommunicationChannels = []
            for (let i = 0; i < prevCommunicationChannels.length; i++) {
                if (prevCommunicationChannels[i] != id) {
                    newCommunicationChannels.push(prevCommunicationChannels[i])
                }
            }
            setInfo(prev => ({
                ...prev,
                customer_channels:{
                    ...prev.customer_channels,
                    customer_channels:{
                        ...prev.customer_channels.customer_channels,
                        value:newCommunicationChannels,
                        error:null
                    }
                }
            }))
        }
        else {
            prevCommunicationChannels.push(id)
            setInfo(prev => ({
                ...prev,
                customer_channels:{
                    ...prev.customer_channels,
                    customer_channels:{
                        ...prev.customer_channels.customer_channels,
                        value:prevCommunicationChannels,
                        error:null
                    }
                }
            }))
        }
    }

    const sendInfo = () => {
        console.log(info);
        if(info.customer_channels.customer_channels.value.length!=0){
            journeyDispatch({function:'setSection' , section:info})
            CreateAccountDispatch({ type: 'nextPage' })
            
        }
        else{
            setInfo(prev => ({
                ...prev,
                customer_channels:{
                    ...prev.customer_channels,
                    customer_channels:{
                        ...prev.customer_channels.customer_channels,
                        error:'select channels'
                    }
                }
            }))
        }
    }

    const fetchCommunicationChannels = async () => {
        const { res, err } = await API({
            type: 'communicationChannels',
            payload: {
                CreateAccountDispatch: CreateAccountDispatch,
                UiEventsDispatch: UiEventsDispatch
            }
        })
        if (res?.status == 200) {
            setCommunicationChannels(res.data.data)
        }
        else {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCommunicationChannels()
    }, [])
    return (
        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">
            <View className='p-6'>

                <View className='w-[300px] h-[213px] flex justify-center items-center '>
                    <Image className="absolute max-w-[212px] max-h-[153px]" source={require('./../../../assets/Images/TeamChannelsCostumer.png')} />
                    <Image className="absolute -bottom-0 -left-0 max-w-[80px] max-h-[95px]" source={require('./../../../assets/Images/TeamGirl.png')} />
                    <View className="absolute top-3 right-5 p-3 rounded-full justify-center items-center bg-black">
                        <TeamNetwork />
                    </View>
                    <View className="absolute top-1/4 left-5 p-2 rounded-full justify-center items-center bg-black">
                        <Messages />
                    </View>
                </View>
            </View>
            <Text className="w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[20px] pb-6">Work Team’s Communication Channels </Text>
            {
                    info.customer_channels.customer_channels.error &&
                    <View>
                        <Text className="text-left text-red-700">{info.customer_channels.customer_channels.error}</Text>
                    </View>
                }
                <FlatList
                    style={{ width: '100%' }} 
                    contentContainerStyle={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}
                    data={communicationChannels}
                    keyExtractor={item => item.id}
                    renderItem={item =>
                        <TouchableOpacity
                            onPress={() => addOrRemoveCommunicationChannels(item.item.id)}
                            className="relative w-[140px] h-[50px] border border-1 border-[#bfbfbf] rounded-[10px] flex justify-center items-center m-1"
                            style={{
                                borderColor: info.customer_channels.customer_channels.value.find(id => id == item.item.id) ? '#1776F2' : '#bfbfbf',
                                backgroundColor: info.customer_channels.customer_channels.value.find(id => id == item.item.id) ? '#1776F2' : '#ffffff',

                            }}
                        >
                            <Text className="text-black"
                                style={{
                                    color: info.customer_channels.customer_channels.value.find(id => id == item.item.id) ? '#ffffff' : '#000000'
                                }}
                            >{item.item.name}</Text>
                        </TouchableOpacity>
                    }
                />

            <TouchableOpacity onPress={() => sendInfo()} className="absolute w-[296px] h-[48px] bottom-40 rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">next</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default CommunicationChannelsCostumers