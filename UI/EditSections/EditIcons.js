import { View, Text, Pressable, AppState, TextInput, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import Animated, { SlideInDown, SlideInLeft, SlideInRight, SlideOutDown, SlideOutLeft, SlideOutRight } from 'react-native-reanimated'
import DraggableFlatList from 'react-native-draggable-flatlist'
import { AppContext } from '../../AppState'
import Field from '../Fields/Field'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import SelectIcon from '../Sections/SelectIcon'

const EditIcons = ({ section }) => {
    const { UiState, UiDispatch, AppState, dispatch } = useContext(AppContext)
    const sectionData = AppState.profile.sections.filter(item => item.sectionName == section)[0]
    const [items, setItems] = useState(sectionData.fields)
    const [selectIcon, setSelectIcon] = useState(false)
    const changeValue = (fieldId, value) => {
        const newItems = [...items]
        const fieldIndex = newItems.findIndex(item => item.fieldId == fieldId)
        newItems[fieldIndex] = {
            ...newItems[fieldIndex],
            contents: value
        }
        setItems(newItems)
    }
    // let sdfsdf = {
    //     "contents": [
    //         { "contentId": 1, "contentType": "text", "contentValue": "", "isActive": true },
    //         { "contentId": 2, "contentType": "icon", "contentValue": "fab|whatsapp", "isActive": true }
    //     ],
    //     "fieldId": 3,
    //     "fieldName": "Whatsapp"
    // }

    const getMaxId = () => {
        let maxId = 0
        for (let i = 0; i < items.length; i++) {
            if (items[i].fieldId > maxId) {
                maxId = items[i].fieldId
            }
        }
        return (maxId)
    }
const setFieldName = (fieldId , fieldName) => {
    const newItems = [...items]
    const fieldIndex = newItems.findIndex(field => field.fieldId==fieldId)
    newItems[fieldIndex].fieldName = fieldName
    setItems(newItems)
}
    const addField = () => {
        const exampl = { ...items[0] }
        const newContents = exampl.contents.map(content => {
            const newContent = {
                contentId: content.contentId,
                contentType: content.contentType,
                contentValue: '',
                isActive: true
            }
            return (newContent)
        })
        const newId = getMaxId() + 1

        const newField = {
            contents: newContents,
            fieldId: newId,
            fieldName: ''
        }
        setItems(prev => {
            const newItems = [...prev]
            newItems.push(newField)
            return (
                newItems
            )
        })
    }

    return (
        <View className='absolute w-screen h-full  z-10 justify-center items-center '>
            <ScrollView className='relative min-w-full min-h-screen z-20 '>
                <View className="min-w-full min-h-full">
                    <Pressable onPress={() => UiDispatch({ function: 'toggle', section: section })}>
                        <View className="relative min-w-full min-h-[500px] " />
                        <View className="absolute min-w-full min-h-screen top-0 left-0 bg-black opacity-30 z-20" />
                    </Pressable>
                    <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="min-w-full -top-10 h-full justify-start items-center py-10 pb-20 bg-white rounded-tr-[50px] rounded-tl-[50px] ">
                        <View className="relative flex flex-row justify-center items-center">
                            <Text className='relative text-black text-2xl'>{section}</Text>

                        </View>
                        {
                            !selectIcon &&
                            <Animated.View entering={SlideInLeft} exiting={SlideOutLeft} className="flex flex-col justify-center items-center">

                                <DraggableFlatList
                                    containerStyle={{ width: '100%' }}
                                    contentContainerStyle={{ padding: 20 }}
                                    onDragEnd={data => setItems(data.data)}
                                    data={items}
                                    renderItem={(item) => {
                                        let items = {
                                            ...item,
                                            item: {
                                                ...item.item,
                                                changeValue: changeValue,
                                                setSelectIcon: setSelectIcon,
                                                setFieldName:setFieldName
                                            }
                                        }
                                        return (
                                            <Field {...items} />
                                        )
                                    }
                                    }
                                    ListFooterComponent={() =>
                                        <TouchableOpacity onPress={() => addField()} className="relative w-full h-fit py-2 rounded-[10px] flex-row justify-between items-center border border-1 bg-white border-[#bfbfbf] my-2">
                                            <Text className=" relative w-full text-[#bfbfbf] font-black text-center">Add Field</Text>
                                        </TouchableOpacity>
                                    }
                                    keyExtractor={(item) => {
                                        return (
                                            item.fieldId
                                        )
                                    }}
                                />
                            </Animated.View>}
                        {
                            !selectIcon &&
                            <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative w-full flex flex-row justify-center items-center ">
                                <TouchableOpacity onPressOut={() => { UiDispatch({ function: 'toggle', section: section }) }} className="relative w-[150px] h-[46px] border border-1 border-[#bfbfbf] rounded-full flex justify-center items-center mx-2">
                                    <Text className='relative text-center text-[13px] text-[#707070]'>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPressOut={() => {
                                    dispatch({ type: 'setInformation', sectionName: section, fields: items })
                                    UiDispatch({ function: 'toggle', section: section })
                                }} className="relative w-[150px] h-[46px] border border-1 border-[#bfbfbf] bg-[#0060CD] rounded-full flex justify-center items-center mx-2">
                                    <Text className='relative text-center text-[13px] text-white'>Save</Text>
                                </TouchableOpacity>
                            </Animated.View>
                        }
                        {
                            selectIcon &&
                            <SelectIcon setSelectIcon={setSelectIcon} />
                        }
                    </Animated.View>
                </View>
            </ScrollView>

        </View>
    )
}

export default EditIcons