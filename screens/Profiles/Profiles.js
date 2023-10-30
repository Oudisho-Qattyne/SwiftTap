import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../AppState'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'
import API from '../../API/API'
import Profile from './Profile'
import Hr from '../../UI/Hr'
import Account from '../Account/Account'
import HeaderTop from '../../UI/HeaderTop'

const Profiles = () => {
    const { AppState, CreateAccountDispatch, UiEventsDispatch , dispatch } = useContext(AppContext)
    // const [types, setTypes] = useState(AppState.profiles.types)
    const [types, setTypes] = useState(
        [
            {
                "id": 1,
                "name": "Personal"
            }
        ]
    )
    // const [chosenTypeId, setChosesnTypeId] = useState(AppState.profiles.types[0].id)
    const [chosenTypeId, setChosesnTypeId] = useState(1)
    const [profiles, setProfiles] = useState([])
    const [profile, setProfile] = useState(1)
    const fetchProfiles = async () => {
        const { res, err } = await API({
            type: 'profiles',
            payload: {
                CreateAccountDispatch: CreateAccountDispatch,
                UiEventsDispatch: UiEventsDispatch,
                type_id: chosenTypeId
            }
        })
        if (res.status == 200) {
            setProfiles(res.data.data.profiles)
        }
    }
    const fetchProfile = async (id) => {
        const { res, err } = await API({
            type: 'profile',
            payload: {
                CreateAccountDispatch: CreateAccountDispatch,
                UiEventsDispatch: UiEventsDispatch,
                type_id: chosenTypeId,
                profile:id
            }
        })
        if (res.status == 200) {
            await dispatch({type:'setState' , key:'profile' , value:res.data.data})
            setProfile(id)
        }
        console.log(err);
    }
    useEffect(() => {
        // fetchProfiles()
    }, [chosenTypeId])

    return (
        <View className="relative w-full h-full bg-black ">
            <HeaderTop />

            <ScrollView className='relative min-w-screen h-screen'>
                {
                    !profile &&
                    <Animated.View
                        className="relative h-screen z-10 rounded-tl-[50px] rounded-tr-[50px] overflow-hidden flex flex-col justify-start items-center bg-white p-5"
                        entering={SlideInDown}
                        exiting={SlideOutDown}
                    >
                        <View className='relative w-full px-5 py-2 bg-black rounded-full flex flex-row justify-center items-center'>
                            {types.map(type =>
                                <TouchableOpacity>
                                    <Text key={type.id} className='relative text-white text-center font-black px-5 py-2 rounded-full' style={{ backgroundColor: type.id == chosenTypeId && '#1776F2' }}>{type.name}</Text>
                                </TouchableOpacity>
                            )}

                        </View>
                        <Text className="relative w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[18px] pt-10 pb-5">Accounts</Text>
                        <Hr color='#1E1E1E' height={1} width={'100%'} />

                        <View className='relative w-full h-full flexflex-row flex-wrap py-10 '>
                            {
                                profiles.map(profile =>
                                    <TouchableOpacity key={profile.id} onPress={() => fetchProfile(profile.id)}>
                                        <Profile name={profile.name} image={profile.profileImage} setProfile={setProfile} />
                                    </TouchableOpacity>
                                )
                            }
                        </View>

                    </Animated.View>}
            </ScrollView>
            {
                profile &&
                <Account setProfile={setProfile} />
            }
        </View>
    )
}

export default Profiles