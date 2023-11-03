import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import * as DocumentPicker from 'expo-document-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as FileSystem from 'expo-file-system';
const FileField = ({ id, edit, value, changeValue, setSelectIcon }) => {
    const [error, setError] = useState(false)
    const pickDocument = async () => {
        setError(false)
        let result = await DocumentPicker.getDocumentAsync({});

        if (result.assets[0].size / 1000000 < 2) {
            const base64File = await FileSystem.readAsStringAsync(result.assets[0].uri, { encoding: FileSystem?.EncodingType?.Base64 });
            changeValue(id, `data:${result.assets[0].mimeType};base64,${base64File}`)
        }
        else {
            setError(true)
        }

    }

    return (
        <View className='relative w-fit h-32 flex flex-col justify-center items-center p-2'>
            {edit &&
                <>

                    <TouchableOpacity onPressOut={pickDocument} className="absolute w-20 h-20 rounded-full flex justify-center items-center z-30 border border-1" style={error && { borderColor: 'red' }}>
                        {error ?
                            <Text className="relative top-14 text-red-600 ">
                                too large file
                            </Text>
                            :
                            <FontAwesomeIcon color='white' icon={['fas', 'pen']} />
                        }
                        <View className="absolute w-20 h-20 rounded-full  flex justify-center items-center  bg-black opacity-25" />
                    </TouchableOpacity>


                </>
            }
            {
                (edit || value !='') ?
                <FontAwesomeIcon icon={['fas', 'file-alt']} size={30} />
                :
                <Text className='text-black font-black'>no file</Text>
            }
        </View>
    )
}

export default FileField