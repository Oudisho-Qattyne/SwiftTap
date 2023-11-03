import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import * as ImagePicker from 'expo-image-picker';

const ImageField = ({ edit, value, changeValue, id }) => {
    const [error, setError] = useState(false)
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
            changeValue(id, `data:${result.assets[0].type}/${result.assets[0].uri.split('.')[result.assets[0].uri.split('.').length-1]};base64,${result.assets[0].base64}`)
        }

    };


    return (
        <View className='relative w-fit h-32 flex flex-row justify-center items-center p-2'>
            {edit &&
                <TouchableOpacity onPressOut={pickImage} className="absolute w-20 h-20 rounded-full flex justify-center items-center z-30 m-1" style={error && { borderColor: 'red' }}>
                    <View className="absolute w-20 h-20 rounded-full  flex justify-center items-center  bg-black opacity-25" />
                    <FontAwesomeIcon color='white' icon={['fas', 'pen']} />
                </TouchableOpacity>
            }
            {
                (edit || value !='') ?
                <FontAwesomeIcon icon={['fas', '']} size={30} />
                :
                <Text className='text-black font-black'>no image</Text>
            }
        </View>
    )
}

export default ImageField