import { ScrollView, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
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


const Layout = () => {
    // useTheme()
    const {dispatch ,UiEvents} = useContext(AppContext)


    return (
            <View className="relative h-full z-10">
                {
                    UiEvents.logedIn &&
                    <View className='w-screen h-full justify-center items-center'>
                        <Profiles/>
                        {/* <Navigator /> */}
                    </View>


                }
                {
                    !UiEvents.logedIn &&
                    <CreateAccount />
                }
                {
                    UiEvents.loading && 
                    <Loading/>
                }
            </View>
    )
}

export default Layout