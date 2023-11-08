import { View, Text, TouchableOpacity, Switch, TextInput } from 'react-native'
import React, { useState } from 'react'
import Dots from './../../UI/Dots'
import { ScaleDecorator } from 'react-native-draggable-flatlist'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import TextField from './TextField'
import ImageField from './ImageField'
import IconField from './IconField'
import FileField from './FileField'

const Field = ({ item, drag, isActive }) => {
    const [fieldName, setFieldName] = useState('')
    const [edit, setEdit] = useState(false)
    const [items, setItems] = useState(item)

    const setName = () => {
        item.setFieldName(item.fieldId, fieldName)
        setItems(prev => ({
            ...prev,
            fieldName: fieldName
        }))
    }
    // console.log(item.contents[0].contentValue.slice(0,60));
    const onChange = (contentId, value) => {
        let contents = [...items.contents]
        const contentIndex = contents.findIndex(content => content.contentId == contentId)
        contents[contentIndex] = {
            ...contents[contentIndex],
            contentValue: value
        }

        setItems(prev => ({
            ...prev,
            contents: [...contents],
            isUpdated: true
        }))
    }
    const fields = items.contents.map(content => {
        switch (content.contentType) {
            case 'text':
                return (
                    <TextField key={content.contentId} id={content.contentId} edit={edit} value={content.contentValue} onChangeText={onChange} setSelectIcon={item.setSelectIcon}  />
                )
            case 'image':
                return (
                    <ImageField key={content.contentId} id={content.contentId} edit={edit} value={content.contentValue} changeValue={onChange} setSelectIcon={item.setSelectIcon}  />
                )
            case 'icon':
                return (
                    // <Text>jkasdkjnasdkj</Text>
                    <IconField key={content.contentId} id={content.contentId} edit={edit} value={content.contentValue} changeValue={onChange} setSelectIcon={item.setSelectIcon} setIconId={item.setIconId} fieldId={item.fieldId} />
                )
            case 'file':
                return (
                    <FileField key={content.contentId} id={content.contentId} edit={edit} value={content.contentValue} changeValue={onChange} setSelectIcon={item.setSelectIcon}  />
                )

            default:
                break;
        }
    })
    const saveChanges = () => {
        if (edit) {
            item.changeValue(items.fieldId, items)
            setEdit(false)
        }
        else {
            setEdit(true)
        }
    }
    const toggleIsActive = (value) => {
        const newItems = { ...items }
        newItems.isActive = value
        setItems(newItems)
    }
    return (
        <ScaleDecorator>
            <View className="relative w-full h-fit py-2 rounded-[10px] flex-row justify-between items-center border border-1 bg-white border-[#bfbfbf] my-2">
                <TouchableOpacity
                    onPressIn={() => {
                        item.setActivationDistance(0)
                        drag()
                    }}
                    onPressOut={() => {
                        item.setActivationDistance(100)
                    }}
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
                            <View className='relative h-fit '>
                                {fields}
                            </View>
                            {
                                edit &&
                                <Switch
                                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                                    thumbColor={items.isActive ? '#0060CD' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={value => toggleIsActive(value)}
                                    value={items.isActive}
                                />
                            }
                            <TouchableOpacity onPressOut={() => saveChanges()} className="pr-3">
                                {edit ?
                                    <FontAwesomeIcon color='#0060CD' size={25} icon={['fas', 'check']} />
                                    :
                                    <FontAwesomeIcon color='#0060CD' size={25} icon={['fas', 'pen']} />
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