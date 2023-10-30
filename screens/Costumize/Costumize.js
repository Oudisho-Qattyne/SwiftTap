import { View, Text, ScrollView , TouchableOpacity } from 'react-native'
import React, { useContext, useReducer, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Hr from '../../UI/Hr'
import CustomizeText from './CustomizeText'
import CustomizeIcons from './CustomizeIcons'
import CustomizeBackground from './CustomizeBackground'
import CustomizeButtons from './CustomizeButtons'
import { AppContext } from '../../AppState'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'

const Costumize = () => {
  const { AppState, dispatch, UiState, UiDispatch } = useContext(AppContext)
  const [theme, setTheme] = useState(
    {
      theme: {
        ...AppState.profile.theme
      },
      fonts: [
        {
          id: 1,
          name: 'Montserrat',
          fontFamily: 'montserrat',
        },
        {
          id: 2,
          name: 'Roboto',
          fontFamily: 'roboto',
        },
        {
          id: 3,
          name: 'Amaranth',
          fontFamily: 'amaranth',
        },
        {
          id: 4,
          name: 'Palatino Linotype',
          fontFamily: 'palatino-linotype',
        },
        {
          id: 5,
          name: 'MuseoModerno',
          fontFamily: 'museo-moderno',
        },
      ],
      textColors: [
        {
          id: 1,
          color: '#7F7F7F'
        },
        {
          id: 2,
          color: '#FFFFFF'
        },
        {
          id: 3,
          color: '#00ADE6'
        },
        {
          id: 4,
          color: '#0060CD'
        },
        {
          id: 5,
          color: '#241D57'
        },
        {
          id: 6,
          color: '#005940'
        },
        {
          id: 7,
          color: '#FFD900'
        },
        {
          id: 8,
          color: '#CC00FF'
        },
        {
          id: 9,
          color: '#780016'
        },
        {
          id: 10,
          color: '#01EB41'
        },
        {
          id: 11,
          color: '#FFB4D1'
        },
        {
          id: 12,
          color: '#FF6CA5'
        },
        {
          id: 13,
          color: '#FF4656'
        },
        {
          id: 14,
          color: '#FF783F'
        },
        {
          id: 15,
          color: '#1BF0FF'
        },
      ],
    }
  )
  const setFontFamily = ({prop, value}) => {
    setTheme(
      {
        ...theme,
        theme: {
          ...theme.theme,
          textFont: value
        }
      }
    )
  }
  const setTextColor = ({prop, value}) => {
    setTheme(
      {
        ...theme,
        theme: {
          ...theme.theme,
          textColor: value
        }
      }
    )
  }
  const setBackGroundStyle = ({prop, value}) => {
    const newState = { ...theme }
    newState.theme.backGround[prop] = value
    setTheme(
      newState
    )
  }
  const setIconStyle = ({prop, value}) => {
    const newState = { ...theme }
    newState.theme.icons[prop] = value

    setTheme(newState)
  }
  const setButtonsStyle = ({prop, value}) => {
    const newState = { ...theme }
    newState.theme.buttons[prop] = value
    setTheme(newState)
  }

  const themeDispatch = ({type , value , prop}) => {

    switch (type) {
      case 'setFontFamily':
          setFontFamily({prop, value})
      case 'setTextColor':
          setTextColor({prop, value})
      case 'setIconStyle':
          setIconStyle({prop, value})
      case 'setBackGroundStyle':
          setBackGroundStyle({prop, value})
      case 'setButtonsStyle':
          setButtonsStyle({prop, value})
    }
  }


 


  return (
    <Animated.View entering={SlideInDown} exiting={SlideOutDown} className='absolute top-0 pt-5 w-screen h-full bg-white z-[10] rounded-tl-[50px] rounded-tr-[50px] overflow-hidden justify-start items-center px-5 pb-[80px]'  >
      <ScrollView className="w-full h-auto pb-10">
        <View>
          <View className="w-full flex-row justify-center items-center gap-3 pb-10">
            <FontAwesomeIcon icon={['fas', 'circle-half-stroke']} size={30} color='#0060CD' />
            <Text style={{ fontFamily: 'montserrat', fontWeight: 'normal', color: 'black' }}>Costumize</Text>
          </View>
          <Hr color='#8C8C8C' height={1} width='90%' />
        </View>
        <CustomizeText theme={theme} themeDispatch={themeDispatch} />
        <CustomizeIcons theme={theme} themeDispatch={themeDispatch} />
        <CustomizeButtons theme={theme} themeDispatch={themeDispatch} />
        {/* <CustomizeBackground/> */}
        <View className="relative w-full flex flex-row justify-center items-center py-10">



          {/* <TouchableOpacity onPressOut={() => { UiDispatch({ function: 'togglePages', page: 'Costumize' }) }} className="relative w-[150px] h-[46px] border border-1 border-[#bfbfbf] rounded-full flex justify-center items-center mx-2">
            <Text className='relative text-center text-[13px] text-[#707070]'>Cancel</Text>
          </TouchableOpacity> */}



          <TouchableOpacity onPressOut={() => {
            // dispatch({ type: 'setState', ket: 'theme', value: theme.theme })
            UiDispatch({ function: 'togglePages', page: 'Costumize' })
          }} className="relative w-[150px] h-[46px] border border-1 border-[#bfbfbf] bg-[#0060CD] rounded-full flex justify-center items-center mx-2">
            <Text className='relative text-center text-[13px] text-white'>Save</Text>
          </TouchableOpacity>



        </View>
      </ScrollView>
    </Animated.View>
  )
}

export default React.memo(Costumize)