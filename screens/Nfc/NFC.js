import { View, Text } from 'react-native'
import React from 'react'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'

const NFC = () => {
  return (
    <Animated.View entering={SlideInDown} exiting={SlideOutDown} className='absolute top-20 w-screen h-full bg-white z-10 justify-center items-center pb-[80px]'>
      <Text>NFC</Text>
    </Animated.View>
  )
}

export default NFC