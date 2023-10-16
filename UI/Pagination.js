import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, width } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { AppContext } from '../AppState'
import Logo from '../UI/Logo'
import Animated from 'react-native-reanimated'


const Pagination = () => {
    const { CreateAccountState, CreateAccountDispatch } = useContext(AppContext)
    return (
        <View className='relative w-full h-1/6 bg-[#000000] '>
            <FlatList
                contentContainerStyle={{ position: 'absolute', width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 5, top: 20, zIndex: 10 }}
                data={CreateAccountState.welcomPages}
                renderItem={(item) => {
                    // return (
                    //     <Animated.View style={item.item.id < CreateAccountState.index ? {width:10 , height:10} : item.item.id = CreateAccountState.index ? {width:15 , height:15} : {width:10 , height:10} } className="w-[15px] h-[15px] bg-[#ffffff] rounded-full justify-center items-center">
                    //         <View className="w-[5px] h-[5px] bg-[#00EBBD] rounded-full" />
                    //     </Animated.View>
                    // )
                    if (item.item.id < CreateAccountState.index) {
                        return (
                            <View className="w-[10px] h-[10px] bg-[#00EBBD] rounded-full" />
                        )
                    }
                    if (item.item.id == CreateAccountState.index) {
                        return (
                            <View className="w-[15px] h-[15px] bg-[#ffffff] rounded-full justify-center items-center">
                                <View className="w-[5px] h-[5px] bg-[#00EBBD] rounded-full" />
                            </View>
                        )
                    }
                    else {
                        return (
                            <View className="w-[10px] h-[10px] bg-[#ffffff] rounded-full" />
                        )
                    }
                }}
            />
            {
                CreateAccountState.index != 1 &&
                <TouchableOpacity onPressOut={() => CreateAccountDispatch({ type: 'prevPage' })} className="absolute top-10 left-10 ">
                    <FontAwesomeIcon color='#ffffff' size={30} icon={faArrowLeft} />
                </TouchableOpacity>
            }
            <View className="">
                <Logo width={170} height={70} />
            </View>
        </View>
    )
}

export default Pagination