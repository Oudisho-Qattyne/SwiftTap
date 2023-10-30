import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../../AppState'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'
// import ToDoList from './../../../assets/ToDoList.svg'
// import BouncyCheckbox from 'react-native-bouncy-checkbox'
// import Hr from '../../../UI/Hr'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Tree from './../../../assets/SVGS/Tree.svg'
import HandGiveDollar from './../../../assets/SVGS/HandGiveDollar.svg'

const ChooseYourPlan = () => {
    const { CreateAccountState, CreateAccountDispatch } = useContext(AppContext)
    const {AppState , dispatch } = useContext(AppContext)
    const [agreed, setAgreed] = useState(false)
    const [plans, setPlans] = useState(
        [
            {
                id: 1,
                time: '4-weeks',
                cost: 10,
                mostPopular: false
            },
            {
                id: 2,
                time: '12-weeks',
                cost: 10,
                mostPopular: true
            },
            {
                id: 3,
                time: 'One-year',
                cost: 10,
                mostPopular: false
            },
        ]
    )
    return (
        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">

            <Text className="relative w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[18px] py-10">Choose Your Plan</Text>

            {/* <FlatList
                contentContainerStyle={{position:'relative' , flexDirection: 'row' }}
                data={plans}
                extraData={plans}
                renderItem={item =>
                    <View className="relative w-[90px] h-[205px] rounded-lg border border-1 border-[#bfbfbf] m-1 ">
                        <Text className="p-1 text-[#bfbfbf] text-center">{item.item.time} Plan</Text>
                        <Text className="p-1 text-[#bfbfbf] text-center">{item.item.cost} USA $</Text>
                        <Text className="p-1 text-[#bfbfbf] text-center">per 12-week</Text>
                        {item.item.mostPopular ?
                            <View className="w-full h-7 bg-[#1776F2] rounded-full p-1 justify-center items-center">
                                <Text className="text-center text-white text-xs ">
                                    Most Popular
                                </Text>
                            </View>
                            :
                            <View className="w-full h-7 p-1 justify-center items-center">
                                <Hr color='#bfbfbf' width={72} height={1} />
                            </View>}
                        <Text className="p-1 text-center text-[#bfbfbf] ">25/week</Text>
                    </View>
                }
            /> */}
            <View className='w-full p-10 gap-3'>
                <Text className='text-[#707070] w-full font-black bg '>You Save : </Text>
                <View className="flex-row justify-start items-center ">
                    <View className="bg-[#00BA00] rounded-full p-1">
                        <FontAwesomeIcon color='#ffffff' icon={['fas', 'check']} />
                    </View>
                    <Text className='pl-3 text-[#bfbfbf] px-2'>1000 AED from prints</Text>
                    <HandGiveDollar/>
                </View>
                <View className="flex-row justify-start items-center ">
                    <View className="bg-[#00BA00] rounded-full p-1">
                        <FontAwesomeIcon color='#ffffff' icon={['fas', 'check']} />
                    </View>
                    <Text className='px-3 text-[#bfbfbf]'>10 trees</Text>
                    <Tree/>

                </View>
            </View>
            <TouchableOpacity onPress={() => {}}>
                <Text className='text-[#707070] text-[17px] underline'>Continue Without Subsicribtion</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => CreateAccountDispatch({ type: 'nextPage' })} className=" absolute bottom-40 w-[296px]  h-[48px] rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">next</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default ChooseYourPlan