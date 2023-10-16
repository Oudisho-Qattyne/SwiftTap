import { View, Text, Image } from 'react-native'
import React , {useState , useEffect, Suspense}from 'react'
import Triangle from './Triangle'
import Svg, {
    Polygon,
} from 'react-native-svg';
import { AppContext } from '../AppState';
import { useContext } from 'react'
// import LinearGradient from 'react-native-linear-gradient';
const Background = () => {
    const { AppState, dispatch } = useContext(AppContext)
    const BackGround = AppState.theme.backGround
    const [angle , setAngle] = useState(0)
    const [colors , setColors] = useState( ['#ffffff','#ffffff'])
    let backGroundStyle = {}


    useEffect(() => {
        setAngle(AppState.theme.backGround.gradientAngel),
        setColors([AppState.theme.backGround.firstGradientColor ,AppState.theme.backGround.secondGradientColor])
    }
    ,[AppState.theme.backGround.gradientAngel,AppState.theme.backGround.firstGradientColor ,AppState.theme.backGround.secondGradientColor])
    
    
    switch (BackGround.type) {
        case 1:
            backGroundStyle = {
                backgroundColor: BackGround.backGroundColor
            }
            return (
                <View style={backGroundStyle} className='absolute w-screen h-full -z-20' />
            )
        case 2:
            backGroundStyle = {
                backgroundColor: BackGround.backGroundColor
            }
            return (
                <View style={backGroundStyle} className='absolute w-screen h-full -z-10' />
            )
        case 3:
            return (
                <Image className="absolute w-screen h-full -z-10" source={{uri: BackGround.backGroundImage}}/>
            )
        case 4:
            return (
                <View>
                    
                </View>
                // <LinearGradient className="absolute w-screen h-full -z-10" useAngle={true} angle={parseInt(AppState.theme.backGround.gradientAngel , 100)} colors={colors}>

                // </LinearGradient>
            )
        case 5:
            themeBackGroundColor = {
                backgroundColor: BackGround.themeBackGroundColor
            }
            backGroundStyle = {
                backgroundColor: BackGround.backGroundColor
            }
            return(
                <View className="absolute w-screen h-full -z-10">
                    <View style={themeBackGroundColor} className='absolute w-screen h-full -z-20' /> 
                    <View style={backGroundStyle} className='relative top-[210px] rounded-tl-[70px] rounded-tr-[70px]  w-screen h-full ' /> 
                </View>
            )
            case 6:
                backGroundStyle = {
                    backgroundColor: BackGround.backGroundColor
                }
                return(
                    <View className="absolute w-screen h-full -z-10">
                        <Image source={require('./../assets/Images/carRace.png')} style={themeBackGroundColor} className='absolute w-screen h-full -z-20' /> 
                        <View style={backGroundStyle} className='relative top-[210px] rounded-tl-[70px] rounded-tr-[70px]  w-screen h-full ' /> 
                    </View>
                )
        default:
            return (
                <View className="absolute w-screen h-full">

                </View>
            )
    }

}

export default Background