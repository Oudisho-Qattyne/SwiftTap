import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext , useState} from 'react'
import { AppContext } from '../../../AppState'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'
import ToDoList from './../../../assets/SVGS/ToDoList.svg'
// import BouncyCheckbox from 'react-native-bouncy-checkbox'

const Terms = () => {
    const { CreateAccountState, CreateAccountDispatch } = useContext(AppContext)
    const [agreed , setAgreed] = useState(false)
    return (
        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">
            <View className="relative justify-center items-center p-6">
                <View>
                    <Image className="w-[186px] h-[158px]" source={require('./../../../assets/Images/Terms.png')} />
                    <View className="absolute -top-6 -right-10 flex-row  bg-black rounded-full p-3 justify-center items-center">
                        <ToDoList />
                    </View>
                </View>
            </View>
            <Text className="w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[18px] py-5">Terms & Conditions</Text>
            <Text className="w-full text-[#BFBFBF] font-[montserrat] font-black text-center text-[18px] p-5">
            Lorem ipsum dolor sit amet, consectetur 
            Lorem ipsum dolor sit amet, consectetur 
            Lorem ipsum dolor sit amet, consectetur 
            Lorem ipsum dolor sit amet, consectetur 
            Lorem ipsum dolor sit amet, consectetur 
            Lorem ipsum dolor sit amet, consectetur 
            </Text>
            <View className="w-full flex-row items-center justify-start px-6">
            {/* <BouncyCheckbox
            fillColor='#1776F2'
            value={agreed}
            size={25}
            
            /> */}
            <Text className="text-[#1776F2] font-black">I Agree</Text>
            </View>

            <TouchableOpacity onPress={() => CreateAccountDispatch({ type: 'nextPage' })} className=" absolute bottom-40 w-[296px]  h-[48px] rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">next</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default Terms