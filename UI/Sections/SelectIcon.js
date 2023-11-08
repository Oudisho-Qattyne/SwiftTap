import { View, Text, FlatList, TouchableOpacity, ScrollView, Pressable, TextInput } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Animated, { SlideInDown, SlideInRight, SlideOutDown, SlideOutRight } from 'react-native-reanimated'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


const SelectIcon = ({ onChange, setSelectIcon , setIcon }) => {
    const iconsLibFab = Object.keys(library.definitions.fab).map(icon => (['fab', icon]))
    const iconsLibFas = Object.keys(library.definitions.fas).map(icon => (['fas', icon]))
    const Icons = iconsLibFab.concat(iconsLibFas)
    const [offset, setOffset] = useState(10)
    const [search, setSearch] = useState('')
    const [allIcons, setAllIcons] = useState(Icons)
    const [showIcons, setShowIcon] = useState([])
    library.add(fab)
    library.add(fas)
    const findIcons = async () => {
        setOffset(10)
        let icons = await Icons.filter(icon => icon[1].toLowerCase().includes(search.trim().toLowerCase()))
        setAllIcons(icons)
        const iconss = []
        for (let i = 0; i < 10; i++) {
        if(icons[i]){
            iconss.push(icons[i])
        }
        }
        setShowIcon(iconss)
    }

const seeMore = () => {
    const icons = []
    for (let i = offset; i < offset + 10; i++) {
        if(allIcons[i]){
            icons.push(allIcons[i])
        }
    }
    const prevIcons = showIcons
    setOffset(prev => prev+10)
    setShowIcon(prevIcons.concat(icons))

}


    useEffect(() => {
        const icons = []
        for (let i = 0; i < offset; i++) {
            icons.push(Icons[i])
        }
        setShowIcon(icons)
    }, [])


    return (
        <Animated.View entering={SlideInRight} exiting={SlideOutRight} className="relative w-full flex flex-col justify-center items-center py-20" >
            <View className="relative w-full flex flex-row justify-center items-center">
                <Text className='text-black text-2xl'>select icon</Text>
                <TouchableOpacity onPress={() => setSelectIcon(false)} className="absolute left-10 z-10 ">
                    <FontAwesomeIcon color='#000000' size={30} icon={faArrowLeft} />
                </TouchableOpacity>
            </View>
            <View className='relative w-full flex flex-row justify-between items-center p-5'>
                <TextInput placeholder='search' value={search} onChangeText={text => setSearch(text)} className='relative p-2 px-3 w-full text-black border border-1 border-[#bfbfbf] rounded-full' />
                <TouchableOpacity onPress={() => findIcons()} className="absolute right-6 p-3 flex justify-center items-center bg-[#0060CD] rounded-full">
                    <FontAwesomeIcon icon={['fab', 'sistrix']} color='white' />
                </TouchableOpacity>
            </View>
            <View className="w-screen h-full ">


                <FlatList
                    data={showIcons}
                    renderItem={item => {
                        if (item.item) {
                            return (
                                <View
                                    className="w-full flex-row p-2 rounded-full border border-1 border-[#bfbfbf] m-1 justify-start items-center">
                                    <FontAwesomeIcon size={50} icon={item.item} />
                                    <View className="w-full">

                                        <TouchableOpacity
                                            onPress={() => {
                                                setIcon(item.item)
                                                setSelectIcon(false)
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
                    ListFooterComponent={() => allIcons.length!=showIcons.length &&
                        <TouchableOpacity onPress={seeMore}>
                            <Text className="w-full text-center pt-5 text-black font-[montserrat] underline font-semibold">see more</Text>

                        </TouchableOpacity>
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