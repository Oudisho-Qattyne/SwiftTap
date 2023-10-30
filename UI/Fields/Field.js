import { View, Text, TouchableOpacity, AppState, TextInput } from 'react-native'
import React, { useState } from 'react'
import Dots from './../../UI/Dots'
import { ScaleDecorator } from 'react-native-draggable-flatlist'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import TextField from './TextField'
import ImageField from './ImageField'
import IconField from './IconField'

const Field = ({ item, drag, isActive }) => {
    const [fieldName, setFieldName] = useState('')
    const [edit, setEdit] = useState(false)
    const [items, setItems] = useState(item)


    const setName = () => {
        item.setFieldName(item.fieldId , fieldName)
        setItems(prev => ({
            ...prev,
            fieldName: fieldName
        }))
    }

    const onChange = (contentId, value) => {
        let contents = [...items.contents]
        const contentIndex = contents.findIndex(content => content.contentId == contentId)
        contents[contentIndex] = {
            ...contents[contentIndex],
            contentValue: value
        }

        setItems(prev => ({
            ...prev,
            contents: [...contents]
        }))
    }
    const fields = items.contents.map(content => {
        switch (content.contentType) {
            case 'text':
                return (
                    <TextField key={content.contentId} id={content.contentId} edit={edit} value={content.contentValue} onChangeText={onChange} setSelectIcon={item.setSelectIcon} />
                )
            case 'image':
                return (
                    <ImageField key={content.contentId} id={content.contentId} edit={edit} value={content.contentValue} changeValue={onChange} setSelectIcon={item.setSelectIcon} />
                )
            case 'icon':
                return (
                    // <Text>jkasdkjnasdkj</Text>
                    <IconField key={content.contentId} id={content.contentId} edit={edit} value={content.contentValue} changeValue={onChange} setSelectIcon={item.setSelectIcon} />
                )

            default:
                break;
        }
    })
    const saveChanges = () => {
        if (edit) {
            item.changeValue(items.fieldId, items.contents)
            setEdit(false)
        }
        else {
            setEdit(true)
        }
    }
    return (
        <ScaleDecorator>
            <View className="relative w-full h-fit py-2 rounded-[10px] flex-row justify-between items-center border border-1 bg-white border-[#bfbfbf] my-2">
                <TouchableOpacity
                    onPressIn={drag}
                    disabled={isActive}
                    className="relative min-w-[40px] flex justify-center items-center ">
                    <Dots />
                </TouchableOpacity>
                {
                    items.fieldName != '' ?
                        <>
                            <Text className="text-black">
                                {items.fieldName}
                            </Text>
                            <View className='relative '>
                                {fields}
                            </View>
                            <TouchableOpacity onPressOut={() => saveChanges()} className="pr-3">
                                {edit ?
                                    <FontAwesomeIcon color='#0060CD' icon={['fas', 'check']} />
                                    :
                                    <FontAwesomeIcon color='#0060CD' icon={['fas', 'pen']} />
                                }
                            </TouchableOpacity>
                        </>
                        :
                        <View className="relative w-fit h-fit py-2 rounded-[10px] justify-between items-center p-5 my-2">
                            <Text className="text-black ">field name</Text>
                            <View className="relative w-fit h-fit py-2 rounded-[10px] flex-row justify-between items-center p-5 my-2">
                                <TextInput className="relative w-[70%] text-black border border-1 bg-white border-[#bfbfbf] rounded-lg p-1" autoFocus={true} value={fieldName} onChangeText={(value) => setFieldName(value)} />
                                <TouchableOpacity onPress={() => setName()} className="relative py-2 px-2 bg-[#0060CD] rounded-full mx-1">
                                    <Text className="text-white font-black">set</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                }
            </View>
        </ScaleDecorator>

    )
}

export default Field