import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Hr from '../../UI/Hr'
import Sitting from './Sitting'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'

const Sittings = () => {
    const Sittings = [
        {
            id: 1,
            name: 'Language',
            icon: ['fas', 'globe'],
            dropList: true,
            switchButton: false,
        },
        {
            id: 2,
            name: 'Notification',
            icon: ['fas', 'bell'],
            dropList: false,
            switchButton: true,
        },
        {
            id: 3,
            name: 'Change Password',
            icon: ['fas', 'lock'],
            dropList: true,
            switchButton: false,
        },
        {
            id: 4,
            name: 'Change Email',
            icon: ['fas', 'envelope'],
            dropList: true,
            switchButton: false,
        },
        {
            id: 5,
            name: 'Enable Location',
            icon: ['fas', 'location-dot'],
            dropList: false,
            switchButton: true,
        },
        {
            id: 6,
            name: 'Contact Us',
            icon: ['fas', 'phone'],
            dropList: false,
            switchButton: false
        }
    ]


    return (
        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className='absolute top-20 w-screen h-full bg-white z-10 justify-start items-center px-5 pb-[80px]'>
            <View className="w-full flex-row justify-center items-center gap-3 pb-10">
                <FontAwesomeIcon icon={['fas', 'gear']} size={30} color='#0060CD' />
                <Text className="text-[16px] text-[#0060CD]">App Settings</Text>
            </View>
            <FlatList
                data={Sittings}
                renderItem={(item) => {
                    return (
                        <Sitting {...item.item} />
                    )
                }}
            />
        </Animated.View>
    )
}

export default Sittings