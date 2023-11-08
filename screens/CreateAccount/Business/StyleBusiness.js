import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../AppState'
import Animated, { SlideInDown, SlideInRight, SlideOutDown, SlideOutLeft } from 'react-native-reanimated'
import API from '../../../API/API'
import ThemeComponent from '../../../UI/ThemeComponent'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const StyleBusiness = () => {
    const { CreateAccountState, CreateAccountDispatch, UiEventsDispatch , journeyInputFields} = useContext(AppContext)
    const [themes, setThemes] = useState([])
    const [mainThemes, stMainThemes] = useState(
        [
            {
                "id": 1,
                "customizeable": 1,
                "textColor": "#e0c99a",
                "textFont": "#dccba0",
                "profielBorderColor": "#1301fd",
                "backGround": "[\"#4fae6d\"]",
                "buttons": "[\"#4b7aa2\"]",
                "icons": "[\"#f71e85\"]",
                "is_approved": 1,
                "is_default": 1,
                "created_at": "2023-10-17T10:28:24.000000Z",
                "updated_at": "2023-10-17T10:28:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 2,
                "customizeable": 1,
                "textColor": "#65cb06",
                "textFont": "#a2db7f",
                "profielBorderColor": "#cd50b6",
                "backGround": "[\"#da78e2\"]",
                "buttons": "[\"#965a89\"]",
                "icons": "[\"#a63646\"]",
                "is_approved": 1,
                "is_default": 1,
                "created_at": "2023-10-17T10:28:24.000000Z",
                "updated_at": "2023-10-17T10:28:24.000000Z",
                "deleted_at": null
            },
        ]
    )
    console.log(journeyInputFields.information2.industry.value);
    const [showThemes, setShowThemes] = useState(false)
    const fetchThemes = async () => {
        const { res, err } = await API(
            {
                type: 'themes',
                payload: {
                    CreateAccountDispatch: CreateAccountDispatch,
                    UiEventsDispatch: UiEventsDispatch,
                    industry_id: journeyInputFields.information2.industry.value,
                    page: 3
                }
            }
        )
        if(err.response){
            console.log(err , 'error');
            console.log('something went wrong..!!');
        }
        if (res.status == 200) {
            setThemes(res.data.data)
            setShowThemes(true)
        }
    }
    const seeMoreThemes = async () => {
        await fetchThemes()
    }



    return (
        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] py-10 z-10">
            {
                !showThemes &&
                <Animated.View className="relative flex flex-col justify-center items-center" entering={SlideInRight} exiting={SlideOutLeft}>

                    <Text className="w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[18px] py-5">Choose Your Style</Text>
                    <View className="relative w-full flex flex-row flex-wrap">
                        {
                            mainThemes.map(theme =>
                                <ThemeComponent key={theme.id} theme={theme} />
                            )
                        }
                    </View>
                    <TouchableOpacity onPress={() => seeMoreThemes()}>
                        <Text className="relative w-full text-center pt-5 text-black font-[montserrat] underline font-semibold">see more</Text>
                    </TouchableOpacity>
                </Animated.View>
            }
            {showThemes &&
                <Animated.View entering={SlideInRight} exiting={SlideOutLeft} className="flex justify-center items-center ">
                    <TouchableOpacity onPressOut={() => setShowThemes(false)} className="absolute top-5 left-10 ">
                        <FontAwesomeIcon color='black' size={30} icon={faArrowLeft} />
                    </TouchableOpacity>
                    <Text className="w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[18px] py-5">themes</Text>
                    <ScrollView horizontal contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexWrap: 'wrap' }} className='relative min-w-full max-h-full flex flex-row flex-wrap  ' >
                        {
                            themes.map(
                                theme => <ThemeComponent key={theme.id} theme={theme} />
                            )
                        }
                    </ScrollView>
                    {/* <FlatList 
                    horizontal
                    style={{width:'100%' }}
                    contentContainerStyle={{ width:'100%' ,justifyContent:'center' , alignItems:'center'  }}
                    keyExtractor={item => item.id}
                    renderItem={item => <ThemeComponent theme={item.item}/>}
                    /> */}



                </Animated.View>
            }
            <TouchableOpacity onPress={() => CreateAccountDispatch({ type: 'nextPage' })} className="absolute bottom-40 w-[296px] h-[48px] rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">next</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default StyleBusiness