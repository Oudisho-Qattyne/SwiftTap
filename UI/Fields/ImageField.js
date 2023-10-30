import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import * as ImagePicker from 'expo-image-picker';

const ImageField = ({ edit, value, changeValue, id }) => {
    const getBase64 = (file) => {
        let document = "";
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            document = reader.result;
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };

        return document;
    }
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
            console.log(result.assets[0].type);
            changeValue(id, `data:${result.assets[0]}.type;base64,${result.assets[0].base64}`)
        }
    };


    return (
        <View>
                {edit &&
                    <TouchableOpacity onPressOut={pickImage} className="absolute w-20 h-20 rounded-full flex justify-center items-center z-30">
                        <View className="absolute w-20 h-20 rounded-full  flex justify-center items-center  bg-black opacity-25" />
                        <FontAwesomeIcon color='white' icon={['fas', 'pen']} />
                    </TouchableOpacity>
                }
                <Image source={{ uri: value }} className="w-20 h-20 rounded-full z-0" />
        </View>
    )
}

export default ImageField