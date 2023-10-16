import { View, Text, Pressable, AppState } from 'react-native'
import React, { useContext, useState } from 'react'
import { ScrollView } from 'react-native'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'
import DraggableFlatList from 'react-native-draggable-flatlist'
import { AppContext } from '../../AppState'
import Field from '../Fields/Field'
import { TouchableOpacity } from 'react-native-gesture-handler'

const EditIcons = ({ section }) => {
    const { UiState, UiDispatch, AppState, dispatch } = useContext(AppContext)
    const [items, setItems] = useState(AppState.informations[section])
    return (
        <View className='absolute w-screen h-full  z-10 justify-center items-center '>
            <ScrollView className='relative min-w-full min-h-screen z-20 '>
                <View className="min-w-full min-h-full">
                    <Pressable onPress={() => UiDispatch({ toggle: 'edit', section: section })}>
                        <View className="relative min-w-full min-h-[500px] " />
                        <View className="absolute min-w-full min-h-screen top-0 left-0 bg-black opacity-30 z-20" />
                    </Pressable>
                    <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="min-w-full -top-10 h-full justify-start items-center py-10 pb-20 bg-white rounded-tr-[50px] rounded-tl-[50px] ">
                        <Text className='text-black text-2xl'>{section}</Text>
                        <DraggableFlatList
                            containerStyle={{ width: '100%' }}
                            contentContainerStyle={{ padding: 20 }}
                            onDragEnd={data => setItems(data)}
                            data={items}
                            renderItem={(item) => {
                                return (
                                    <Field {...item} />
                                )
                            }
                            }
                            keyExtractor={(item) => item.id}
                        />
                        <View className="relative w-full flex flex-row justify-center items-center ">
                            <TouchableOpacity onPressOut={() => { UiDispatch({ toggle: 'editInformation', section: section }) }} className="relative w-[150px] h-[46px] border border-1 border-[#bfbfbf] rounded-full flex justify-center items-center mx-2">
                                <Text className='relative text-center text-[13px] text-[#707070]'>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPressOut={() => { }} className="relative w-[150px] h-[46px] border border-1 border-[#bfbfbf] bg-[#0060CD] rounded-full flex justify-center items-center mx-2">
                                <Text className='relative text-center text-[13px] text-white'>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>
                </View>
            </ScrollView>

        </View>
    )
}

export default EditIcons