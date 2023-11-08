import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../AppState'
import Animated, { BounceIn } from 'react-native-reanimated'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const Post = ({ item }) => {
  const {UiState , dispatch} = useContext(AppContext)
  const image = item.contents.filter(content => content.contentType == 'image')[0].contentValue
  const id = item.contents.filter(content => content.contentType == 'image')[0].contentId
  const text = item.contents.filter(content => content.contentType == 'text')[0].contentValue
  console.log(image);
  return (
    <View className='relative w-fit h-fit rounded-[20px] flex flex-col justify-start items-center py-5 px-4 overflow-hidden'>
      {
                UiState.pages.editable &&
                <Animated.View className='absolute top-5 right-5 z-20' entering={BounceIn} >
                    <TouchableOpacity style={{ zIndex: 20 }} onPressOut={() => dispatch({ type: 'deleteItem', fieldId: item.fieldId, sectionId: item.sectionId })} className='min-w-[22px] min-h-[22px] rounded-full flex justify-center items-center bg-[#FF4656] '>
                        <FontAwesomeIcon color='#ffffff' size={10} icon={['fas', 'minus']} />
                    </TouchableOpacity>
                </Animated.View>
            }
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