import { View, Text, ScrollView, FlatList, Button } from 'react-native'
import React, { useContext } from 'react'
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


const Account = () => {
    const { AppState, dispatch, UiState } = useContext(AppContext)

    return (
        <GestureHandlerRootView>

            <View className="relative w-full bg-black ">
                <HeaderTop />

                <Animated.View
                    className="relative h-auto z-10 rounded-tl-[50px] rounded-tr-[50px] overflow-hidden"
                    style={{ height: UiState.pages.Costumize ? '50%' : '100%' }}
                    entering={SlideInDown}
                    exiting={SlideOutDown}
                >
                    {
                        AppState.theme.backGround.type == 4 || AppState.theme.backGround.type == 3 &&
                        <Background />
                    }
                    <Controler />
                    <ScrollView>
                        {
                            AppState.theme.backGround.type != 4 || AppState.theme.backGround.type != 3 &&
                            <Background />
                        }
                        <View className="w-screen h-full pb-36 pt-10">
                            <UserImage />
                            <TextSection />
                            {
                                Object.keys(AppState.informations).map(
                                    items => <IconsSection title={items} />
                                )
                            }
                            {
                                // Object.keys(AppState.informations).map(
                                //     item =>
                                // )
                            }

                        </View>

                    </ScrollView>
                </Animated.View>
                {
                    Object.keys(UiState.editInformation).map(key =>
                        UiState.editInformation[key] &&
                        <EditIcons section={key} />
                    )
                }
                {/* {
                                UiState.editFlashContacts &&
                                <EditFlashContacts />
                            }
                            {
                                UiState.editSocialsAndLinks &&
                                <EditSocialsAndLinks />
                            }

                            {
                                UiState.editDocuments &&
                                <EditDocuments />
                            }
                            {
                                UiState.editMainInfo &&
                                <EditMainInfo />
                            }
                            {
                                UiState.editContactCard &&
                                <EditContactCard />
                            } */}
                {
                    UiState.pages.Share &&
                    <Share />
                }
                <Costumize />
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
            </View>
        </GestureHandlerRootView>
    )
}

export default Account