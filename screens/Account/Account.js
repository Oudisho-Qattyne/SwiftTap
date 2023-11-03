import { View, Text, ScrollView, FlatList, Button, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Background from '../../UI/Background'
import Controler from '../../UI/Sections/Controler'
import UserImage from '../../UI/Sections/UserImage'
import TextSection from '../../UI/Sections/TextSection'
import IconsSection from '../../UI/Sections/IconsSection'
import { AppContext } from '../../AppState'
import HeaderTop from '../../UI/HeaderTop'
import Navigator from './../../UI/Navigator'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'
import Share from '../Share/Share'


// import EditMainInfo from '../EditMainInfo'
// import EditContactCard from '../EditContactCard'
import Sittings from '../Sittings/Sittings'
import Costumize from '../Costumize/Costumize'
import Themes from '../Themes/Themes'
import NFC from '../Nfc/NFC'
import EditIcons from '../../UI/EditSections/EditIcons'
// import Share from './../Share/Share.js'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SelectIcon from '../../UI/Sections/SelectIcon'
import swifttapAxios from '../../axios/SwftTapAxios'
import Spinner from '../../UI/Spinner'
import API from '../../API/API'
import HeadingSection from '../../UI/Sections/HeadingSection'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import CertificatesSection from '../../UI/Sections/CertificatesSection'
import Contacts from '../../UI/Sections/Contacts'


const Account = ({ setProfile, chosenTypeId, profile }) => {
    const { AppState, dispatch, UiState, CreateAccountDispatch, UiEventsDispatch, UiDispatch } = useContext(AppContext)
    const [loading, setLoading] = useState(false)

    const fetchProfile = async (id) => {
        const { res, err } = await API({
            type: 'profile',
            payload: {
                CreateAccountDispatch: CreateAccountDispatch,
                UiEventsDispatch: UiEventsDispatch,
                type_id: chosenTypeId,
                profile: profile
            }
        })
        if (res.status == 200) {
            await dispatch({ type: 'setState', key: 'profile', value: res.data.data })
            let sections = {}
            res.data.data.profile.sections.map(section => {
                sections[section.sectionName] = false
            })
            UiDispatch({ function: 'setEditInformation', sections: sections })
        }
        else{
            console.log(err);
        }
    }


    // const [profile,setProfile] = useState(AppState.profiles.profiles[0].id)
    // const fetchProfile = async () => {
    //     setLoading(true)
    //     const {res , err} = await API({
    //         type: 'profile',
    //             payload: {
    //                 CreateAccountDispatch: CreateAccountDispatch,
    //                 UiEventsDispatch: UiEventsDispatch,
    //                 profile:profile
    //             }
    //     })
    //     console.log(res);
    //     console.log(err);
    //     setLoading(false)
    // }
    // useEffect(() => {
    //     // fetchProfile()
    // } , [])
    useEffect(() => {
        fetchProfile()
    }, [])

    return (

        <GestureHandlerRootView>

            <View className="relative flex flex-col justify-center items-center">
                <Animated.View
                    className="relative w-full h-auto z-10 rounded-tl-[50px] rounded-tr-[50px] overflow-hidden bg-white pb-20"
                    entering={SlideInDown}
                    exiting={SlideOutDown}
                >
                    <Controler setProfile={setProfile} profile={profile} />
                    <View className="w-screen h-full  ">
                        <ScrollView>
                            <UserImage />
                            {AppState.profile.sections.map(
                                section => {
                                    switch (section.sectionType) {
                                        case 'headings':
                                            return (
                                                <HeadingSection items={section.fields} />
                                            )
                                        case 'contact':
                                            return (
                                                <Contacts items={section.fields} />
                                            )
                                        case 'icons':
                                            return (
                                                <IconsSection title={section.sectionName} items={section.fields} />
                                            )
                                        case 'posts':
                                            return (
                                                <CertificatesSection title={section.sectionName} items={section.fields} />
                                            )
                                        default:
                                            break;
                                    }
                                }
                            )}
                        </ScrollView>
                    </View>
                </Animated.View>
                <Navigator />
                {
                    Object.keys(UiState.editInformation).map(key =>
                        UiState.editInformation[key] &&
                        <EditIcons section={key} />
                    )
                }
                {
                    UiState.pages.Share &&
                    <Share />
                }
                {
                    UiState.pages.Costumize &&
                    <Costumize />
                }
                {
                    UiState.pages.Sittings &&
                    <Sittings />
                }
                {
                    UiState.pages.Theme &&
                    <Themes />
                }
                {
                    UiState.pages.NFC &&
                    <NFC />
                }
                {
                    false &&
                    <SelectIcon />
                }
            </View>

        </GestureHandlerRootView>





        // <View className="relative w-full flex flex-col justify-center items-center">
        //     {
        //         loading ? 
        //         <Spinner/>
        //         :
        //         <Text>account</Text>


        //     }
        // </View>

        // <GestureHandlerRootView>

        //     <View className="relative w-full h-full bg-black ">
        //         <HeaderTop />

        //         <Animated.View
        //             className="relative h-auto z-10 rounded-tl-[50px] rounded-tr-[50px] overflow-hidden bg-white"
        //             style={{ height: UiState.pages.Costumize ? '50%' : '100%' }}
        //             entering={SlideInDown}
        //             exiting={SlideOutDown}
        //         >
        //             {
        //                 AppState.theme.backGround.type == 4 || AppState.theme.backGround.type == 3 &&
        //                 <Background />
        //             }
        //             <Controler />
        //             <ScrollView>
        //                 <Background />
        //                 <View className="w-screen h-full pb-36 pt-10">
        //                     <UserImage />
        //                     <TextSection />
        //                     {
        //                         Object.keys(AppState.informations).map(
        //                             items => <IconsSection title={items} />
        //                         )
        //                     }
        //                     {
        //                         // Object.keys(AppState.informations).map(
        //                         //     item =>
        //                         // )
        //                     }

        //                 </View>
        //             </ScrollView>
        //         </Animated.View>
        //         {
        //             Object.keys(UiState.editInformation).map(key =>
        //                 UiState.editInformation[key] &&
        //                 <EditIcons section={key} />
        //             )
        //         }
        //         {/* {
        //                         UiState.editFlashContacts &&
        //                         <EditFlashContacts />
        //                     }
        //                     {
        //                         UiState.editSocialsAndLinks &&
        //                         <EditSocialsAndLinks />
        //                     }

        //                     {
        //                         UiState.editDocuments &&
        //                         <EditDocuments />
        //                     }
        //                     {
        //                         UiState.editMainInfo &&
        //                         <EditMainInfo />
        //                     }
        //                     {
        //                         UiState.editContactCard &&
        //                         <EditContactCard />
        //                     } */}
        //         {
        //             UiState.pages.Share &&
        //             <Share />
        //         }
        //         <Costumize />
        //         {
        //             UiState.pages.Sittings &&
        //             <Sittings />
        //         }
        //         {
        //             UiState.pages.Theme &&
        //             <Themes />
        //         }
        //         {
        //             UiState.pages.NFC &&
        //             <NFC />
        //         }
        //     </View>
        // </GestureHandlerRootView>
    )
}

export default Account