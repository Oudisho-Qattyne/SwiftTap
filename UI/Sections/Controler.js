import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { AppContext } from '../../AppState'

const Controler = () => {
    const {UiState , UiDispatch} = useContext(AppContext)
    return (
        <View className="relative z-10">
            <TouchableOpacity className="absolute top-44 left-0 w-[45px] h-[45px] rounded-tr-full rounded-br-full border-2 bg-white border-gray-300 flex justify-center items-center shadow-sm z-[1]">
                <FontAwesomeIcon size={25} color={'#0060CD'} icon={['fas', 'question']} />
            </TouchableOpacity>

            <TouchableOpacity className="absolute top-56 left-0 w-[45px] h-[45px] rounded-tr-full rounded-br-full border-2 bg-white border-gray-300 flex justify-center items-center shadow-sm z-[1]">
                <FontAwesomeIcon size={25} color={'#0060CD'} icon={['fas', 'chart-simple']} />
            </TouchableOpacity>

            <TouchableOpacity
                onPressOut={() => UiDispatch({ toggle: 'pages' , section:'editable' })}
                className="absolute top-52 right-0 w-[45px] h-[45px] rounded-tl-full rounded-bl-full border-2 bg-white border-gray-300 flex justify-center items-center shadow-sm z-[1]">
                {
                    UiState.pages.editable ? <FontAwesomeIcon size={25} color={'#0060CD'} icon={['fas', 'eye']} /> :
                        <FontAwesomeIcon size={25} color={'#0060CD'} icon={['fas', 'pen']} />
                }
            </TouchableOpacity>
        </View>
    )
}

export default Controler