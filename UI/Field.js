import { View, Text, Switch, TouchableOpacity, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import Dots from './Dots'
import { AppContext } from '../AppState'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { ScaleDecorator } from 'react-native-draggable-flatlist'

const Field = ({ item, drag, isActive }) => {
    const { dispatch } = useContext(AppContext)
    const [editName, setEditName] = useState(false)
    const [tempValue, setTempValue] = useState(item.value)

    return (
        <ScaleDecorator>
            <View key={item.id} className="w-full h-[54px] rounded-[10px]  flex-row justify-evenly items-center border border-1 bg-white border-[#bfbfbf] my-2">
                <TouchableOpacity
                    onPressIn={drag}
                    disabled={isActive}
                    className="w-[70px]  justify-center items-center">
                    <Dots />
                </TouchableOpacity>

                <View className='w-full flex-row justify-between items-center px-7'>
                    <Text className="w-1/4 text-[#707070]">{item.name}:</Text>
                    {
                        editName ?
                            <TextInput className="w-1/2 text-black" autoFocus={true} value={tempValue} onChangeText={setTempValue} />
                            :
                            <Text numberOfLines={1} className="w-1/2 overflow-hidden text-[#707070] ">{item.value}</Text>

                    }
                    <View className="flex flex-row justify-center items-center ">
                        {
                            editName ?
                                <TouchableOpacity onPressOut={() => {
                                    dispatch({ type: 'changeValue', id: item.id, section: item.section, value: tempValue })
                                    setEditName(prev => !prev)
                                }
                                }>
                                    <FontAwesomeIcon color='#0060CD' icon={['fas', 'check']} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPressOut={() => setEditName(prev => !prev)}>
                                    <FontAwesomeIcon color='#0060CD' icon={['fas', 'pen']} />
                                </TouchableOpacity>
                        }
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={'#0060CD'}
                            onValueChange={(value) => dispatch({ type: 'toggleIsActive', section: item.section, id: item.id, isActive: value })}
                            value={Boolean(item.isActive)} />
                    </View>
                </View>
            </View>
        </ScaleDecorator>
    )
}

export default Field