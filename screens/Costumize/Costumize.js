import { View, Text, ScrollView } from 'react-native'
import React , {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Hr from '../../UI/Hr'
import CustomizeText from './CustomizeText'
import CustomizeIcons from './CustomizeIcons'
import CustomizeBackground from './CustomizeBackground'
import CustomizeButtons from './CustomizeButtons'
import { AppContext } from '../../AppState'

const Costumize = () => {
  const { AppState, dispatch , UiState , UiDispatch } = useContext(AppContext)

  return (
    <View className=' w-screen h-1/2 bg-white z-10 justify-start items-center px-10 ' style={{position:UiState.pages.Costumize ? "relative" : "absolute" , top:UiState.pages.Costumize ? 0 :'100%'}} >
      <ScrollView className="w-full h-auto pb-10">
        <View>
          <View className="w-full flex-row justify-center items-center gap-3 py-10">
            <FontAwesomeIcon icon={['fas', 'circle-half-stroke']} size={30} color='#0060CD' />
            <Text style={{ fontFamily: 'montserrat', fontWeight: 'normal', color: 'black' }}>Costumize</Text>
          </View>
          <Hr color='#8C8C8C' height={1} width='90%' />
        </View>
        <CustomizeText />
        <CustomizeIcons/>
        <CustomizeButtons/>
        <CustomizeBackground/>
      </ScrollView>
    </View>
  )
}

export default React.memo(Costumize)