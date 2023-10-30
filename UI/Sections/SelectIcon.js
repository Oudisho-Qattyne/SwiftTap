import { View, Text, FlatList, TouchableOpacity, ScrollView, Pressable, TextInput } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Animated, { SlideInDown, SlideInRight, SlideOutDown, SlideOutRight } from 'react-native-reanimated'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { FlashList } from '@shopify/flash-list'
import Spinner from '../Spinner'


const SelectIcon = ({ onChange, setSelectIcon }) => {
    const iconsLibFab = Object.keys(library.definitions.fab).map(icon => (['fab' , icon ]))
    const iconsLibFas = Object.keys(library.definitions.fas).map(icon => (['fas' , icon]))
    const Icons = iconsLibFab.concat(iconsLibFas)
    const offset = 10
    const [search, setSearch] = useState('')
    const [text , setText] = useState('')
    const [allIcons, setAllIcons] = useState([])
    const [page, setPage] = useState(1)
    library.add(fab)
    library.add(fas)



    return (
        <Animated.View entering={SlideInRight} exiting={SlideOutRight} className="relative w-full flex flex-col justify-center items-center py-20" >
            <View className="relative w-full flex flex-row justify-center items-center">
                <Text className='text-black text-2xl'>select icon</Text>
                <TouchableOpacity onPress={() => setSelectIcon(false)} className="absolute left-10 z-10 ">
                    <FontAwesomeIcon color='#000000' size={30} icon={faArrowLeft} />
                </TouchableOpacity>
            </View>
            <View className='relative w-full flex flex-row justify-between items-center p-5'>
                <TextInput placeholder='search' value={text} onChangeText={text => setText(text)} className='relative p-2 px-3 w-full text-black border border-1 border-[#bfbfbf] rounded-full' />
                <TouchableOpacity onPress={() => setSearch(text)} className="absolute right-6 p-3 flex justify-center items-center bg-[#0060CD] rounded-full">
                    <FontAwesomeIcon icon={['fab' , 'sistrix']} color='white' />
                </TouchableOpacity>
            </View>
            <View className="w-screen h-full ">


                    <FlatList
                    data={[]}
                    renderItem={item =>
                        {
                            console.log(item);
                            if(item.item){
                                    return(
                                <View
                                    className="w-full flex-row p-2 rounded-full border border-1 border-[#bfbfbf] m-1 justify-start items-center">
                                    <FontAwesomeIcon size={50} icon={item.item} />
                                    <View className="w-full">
        
                                        <TouchableOpacity
                                            onPress={() => {
                                                // onChange()
                                            }}
                                        >
                                            <Text className="text-black font-black px-10">{item.item[1]}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                    )
                            }
                        }
                    }
                    ListEmptyComponent={() =>
                        <View className="w-full h-full justify-center items-center">
                            <Text className="text-lg text-[#707070]">no icons found</Text>
                        </View>
                    }
                />

            </View>
        </Animated.View>
    )
}

export default SelectIcon