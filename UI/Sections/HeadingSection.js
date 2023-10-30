import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../AppState'

const HeadingSection = ({ items }) => {
    const { AppState, dispatch } = useContext(AppContext)
    let textStyle = {
        color: AppState.profile.theme.textColor,
        fontFamily: AppState.profile.theme.textFont
    }
    // console.log(AppState.profile.sections);
    let Headings = items.map(item => {
        if(item.contents[0].isActive){
            switch (item.fieldName) {
                case 'Name':
                    return(
                        <Text style={textStyle} className="text-[24px] pb-3">{item.contents[0].contentValue}</Text>
                    )
                    
                    break;
                    case 'Title':
                    return(
                        <Text style={textStyle} className="text-[17px] pb-3">{item.contents[0].contentValue}</Text>
                    )
                    
                    break;
                    case 'Bio':
                        return(
                            <Text style={textStyle} className="text-[13px] pb-3">{item.contents[0].contentValue}</Text>
                        )
                        
                        break;
    
                default:
                    break;
            }
        }
    })
    return (
        <View className='w-full flex justify-center items-center py-5'>
{Headings}
        </View>
    )
}

export default HeadingSection