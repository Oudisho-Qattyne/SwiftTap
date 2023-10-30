import { View, Text, FlatList, Touchable, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../AppState'
import Hr from '../../UI/Hr'

const CustomizeText = ({themeDispatch , theme}) => {

    return (
        <View className="w-full h-auto justify-center items-center">
            <Text className="w-full text-center text-3xl text-[#bfbfbf] py-5">Customize Text</Text>
            <Text className="p-5 text-[#8C8C8C]">Fonts</Text>
            <View className="relative w-full flex flex-row flex-wrap justify-center items-center">
                {theme.fonts.map(item => 
                        <TouchableOpacity
                        style={{
                            backgroundColor: theme.theme.textFont === item.fontFamily ?
                                '#0060CD' :
                                "#ffffff"
                        }}
                        onPressOut={() => themeDispatch(
                            {
                                type: 'setFontFamily',
                                fontFamily: item.fontFamily
                            })}
                        className="w-[140px] h-[44px] justify-center items-center border border-2-[#707070] rounded-full m-1 ">
                        <Text style={{
                            fontFamily: item.fontFamily,
                            color: theme.theme.textFont === item.fontFamily ?
                                '#ffffff' :
                                "#707070"
                        }}
                        >{item.name}</Text>
                    </TouchableOpacity>
                    )}
            </View>
            {/* <FlatList
                data={AppState.fonts}
                contentContainerStyle={{ flexDirection: "row", flexWrap: 'wrap', minWidth: '100%', justifyContent: 'center', alignItems: 'center' , paddingBottom:20 }}
                renderItem={(item) => {
                    return (
                        <TouchableOpacity
                            style={{
                                backgroundColor: AppState.profile.theme.textFont === item.item.fontFamily ?
                                    '#0060CD' :
                                    "#ffffff"
                            }}
                            onPressOut={() => dispatch(
                                {
                                    type: 'setFontFamily',
                                    fontFamily: item.item.fontFamily
                                })}
                            className="w-[140px] h-[44px] justify-center items-center border border-2-[#707070] rounded-full m-1 ">
                            <Text style={{
                                fontFamily: item.item.fontFamily,
                                color: AppState.profile.theme.textFont === item.item.fontFamily ?
                                    '#ffffff' :
                                    "#707070"
                            }}
                            >{item.item.name}</Text>
                        </TouchableOpacity>
                    )
                }} /> */}
            <Hr color='#8C8C8C' height={1} width='100%' />

            <Text className="p-5 text-[#8C8C8C]">Text Color</Text>
                <View className="relative w-full flex flex-row flex-wrap justify-center items-center">
                    {
                      theme.textColors.map(item => 
                        <TouchableOpacity
                        style={{ 
                            backgroundColor: item.color,
                            borderWidth:2,
                            borderColor:theme.theme.textColor == item.color ? '#0060CD' : '#bfbfbf' 
                        }}
                        onPressOut={() => themeDispatch(
                            {
                                type: 'setTextColor',
                                textColor: item.color
                            })}
                        className="w-[35px] h-[35px] rounded-full m-2">
                    </TouchableOpacity>                        
                        )  
                    }
                </View>
            {/* <FlatList
                data={AppState.textColors}
                contentContainerStyle={{ flexDirection: "row", flexWrap: 'wrap', minWidth: '100%', justifyContent: 'center', alignItems: 'center' , paddingBottom:20  }}
                renderItem={(item) => {
                    return (
                        <TouchableOpacity
                            style={{ 
                                backgroundColor: item.item.color,
                                borderWidth:2,
                                borderColor:AppState.profile.theme.textColor == item.item.color ? '#0060CD' : '#bfbfbf' 
                            }}
                            onPressOut={() => dispatch(
                                {
                                    type: 'setTextColor',
                                    textColor: item.item.color
                                })}
                            className="w-[35px] h-[35px] rounded-full m-2">
                        </TouchableOpacity>
                    )
                }} /> */}
        </View>
    )
}

export default CustomizeText