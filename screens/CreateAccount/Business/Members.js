import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Animated, { SlideInDown, SlideOutDown, ZoomIn } from 'react-native-reanimated'
import People from '../../../assets/SVGS/people.svg'
import Menu from '../../../assets/SVGS/menu.svg'
import { AppContext } from '../../../AppState'
const Members = () => {
    const { CreateAccountDispatch, journeyInputFields, journeyDispatch } = useContext(AppContext)
    const [membersNumber, setMemberNumber] = useState(null)
    const [numbers, setNumbers] = useState([1, 50, 500])
    const [info, setInfo] = useState(
        {
            members: {
                ...journeyInputFields['members']
            }
        }
    )

    const sendInfo = () => {
        console.log(info);
        if (info.members.members.value != '') {
            journeyDispatch({ function: 'setSection', section: info })
            CreateAccountDispatch({ type: 'nextPage' })
        }
        else {
            setInfo(prev => ({
                ...prev,
                members: {
                    ...prev.members,
                    members: {
                        ...prev.members.members,
                        error: 'select number'
                    }
                }
            }))
        }
    }


    return (
        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">

            <View className="relative justify-center items-center p-6">
                <View>

                    <Image className="w-[200px] h-[145px]" source={require('./../../../assets/Images/members.png')} />
                    <Animated.View entering={ZoomIn.delay(700)} className="absolute w-[60px] h-[60px] -top-5 -left-5 flex justify-center items-center bg-[#121212] rounded-full">
                        < People />
                    </Animated.View>
                    <Animated.View entering={ZoomIn.delay(800)} className="absolute -bottom-5 -right-5 p-2 bg-[#121212] rounded-xl text-[#B9FF00] font-black ">
                        <Menu />
                    </Animated.View>
                </View>

                <Text className="w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[18px] pt-10 pb-1">Team Members</Text>
                <Text className="w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[10px]  pb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis mollis lobortis.</Text>


                {numbers.map((number, index) =>
                    <TouchableOpacity onPress={() => setInfo(prev => ({
                        ...prev,
                        members: {
                            ...prev.members,
                            members: {
                                ...prev.members.members,
                                value: number,
                                error:null
                            }
                        }
                    }))}
                        className="relative w-[250px] h-[50px] border border-1 border-[#bfbfbf] rounded-[10px] flex justify-center items-center m-1"
                        style={{
                            borderColor: info.members.members.value == number ? '#1776F2' : '#bfbfbf',
                            backgroundColor: info.members.members.value == number ? '#1776F2' : '#ffffff',

                        }}>
                        <Text
                            className='text-lg text-black text-center'
                            style={{
                                color: info.members.members.value == number ? '#ffffff' : '#000000'
                            }}
                        >{number}{numbers[index + 1] ? ` - ${numbers[index + 1]}` : '+'} </Text>
                    </TouchableOpacity>
                )}
                {
                    info.members.members.error &&
                    <View>
                        <Text className="text-left text-red-700">{info.members.members.error}</Text>
                    </View>
                }
            </View>
            <TouchableOpacity onPress={() => sendInfo()} className="absolute w-[296px] h-[48px] bottom-40 rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">next</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default Members