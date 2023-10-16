import { View, Text } from 'react-native'
import React from 'react'

const Dots = () => {
  return (
    <View className="relative w-[20px] flex flex-wrap flex-row  justify-center items-center ">
      <View className='w-1 h-1 m-[2px] bg-[#bfbfbf] rounded-full'/>
      <View className='w-1 h-1 m-[2px] bg-[#bfbfbf] rounded-full'/>
      <View className='w-1 h-1 m-[2px] bg-[#bfbfbf] rounded-full'/>
      <View className='w-1 h-1 m-[2px] bg-[#bfbfbf] rounded-full'/>
      <View className='w-1 h-1 m-[2px] bg-[#bfbfbf] rounded-full'/>
      <View className='w-1 h-1 m-[2px] bg-[#bfbfbf] rounded-full'/>
    </View>
  )
}

export default Dots