import { View, Text, FlatList, Touchable, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../AppState'
import Hr from '../../UI/Hr'
import DropDownPicker from 'react-native-dropdown-picker'
// import BouncyCheckbox from "react-native-bouncy-checkbox";

const CustomizeIcons = () => {
    const { AppState, dispatch } = useContext(AppContext)
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { icon: () => <View className="w-9 h-9 rounded-full border border-1 border-[#bfbfbf]" />, label: 'circle', value: 1 },
        { icon: () => <View className="w-9 h-9 rounded-lg border border-1 border-[#bfbfbf]" />, label: 'rounded', value: 2 },
        { icon: () => <View className="w-10 h-9 border border-1 border-[#bfbfbf]" />, label: 'square', value: 3 },
    ]);
    return (
        <View className="w-full h-auto justify-center items-start">
            <Text className="w-full text-center text-3xl text-[#bfbfbf] py-5">Customize Icons</Text>
            <DropDownPicker
                itemSeparator={true}
                open={open}
                value={AppState.theme.icons.type}
                items={items}
                setOpen={setOpen}
                onSelectItem={(item) => {
                    return (
                        dispatch({ type: 'setIconStyle', prop: 'type', iconType: item.value })
                    )
                }}
            />
            <View className="flex-row justify-center items-center">
                <Text className="p-5 text-[#8C8C8C]">Fill : </Text>
                {/* <BouncyCheckbox
                    value={AppState.theme.icons.fill}
                    size={25}
                    onPress={(value) => dispatch({ type: 'setIconStyle', prop: 'fill', fill: value })}
                /> */}
            </View>

            <Text className="p-5 text-[#8C8C8C]">Icons Background Color</Text>

            <FlatList
                scrollEnabled={false}
                extraData={AppState.textColors}
                data={AppState.textColors}
                contentContainerStyle={{ flexDirection: "row", flexWrap: 'wrap', minWidth: '100%', justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }}
                renderItem={(item) => {
                    return (
                        <TouchableOpacity
                            style={{
                                backgroundColor: item.item.color,
                                borderWidth: 2,
                                borderColor: AppState.theme.icons.color == item.item.color ? '#0060CD' : '#bfbfbf'
                            }}
                            onPressOut={() => dispatch(
                                {
                                    type: 'setIconStyle',
                                    prop: 'color',
                                    color: item.item.color,

                                })}
                            className="w-[35px] h-[35px] rounded-full m-2">
                        </TouchableOpacity>
                    )
                }} />
            <Hr color='#8C8C8C' height={1} width='100%' />

            <Text className="p-5 text-[#8C8C8C]">Icons Text Color</Text>

            <FlatList
                scrollEnabled={false}
                extraData={AppState.textColors}
                data={AppState.textColors}
                contentContainerStyle={{ flexDirection: "row", flexWrap: 'wrap', minWidth: '100%', justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }}
                renderItem={(item) => {
                    return (
                        <TouchableOpacity
                            style={{
                                backgroundColor: item.item.color,
                                borderWidth: 2,
                                borderColor: AppState.theme.icons.textColor == item.item.color ? '#0060CD' : '#bfbfbf'
                            }}
                            onPressOut={() => dispatch(
                                {
                                    type: 'setIconStyle',
                                    prop: 'textColor',
                                    textColor: item.item.color
                                })}
                            className="w-[35px] h-[35px] rounded-full m-2">
                        </TouchableOpacity>
                    )
                }} />
        </View>
    )
}

export default React.memo(CustomizeIcons)