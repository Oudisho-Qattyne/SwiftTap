import { View, Text, Image } from 'react-native'
import React from 'react'

const Post = ({ item }) => {
  const image = item.contents.filter(content => content.contentType == 'image')[0].contentValue
  const text = item.contents.filter(content => content.contentType == 'text')[0].contentValue
  return (
    <View className='relative w-fit h-fit rounded-[20px] flex flex-col justify-start items-center py-5 px-4 overflow-hidden'>
      {
        image != '' &&
        <Image className='relative h-[200px] w-[200px] bg-red-200' source={{ uri: image }} />
      }
      {
        text != '' &&
        <Text className="relative text-black font-black p-3 m-3">{text} </Text>
      }

    </View>
  )
}

export default Post