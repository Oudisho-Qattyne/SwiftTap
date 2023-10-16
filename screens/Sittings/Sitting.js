import { View, Text, Switch, TouchableOpacity } from 'react-native'
import React , {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Hr from '../../UI/Hr'
import { AppContext } from '../../AppState'


const Sitting = ({ name, dropList, switchButton, icon }) => {

    return (
        <View  className='relative w-full h-24 flex-row'>
            <View className="absolute w-full h-full top20">
                <Hr color='#8C8C8C' height={1} width='90%' />
            </View>
            <View className="w-[80%] h-full justify-center items-start">
                <TouchableOpacity className="relative w-full h-full flex-row justify-start items-center ">
                    <View className=" flex-row justify-center items-center gap-5">
                        <FontAwesomeIcon size={30} icon={icon} color='#8C8C8C' />
                        <Text className="text-[#8C8C8C]">{name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View className="relative w-[20%] h-full justify-center items-center">
                {dropList &&
                    <View className="absolute right-0">
                        <FontAwesomeIcon icon={['fas', 'angle-down']} size={30} color='#0060CD' />
                    </View>}
                {
                    switchButton &&
                    <View className="absolute right-0">
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={'#0060CD'}
                        />
                    </View>
                }
            </View>
        </View>
    )
}

export default React.memo(Sitting)