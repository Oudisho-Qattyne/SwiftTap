import { AppState, ScrollView, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import useTheme from './Hooks/useTheme'
import { AppContext } from './AppState'
import TextSection from './UI/Sections/TextSection'
import UserImage from './UI/Sections/UserImage'
import IconsSection from './UI/Sections/IconsSection'
import Controler from './UI/Sections/Controler'
import Background from './UI/Background'
import Account from './screens/Account/Account'
import CreateAccount from './screens/CreateAccount/CreateAccount'
import Navigator from './UI/Navigator'
import Loading from './UI/Loading'
import Profiles from './screens/Profiles/Profiles'
import * as SecureStore from 'expo-secure-store';
import API from './API/API'


const Layout = () => {
    // useTheme()
    const { dispatch, UiEvents, CreateAccountDispatch, UiEventsDispatch , AppState } = useContext(AppContext)
    const checkRefreshToken = async () => {
        let refresh_token = await SecureStore.getItemAsync('refreshToken');
        if (refresh_token) {
            const { res, err } = await API({
                type: 'profiles',
                payload: {
                    CreateAccountDispatch: CreateAccountDispatch,
                    UiEventsDispatch: UiEventsDispatch,
                }
            })
            if (res.status == 200) {
                await dispatch({ type: 'setState', key: 'profiles', value: res.data.data })
                await UiEventsDispatch({ event: 'logedIn', value: true })

            }
        }

    }
    useEffect(() => {
        // checkRefreshToken()
    } ,[])

    return (
        <View className="relative h-full z-10">
            {
                UiEvents.logedIn &&
                <View className='w-screen h-full justify-center items-center'>
                    <Profiles />
                    {/* <Navigator /> */}
                </View>


            }
            {
                !UiEvents.logedIn &&
                <CreateAccount />
            }
            {
                UiEvents.loading &&
                <Loading />
            }
        </View>
    )
}

export default Layout