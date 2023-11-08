import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import Welcome from './Welcome'
import CreateNewAccount from './CreateNewAccount'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { AppContext } from '../../AppState'
import Pagination from '../../UI/Pagination'
import StartJourney from './Individual/StartJourney'
import Verification from './Individual/Verification'
import Information from './Individual/Information'
import Contacts from './Individual/Contacts'
import SelectImage from './Individual/SelectImage'
import Style from './Individual/Style'
import Terms from './Individual/Terms'
import ChooseYourPlan from './Individual/ChooseYourPlan'
import BakeAccount from './Individual/BakeAccount'


import StartJourneyBusiness from './Business/StartJourneyBusiness'
import VerificationBusiness from './Business/VerificationBusiness'
import ContactsBusiness from './Business/ContactsBusiness'
import InformationBusiness from './Business/InformationBusiness'
import CompanyInterests from './Business/CompanyInterests'
import Location from './Business/Location'
import Members from './Business/Members'
import CommunicationChannels from './Business/CommunicationChannels'
import CommunicationChannelsCostumers from './Business/CommunicationChannelsCostumers'
import UsedNfc from './Business/UsedNfc'
import NfcProducts from './Business/NfcProducts'
import SelectImageBusiness from './Business/SelectImageBusiness'
import StyleBusiness from './Business/StyleBusiness'
import TermsBusiness from './Business/TermsBusiness'
import BakeAccountBusiness from './Business/BakeAccountBusiness'

const CreateAccount = () => {
    const [createNewAccount, setCreateNewAccount] = useState(false)
    const { CreateAccountState, CreateAccountDispatch } = useContext(AppContext)

    return (
        <ScrollView className="relative h-full ">

            <View className=" relative w-screen h-screen">
                <Pagination />
                <View className="relative h-full bg-black">
                    {
                        CreateAccountState.index == 1 &&
                        <Welcome />
                    }
                    {
                        CreateAccountState.index == 2 &&
                        <CreateNewAccount />
                    }
                    {CreateAccountState.Individual ?
                        <View>

                            {
                                CreateAccountState.index == 3 &&
                                <StartJourney />
                            }
                            {
                                CreateAccountState.index == 4 &&
                                <Verification />
                            }
                            {
                                CreateAccountState.index == 5 &&
                                <Information />
                            }
                            {
                                CreateAccountState.index == 6 &&
                                <Contacts />
                            }
                            {
                                CreateAccountState.index == 7 &&
                                <SelectImage />
                            }
                            {
                                CreateAccountState.index == 8 &&
                                <Style />
                            }
                            {
                                CreateAccountState.index == 9 &&
                                < Terms />
                            }
                            {
                                CreateAccountState.index == 10 &&
                                <ChooseYourPlan />
                            }
                            {
                                CreateAccountState.index == 11 &&
                                <BakeAccount />
                            }
                        </View>
                        :
                        <View>
                            {
                                CreateAccountState.index == 3 &&
                                <StartJourneyBusiness />
                            }
                            {
                                CreateAccountState.index == 4 &&
                                <VerificationBusiness />
                            }
                            {
                                CreateAccountState.index == 5 &&
                                <ContactsBusiness />
                            }
                            {
                                CreateAccountState.index == 6 &&
                                <InformationBusiness />
                            }
                            {
                                CreateAccountState.index == 7 &&
                                <CompanyInterests />
                            }
                            {
                                CreateAccountState.index == 8 &&
                                <Location />
                            }
                            {
                                CreateAccountState.index == 9 &&
                                <Members/>
                            }
                            {
                                CreateAccountState.index == 10 &&
                                <CommunicationChannels/>
                            }
                            {
                                CreateAccountState.index == 11 &&
                                <CommunicationChannelsCostumers/>
                            }
                            {
                                CreateAccountState.index == 12 &&
                                <UsedNfc/>
                            }
                            {
                                CreateAccountState.index == 13 &&
                                <NfcProducts/>
                            }
                            {
                                CreateAccountState.index == 14 &&
                                <SelectImageBusiness/>
                            }
                            {
                                CreateAccountState.index == 15 &&
                                <StyleBusiness/>
                            }
                            {
                                CreateAccountState.index == 16 &&
                                <TermsBusiness/>
                            }
                            {
                                CreateAccountState.index == 17 &&
                                <BakeAccountBusiness/>
                            }
                        </View>
                    }
                </View>
                {/* <FlatList
                    contentContainerStyle={{ height: '100%', position: 'relative', backgroundColor: 'black' }}
                    data={CreateAccountState.welcomPages}
                    renderItem={(item) => {
                        if (item.item.id == CreateAccountState.index) {
                            switch (item.item.name) {
                                case 'welcome':
                                    return (
                                        <Animated.View exiting={SlideOutDown}>
                                        </Animated.View>
                                    )
                                    break;
                                case 'howToUse':
                                    return (
                                        <Animated.View exiting={SlideOutDown}>
                                        </Animated.View>
                                    )
                                case 'startJourney':
                                    return (
                                        <Animated.View exiting={SlideOutDown}>
                                        </Animated.View>
                                    )
                                case 'verification':
                                    return (
                                        <Animated.View exiting={SlideOutDown}>
                                        </Animated.View>
                                    )
                                case 'information':
                                    return (
                                        <Animated.View exiting={SlideOutDown}>
                                        </Animated.View>
                                    )
                                case 'contacts':
                                    return (
                                        <Animated.View exiting={SlideOutDown}>
                                        </Animated.View>
                                    )
                                case 'image':
                                    return (
                                        <Animated.View exiting={SlideOutDown}>
                                        </Animated.View>
                                    )
                                case 'style':
                                    return (
                                        <Animated.View exiting={SlideOutDown}>
                                        </Animated.View>
                                    )
                                case 'terms':
                                    return (
                                        <Animated.View exiting={SlideOutDown}>
                                        </Animated.View>
                                    )
                                default:
                                    break;
                            }
                        }
                    }} /> */}

            </View>
        </ScrollView>
    )
}

export default CreateAccount