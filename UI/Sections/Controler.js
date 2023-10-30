import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { AppContext } from '../../AppState'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import RightCurve from './../../assets/SVGS/RightCurve.svg'
import LeftCurve from './../../assets/SVGS/LeftCurve.svg'

const Controler = ({ setProfile }) => {
    const { UiState, UiDispatch } = useContext(AppContext)
    return (
        <View className="relative z-20">
            {/* <TouchableOpacity className="absolute top-44 left-0 w-[45px] h-[45px] rounded-tr-full rounded-br-full border-2 bg-white border-gray-300 flex justify-center items-center shadow-sm z-[1]">
                <FontAwesomeIcon size={25} color={'#0060CD'} icon={['fas', 'question']} />
            </TouchableOpacity>

            <TouchableOpacity className="absolute top-56 left-0 w-[45px] h-[45px] rounded-tr-full rounded-br-full border-2 bg-white border-gray-300 flex justify-center items-center shadow-sm z-[1]">
                <FontAwesomeIcon size={25} color={'#0060CD'} icon={['fas', 'chart-simple']} />
            </TouchableOpacity> */}

            <TouchableOpacity onPress={() => setProfile(null)} >
                <View className='absolute  top-52 left-0 w-[45px] h-[45px] rounded-tr-full rounded-br-full  flex justify-center items-center shadow-sm z-[1]'>
                    <View className="absolute z-[2]">
                        <FontAwesomeIcon color={'#00EBBD'} size={30} icon={faArrowLeft} />
                    </View>
                    <LeftCurve />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPressOut={() => UiDispatch({ function: 'togglePages', page: 'editable' })} >
                <View className='absolute  top-52 right-0 w-[45px] h-[45px] rounded-tr-full rounded-br-full  flex justify-center items-center shadow-sm z-[1]'>
                    <View className="absolute z-[2]">
                        {
                            UiState.pages.editable ? <FontAwesomeIcon size={25} color={'#00EBBD'} icon={['fas', 'eye']} /> :
                                <FontAwesomeIcon size={25} color={'#00EBBD'} icon={['fas', 'pen']} />
                        }
                    </View>
                    <RightCurve />
                </View>
            </TouchableOpacity>
            {/* <TouchableOpacity
                
                className="absolute top-52 right-0 w-[45px] h-[45px] rounded-tl-full rounded-bl-full border-2 bg-white border-gray-300 flex justify-center items-center shadow-sm z-[1]">
                {
                    UiState.pages.editable ? <FontAwesomeIcon size={25} color={'#0060CD'} icon={['fas', 'eye']} /> :
                        <FontAwesomeIcon size={25} color={'#0060CD'} icon={['fas', 'pen']} />
                }
            </TouchableOpacity> */}
        </View>
    )
}

export default Controler