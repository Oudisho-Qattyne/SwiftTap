import { View, Text, FlatList, Touchable, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../AppState'
import Hr from '../../UI/Hr'

const CustomizeText = () => {
    const { AppState, dispatch } = useContext(AppContext)

    return (
        <View className="w-full h-auto justify-center items-center">
            <Text className="w-full text-center text-3xl text-[#bfbfbf] py-5">Customize Text</Text>
            <Text className="p-5 text-[#8C8C8C]">Fonts</Text>

            <FlatList
                data={AppState.fonts}
                contentContainerStyle={{ flexDirection: "row", flexWrap: 'wrap', minWidth: '100%', justifyContent: 'center', alignItems: 'center' , paddingBottom:20 }}
                renderItem={(item) => {
                    return (
                        <TouchableOpacity
                            style={{
                                backgroundColor: AppState.theme.textFont === item.item.fontFamily ?
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
                                color: AppState.theme.textFont === item.item.fontFamily ?
                                    '#ffffff' :
                                    "#707070"
                            }}
                            >{item.item.name}</Text>
                        </TouchableOpacity>
                    )
                }} />
            <Hr color='#8C8C8C' height={1} width='100%' />

            <Text className="p-5 text-[#8C8C8C]">Text Color</Text>

            <FlatList
                data={AppState.textColors}
                contentContainerStyle={{ flexDirection: "row", flexWrap: 'wrap', minWidth: '100%', justifyContent: 'center', alignItems: 'center' , paddingBottom:20  }}
                renderItem={(item) => {
                    return (
                        <TouchableOpacity
                            style={{ 
                                backgroundColor: item.item.color,
                                borderWidth:2,
                                borderColor:AppState.theme.textColor == item.item.color ? '#0060CD' : '#bfbfbf' 
                            }}
                            onPressOut={() => dispatch(
                                {
                                    type: 'setTextColor',
                                    textColor: item.item.color
                                })}
                            className="w-[35px] h-[35px] rounded-full m-2">
                        </TouchableOpacity>
                    )
                }} />
        </View>
    )
}

export default CustomizeText