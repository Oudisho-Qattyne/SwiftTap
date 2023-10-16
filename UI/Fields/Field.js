import { View, Text, TouchableOpacity, AppState } from 'react-native'
import React, { useState } from 'react'
import Dots from './../../UI/Dots'
import { ScaleDecorator } from 'react-native-draggable-flatlist'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const Field = ({ item, drag, isActive }) => {
    const [edit, setEdit] = useState(false)
    return (
        <ScaleDecorator>
            <View className="w-full h-[54px] rounded-[10px] flex-row justify-between items-center border border-1 bg-white border-[#bfbfbf] my-2">
                <TouchableOpacity
                    onPressIn={drag}
                    disabled={isActive}
                    className="relative min-w-[40px] flex justify-center items-center ">
                    <Dots />
                </TouchableOpacity>
                <TouchableOpacity onPressOut={() => {setEdit(prev => !prev) }} className="pr-3">
                    {edit ?
                        <FontAwesomeIcon color='#0060CD' icon={['fas', 'check']} />
                        :
                        <FontAwesomeIcon color='#0060CD' icon={['fas', 'pen']} />
                    }
                </TouchableOpacity>
            </View>
        </ScaleDecorator>
    )
}

export default Field