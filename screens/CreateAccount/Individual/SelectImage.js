import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../../AppState'
import Globe from './../../../assets/SVGS/Globe.svg'
import Camera from './../../../assets/SVGS/Camera.svg'
import Mobile from './../../../assets/SVGS/Mobile.svg'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import * as ImagePicker from 'expo-image-picker';

const SelectImage = () => {
    const { CreateAccountState, CreateAccountDispatch } = useContext(AppContext)
    const [image, setImage] = useState(null)
    const startJourney = () => {
        CreateAccountDispatch({ type: 'nextPage' })
    }


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };



    return (

        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">

            <View className="relative justify-center items-center p-6">
                <View>

                    <Image className="w-[160px] h-[160px]" source={require('./../../../assets/Images/SelectImage.png')} />

                    <View className="absolute top-[90%] -left-10 flex-row  bg-black rounded-full px-3 py-1 justify-center items-center">
                        <View className="px-[6px]">
                            <Globe />
                        </View>
                        <View className="px-[6px]">
                            <Camera />
                        </View>
                        <View className="px-[6px]">
                            <Mobile />
                        </View>
                    </View>

                </View>
            </View>

            <Text className="w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[18px] py-5">Your Image</Text>
            <TouchableOpacity onPress={pickImage}>
                {image ?
                    <Image source={{ uri: image }} className="w-[164px] h-[164px] rounded-full" /> :
                    <View style={{ borderStyle: 'dashed' }} className="w-[164px] h-[164px] rounded-full border-dashed border-2 border-[#bfbfbf] justify-center items-center">
                        <FontAwesomeIcon color='#bfbfbf' size={30} icon={['fas' , 'plus']}/>
                    </View>
                }
            </TouchableOpacity>

            <TouchableOpacity onPress={() => startJourney()} className="absolute bottom-40 w-[296px] h-[48px] rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">next</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default SelectImage