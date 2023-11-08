import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Animated, { SlideInDown, SlideOutDown, ZoomIn } from 'react-native-reanimated'
import NFC from '../../../assets/SVGS/NFC.svg'
import KorianLove from '../../../assets/SVGS/KorianLove.svg'
import { AppContext } from '../../../AppState'
const UsedNfc = () => {
    const {CreateAccountDispatch , UiEventsDispatch, journeyInputFields, journeyDispatch } = useContext(AppContext)
    const [membersNumber, setMemberNumber] = useState()
    const [info, setInfo] = useState({
        use_nfc:{
            ...journeyInputFields['use_nfc']
        }
    })


    const sendInfo = () => {
        if(info.use_nfc.use_nfc.value=='yes'||info.use_nfc.use_nfc.value=='no'){
            journeyDispatch({function:'setSection' , section:info})
            CreateAccountDispatch({ type: 'nextPage' })
        }
        else{
            setInfo(prev => ({
                ...prev,
                use_nfc:{
                    ...prev.use_nfc,
                    use_nfc:{
                        ...prev.use_nfc.use_nfc,
                        error:'please answer the question'
                    }
                }
            }))
        }
    }
    return (
        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">

            <View className="relative justify-center items-center p-6">
                <View>

                    <Image className="w-[200px] h-[145px]" source={require('./../../../assets/Images/UsedNfc.png')} />
                    <Animated.View entering={ZoomIn.delay(700)} className="absolute w-[60px] h-[60px] -top-5 -left-5 flex justify-center items-center bg-[#121212] rounded-[10px]">
                        < NFC />
                    </Animated.View>
                    <Animated.View entering={ZoomIn.delay(800)} className="absolute w-[60px] h-[60px] flex justify-center items-center -bottom-5 -right-5 p-2 bg-[#121212] rounded-full text-[#B9FF00] font-black ">
                        <KorianLove/>
                    </Animated.View>
                </View>

                <Text className="relative text-[#1E1E1E] font-[montserrat] font-black text-center text-[18px] pt-10 pb-5" numberOfLines={2}>Have You Used NFC Products Before In Your Company?</Text>


                    <TouchableOpacity onPress={() => setInfo(prev => ({
                        ...prev,
                        use_nfc:{
                            ...prev.use_nfc,
                            use_nfc:{
                                ...prev.use_nfc.use_nfc,
                                value:'yes',
                                error:null
                            }
                        }
                    }))}
                        className="relative w-[250px] h-[50px] border border-1 border-[#bfbfbf] rounded-[10px] flex justify-center items-center m-1"
                        style={{
                            borderColor: info.use_nfc.use_nfc.value=='yes'? '#1776F2' : '#bfbfbf',
                            backgroundColor:info.use_nfc.use_nfc.value=='yes' ? '#1776F2' : '#ffffff',

                        }}>
                        <Text
                            className='text-lg text-black text-center'
                            style={{
                                color: info.use_nfc.use_nfc.value=='yes' ? '#ffffff' : '#000000'
                            }}
                        >yes </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setInfo(prev => ({
                        ...prev,
                        use_nfc:{
                            ...prev.use_nfc,
                            use_nfc:{
                                ...prev.use_nfc.use_nfc,
                                value:'no',
                                error:null
                            }
                        }
                    }))}
                        className="relative w-[250px] h-[50px] border border-1 border-[#bfbfbf] rounded-[10px] flex justify-center items-center m-1"
                        style={{
                            borderColor: info.use_nfc.use_nfc.value=='no' ? '#1776F2' : '#bfbfbf',
                            backgroundColor:info.use_nfc.use_nfc.value=='no' ? '#1776F2' : '#ffffff',

                        }}>
                        <Text
                            className='text-lg text-black text-center'
                            style={{
                                color: info.use_nfc.use_nfc.value=='no' ? '#ffffff' : '#000000'
                            }}
                        >No</Text>
                    </TouchableOpacity>
            </View>
            {
                info.use_nfc.use_nfc.error && 
                <View>
                    <Text className="text-left text-red-700">{info.use_nfc.use_nfc.error}</Text>
                </View>
            }
            <TouchableOpacity onPress={() => sendInfo()} className="absolute w-[296px] h-[48px] bottom-40 rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">next</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default UsedNfc