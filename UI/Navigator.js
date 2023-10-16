import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Icon from './Icon'
import NavItem from './NavItem'
import { AppContext } from '../AppState'
import Animated from 'react-native-reanimated'

const Navigator = () => {
    const { AppState, dispatch , UiState , UiDispatch } = useContext(AppContext)
    const [showNavigator , setShowNavigator] = useState(false)
    const [navs , setNavs] = useState(
        [
            {
                id: 1,
                icon: ['fas', 'share-from-square'],
                name: 'Share',
            },
            {
                id: 2,
                icon: ['fas', 'circle-half-stroke'],
                name: 'Costumize',
            },
            {
                id: 3,
                icon: ['fas', 'gear'],
                name: 'Sittings',
            },
            {
                id: 4,
                icon: ['fas', 'brush'],
                name: 'Theme',
            },
            {
                id: 5,
                icon: ['fab', 'nfc-symbol'],
                name: 'NFC',
            },
        ]
    )
    return (
            <Animated.View 
            className='absolute bottom-0 w-full h-[80px] flex-row justify-center bg-white items-center z-[15] '
            style={
                UiState.pages.showNavigator
                ? { bottom: 0 }
                : { bottom: -80 }
            }>
                <TouchableOpacity
                    onPressOut={() => {
                        UiDispatch({toggle:'pages' , section:'showNavigator'})
                        // dispatch({ type: 'setNavs', id: -1 })
                    }
                    }
                    className=' absolute -top-10 w-[110px] h-[110px] rounded-full bg-white flex justify-start items-center p-2 '>
                    <FontAwesomeIcon style={
                        UiState.pages.showNavigator
                            ? { transform: [{ rotate: '180deg' }] }
                            : { transform: [{ rotate: '0deg' }] }
                    }
                        color={UiState.pages.showNavigator ? '#bfbfbf' : '#0060CD'}
                        size={30}
                        icon={['fas', 'angle-up']} />
                </TouchableOpacity>
                <FlatList
                    contentContainerStyle={{ flexDirection: "row", minWidth: '100%', justifyContent: 'center', alignItems: 'center' }}
                    data={navs}
                    renderItem={(item) => <NavItem {...item.item} />}
                    keyExtractor={(item) => item.id}
                />
                {/* {
                navs.map(nav =>
                    <NavItem
                        key={nav.id}
                        icon={nav.icon}
                        name={nav.name} />
                )
            } */}
            {/* <FlatList
                data={AppState.navs}
                renderItem={(item) => {
                    switch (item.item.name) {
                        case 'Share':
                            return (
                                <View className="w-screen h-full">
                                    <Text>Share</Text>
                                </View>
                            )
                        case 'Sittings':
                            return (
                                <View className="absolute w-screen h-full bg-white">
                                    <Text>Share</Text>
                                </View>
                            )

                        default:
                            break;
                    }
                }} /> */}
            </Animated.View>
    )
}

export default Navigator