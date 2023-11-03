import { View, Text, FlatList, Touchable, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../AppState'
import Hr from '../../UI/Hr'
import DropDownPicker from 'react-native-dropdown-picker'
// import BouncyCheckbox from "react-native-bouncy-checkbox";
import Checkbox from 'expo-checkbox';

const CustomizeButtons = ({themeDispatch , theme}) => {
    const { AppState, dispatch, UiState, UiDispatch } = useContext(AppContext)

    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { icon: () => <View className="w-14 h-9 rounded-full border border-1 border-[#bfbfbf]" />, label: 'circle', value: 1 },
        { icon: () => <View className="w-14 h-9 border border-1 border-[#bfbfbf]" />, label: 'square', value: 2 },
        { icon: () => <View className="w-14 h-9 rounded-full border border-1 border-dashed border-[#bfbfbf] " />, label: 'rounded dashed', value: 3 },
        { icon: () => <View className="w-14 h-9 border border-1 border-[#bfbfbf] border-dashed" />, label: 'square dashed', value: 4 },
    ]);
    return (
        <View className="relative w-full h-auto justify-center items-start pt-10">
            <Text className="w-full text-center text-3xl text-[#bfbfbf] py-5">Customize Buttons</Text>
            <DropDownPicker
                itemSeparator={true}
                open={open}
                value={AppState.profile.theme.buttons.type}
                items={items}
                setOpen={setOpen}
                onSelectItem={(item) => {
                    return (
                        dispatch({ type: 'setButtonsStyle', prop: 'type', value: item.value })
                    )
                }}
            />
            <View className="flex-row justify-center items-center">
                <Text className="p-5 text-[#8C8C8C]">Fill : </Text>
                <Checkbox
                    value={AppState.profile.theme.buttons.fill}
                    size={25}
                    onValueChange={(value) => dispatch({ type: 'setButtonsStyle', prop: 'fill', value: value })}
                />
            </View>

            <Text className="p-5 text-[#8C8C8C]">Buttons Background Color</Text>
            <View className="relative w-full flex flex-row flex-wrap justify-center items-center">
                    {
                      AppState.textColors.map(item => 
                        <TouchableOpacity
                        style={{ 
                            backgroundColor: item.color,
                            borderWidth:2,
                            borderColor:'#bfbfbf' 
                        }}
                        onPressOut={() => dispatch(
                            {
                                type: 'setButtonsStyle',
                                prop: 'backGroundColor',
                                value: item.color,
                            })}
                        className="w-[35px] h-[35px] rounded-full m-2">
                    </TouchableOpacity>                        
                        )  
                    }
                </View>
            {/* <FlatList
                data={AppState.textColors}
                scrollEnabled={false}
                extraData={AppState.textColors}
                contentContainerStyle={{ flexDirection: "row", flexWrap: 'wrap', minWidth: '100%', justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }}
                renderItem={(item) => {
                    return (
                        <TouchableOpacity
                            style={{
                                backgroundColor: item.item.color,
                                borderWidth: 2,
                                borderColor:'#bfbfbf'
                            }}
                            onPressOut={() => dispatch(
                                {
                                    type: 'setButtonsStyle',
                                    prop: 'backGroundColor',
                                    backGroundColor: item.item.color,

                                })}
                            className="w-[35px] h-[35px] rounded-full m-2">
                        </TouchableOpacity>
                    )
                }} /> */}
            <Hr color='#8C8C8C' height={1} width='100%' />

            <Text className="p-5 text-[#8C8C8C]">Buttons Text Color</Text>
            <View className="relative w-full flex flex-row flex-wrap justify-center items-center">
                    {
                      AppState.textColors.map(item => 
                        <TouchableOpacity
                        style={{ 
                            backgroundColor: item.color,
                            borderWidth:2,
                            borderColor:'#bfbfbf' 
                        }}
                        onPressOut={() => dispatch(
                            {
                                type: 'setButtonsStyle',
                                prop: 'textColor',
                                value: item.color
                            })}
                        className="w-[35px] h-[35px] rounded-full m-2">
                    </TouchableOpacity>                        
                        )  
                    }
                </View>
            {/* <FlatList
                data={AppState.textColors}
                extraData={AppState.textColors}
                scrollEnabled={false}
                contentContainerStyle={{ flexDirection: "row", flexWrap: 'wrap', minWidth: '100%', justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }}
                renderItem={(item) => {
                    return (
                        <TouchableOpacity
                            style={{
                                backgroundColor: item.item.color,
                                borderWidth: 2,
                                borderColor:'#bfbfbf'
                            }}
                            onPressOut={() => dispatch(
                                {
                                    type: 'setButtonsStyle',
                                    prop: 'textColor',
                                    textColor: item.item.color
                                })}
                            className="w-[35px] h-[35px] rounded-full m-2">
                        </TouchableOpacity>
                    )
                }} /> */}
        </View>
    )
}

export default CustomizeButtons