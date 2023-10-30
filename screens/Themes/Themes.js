import { View, Text } from 'react-native'
import React from 'react'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'

const Themes = () => {
  return (
    <Animated.View entering={SlideInDown} exiting={SlideOutDown} className='absolute top-0 pt-5 w-screen h-full bg-white z-[10] rounded-tl-[50px] rounded-tr-[50px] overflow-hidden justify-start items-center px-5 pb-[80px]'  >
      <Text>Themes</Text>
    </Animated.View>
  )
}

export default Themes