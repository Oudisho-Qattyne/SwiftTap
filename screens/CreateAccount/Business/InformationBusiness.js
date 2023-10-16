import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../../AppState'
import DropDownPicker from 'react-native-dropdown-picker'
import Smile from './../../../assets/SVGS/Smile.svg'
import Works from './../../../assets/SVGS/Works.svg'
import TwoWifiRed from './../../../assets/SVGS/TwoWifiRed.svg'
import Animated, { SlideInDown, SlideOutDown, ZoomIn, ZoomOut } from 'react-native-reanimated'


const InformationBusiness = () => {
    const { CreateAccountState, CreateAccountDispatch } = useContext(AppContext)
    const [openDropDownIndustry, setOpenDropDownIndustry] = useState(false)
    const [info, setInfo] = useState({
        industry: null
    })
    const [industry, setIndustry] = useState([
        { label: 'a', value: 'a' },
        { label: 'b', value: 'b' },
    ])

    const information = () => {
        CreateAccountDispatch({ type: 'nextPage' })
    }
    return (

        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">

            <View className="relative justify-center items-center p-6">
                <View>
                    <Image className="w-[210px] h-[168px]" source={require('./../../../assets/Images/InformationBusiness.png')} />

                    <Animated.View entering={ZoomIn.delay(700)} exiting={ZoomOut} className="absolute justify-center items-center -top-5 -right-10 bg-black rounded-full p-2">
                        <Works />
                    </Animated.View>
                    <Animated.View entering={ZoomIn.delay(800)} exiting={ZoomOut} className="absolute justify-center items-center top-[60%] -left-10 bg-black rounded-lg py-1 px-2 ">
                        <TwoWifiRed />
                    </Animated.View>
                    <Animated.View entering={ZoomIn.delay(900)} exiting={ZoomOut} className="absolute justify-center items-center top-[90%] -right-16 bg-black rounded-full px-5 py-2">
                        <View className="flex-row justify-center items-center " >
                            <Text className="text-[#B9FF00] font-black font-[montserrat] ">Hello ! </Text>
                            <Smile/>   
                        </View>
                    </Animated.View>
                </View>
            </View>



            <Text className="w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[18px] pb-6">Information</Text>
            <View className="w-[290px]">
                <DropDownPicker
                    style={{ borderColor: '#bfbfbf' }}
                    placeholder='Industry'
                    placeholderStyle={{ color: '#bfbfbf' }}
                    open={openDropDownIndustry}
                    max={10}
                    value={info.industry}
                    items={industry}
                    setOpen={setOpenDropDownIndustry}
                    onSelectItem={(industry) => {
                        setInfo(
                            prev => ({
                                ...prev,
                                industry: industry.value
                            })
                        )
                    }}
                />
            </View>

            <TouchableOpacity onPress={() => information()} className="absolute bottom-40 w-[296px] h-[48px] rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">next</Text>
            </TouchableOpacity>
        </Animated.View >
    )
}

export default InformationBusiness