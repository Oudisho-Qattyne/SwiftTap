import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import ImageField from './ImageField';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
const IconField = ({ id, edit, value, changeValue, setSelectIcon }) => {
    const [iconType, setIconType] = useState('icon')
    const [open, setOpen] = useState(false)
    const [iconTypes, setIconTypes] = useState(
        [
            { label: 'image', value: 'image' },
            { label: 'icon', value: 'icon' }
        ]
    )


    // const type = value.split('|')

    useEffect(() => {
        // if (type[0] == 'fas' || type[0] == 'fab') {
        //     setIconType('icon')
        // }
        // else if (type[0] == 'image') {
        //     setIconType('image')
        // }
    }, [])

    return (
        <View className="relative flex flex-row justify-center items-center">
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
                <ImageField key={id} id={id} edit={edit} value={value} changeValue={changeValue} />
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
                    <FontAwesomeIcon icon={['fab','whatsapp']} size={65} />
                </View>

            }

        </View>
    )
}

export default IconField