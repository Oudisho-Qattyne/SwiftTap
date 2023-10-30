import { View, Text , FlatList } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import ShareType from './ShareType'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'

const Share = () => {
    const Shares = [
        {
            id:1,
            name:"Link",
            icon:['fas' , 'link'],

        },
        {
            id:2,
            name:"QR Code",
            icon:['fas' , 'qrcode'],

        },
        {
            id:3,
            name:"Send Via",
            icon:['fas' , 'share'],

        },
    ]
  return (
    <Animated.View entering={SlideInDown} exiting={SlideOutDown} className='absolute top-0 pt-5 w-screen h-full bg-white z-[10] rounded-tl-[50px] rounded-tr-[50px] overflow-hidden justify-start items-center px-5 pb-[80px]'  >
      <View className="w-full flex-row justify-center items-center gap-3 pb-10">
                <FontAwesomeIcon icon={['fas', 'share-from-square']} size={30} color='#0060CD' />
                <Text className="text-[16px] text-[#0060CD]">Share</Text>
            </View>
            <FlatList
            style={{width:'100%'}}
            data={Shares}
            renderItem={(item) => {
                return(
                    <ShareType {...item.item}/>
                )
            }}
            />
    </Animated.View >
  )
}

export default Share