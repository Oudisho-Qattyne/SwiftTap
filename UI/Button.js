import { Text, TouchableOpacity, View } from 'react-native'
import React, { Children, useContext, useState } from 'react'
import { AppContext } from '../AppState'

const Button = ({ title , width , height ,onPressIn , disabled}) => {
    const { AppState, dispatch } = useContext(AppContext)
    const buttons = AppState.profile.theme.buttons
    let buttonStyle
    let textStyle = { 
        color: buttons.textColor,
        fontFamily:AppState.profile.theme.textFont
    }
    if(buttons.fill){
        buttonStyle = {
            width:width,
            height:height,
            borderWidth:1,
            borderColor:  buttons.backGroundColor ,
            backgroundColor: buttons.backGroundColor,
            borderStyle: AppState.buttonsTypes[(buttons.type - 1)].borderStyle,
            borderRadius: AppState.buttonsTypes[(buttons.type - 1)].borderRadius !==0 ? 100 : AppState.buttonsTypes[(buttons.type - 1)].borderRadius,
        }
    }
        else{
            buttonStyle = {
                width:width,
                height:height,
                borderWidth:1,
                borderColor:  buttons.backGroundColor ,
                borderStyle: AppState.buttonsTypes[(buttons.type - 1)].borderStyle,
                borderRadius: AppState.buttonsTypes[(buttons.type - 1)].borderRadius !==0 ? 100 : AppState.buttonsTypes[(buttons.type - 1)].borderRadius,
            }
        }
    return (
        <TouchableOpacity disabled={disabled} onPressIn={onPressIn} style={buttonStyle} className=" justify-center items-center ">
                <Text style={textStyle} className='text-center'>{title}</Text>
        </TouchableOpacity>
    )
}
export default React.memo(Button)