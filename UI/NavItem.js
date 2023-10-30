import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { AppContext } from '../AppState'

const NavItem = ({ icon, id, isActive, name }) => {
    const { AppState, dispatch , UiDispatch , UiState } = useContext(AppContext)

    return (
        <TouchableOpacity onPressOut={() => UiDispatch({ function: 'togglePages' , page:name })} className=" rounded-full flex justify-center items-center ">
            <View className=" relative w-[60px] h-[60px] justify-between items-center mx-2">
                <FontAwesomeIcon color={UiState.pages[name] ? '#0060CD' : '#bfbfbf'} size={30} icon={icon} />
                <Text style={{color:isActive ? '#0060CD' : '#bfbfbf'}} className="text-xs text-[#0060CD] text-center"> {name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default NavItem