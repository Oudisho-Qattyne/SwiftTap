import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import ImageField from './ImageField';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as ImagePicker from 'expo-image-picker';

const IconField = ({ id, edit, value, changeValue, setSelectIcon }) => {
    const [iconType, setIconType] = useState('icon')
    const [open, setOpen] = useState(false)
    const [iconTypes, setIconTypes] = useState(
        [
            { label: 'image', value: 'image' },
            { label: 'icon', value: 'icon' }
        ]
    )

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
            base64: true
        });

        if (!result.canceled) {
            changeValue(id, `image|data:${result.assets[0].type};base64,${result.assets[0].base64}`)
        }
    };

    const type = value.split('|')
    useEffect(() => {
        if (type[0] == 'fas' || type[0] == 'fab') {
            setIconType('icon')
        }
        else if (type[0] == 'image') {
            setIconType('image')
        }
    }, [])

    return (
        <View className='relative w-fit h-32 flex flex-row justify-center items-center p-2'>
            {
                edit &&
                <View className="relative  z-[30] ">
                    <DropDownPicker
                        style={{ width: 100, maxHeight: 20, backgroundColor: 'white', zIndex: 20 }}
                        itemSeparator={true}
                        maxHeight={100}
                        open={open}
                        value={iconType}
                        items={iconTypes}
                        setOpen={setOpen}
                        onSelectItem={(item) => {
                            return (
                                setIconType(item.value)
                            )
                        }}
                    />
                </View>
            }
            {
                iconType == 'image' &&
                <View className="m-3">
                {edit &&
                    <TouchableOpacity onPressOut={pickImage} className="absolute w-20 h-20 rounded-full flex justify-center items-center z-30">
                        <View className="absolute w-20 h-20 rounded-full  flex justify-center items-center  bg-black opacity-25" />
                        <FontAwesomeIcon color='white' icon={['fas', 'pen']} />
                    </TouchableOpacity>
                }
                {
                (edit || value !='') ?
                <Image source={{ uri: type[1] }} className="relative w-20 h-20 rounded-full z-0" />
                :
                <Text className='text-black font-black'>no image</Text>
            }
        </View>
                // <ImageField key={id} id={id} edit={edit} value={value} changeValue={changeValue} />
            }
            {
                iconType == 'icon' &&
                <View className="relative flex justify-center items-center rounded-full m-3">
                    {
                        edit &&
                        <TouchableOpacity onPress={() => setSelectIcon(true)} className="absolute w-20 h-20 rounded-full flex justify-center items-center z-30">
                            <View className="absolute w-20 h-20 rounded-full  flex justify-center items-center  bg-black opacity-25" />
                            <FontAwesomeIcon color='white' icon={['fas', 'pen']} />
                        </TouchableOpacity>
                    }
                    {
                (edit || value !='') ?
                <FontAwesomeIcon icon={type} size={65} />
                :
                <Text className='text-black font-black'>no icon</Text>
            }
                </View>

            }

        </View>
    )
}

export default IconField