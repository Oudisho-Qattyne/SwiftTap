import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ScaleDecorator } from 'react-native-draggable-flatlist'
import Field from './Field'
// import Animated, { useAnimatedGestureHandler } from 'react-native-reanimated'
// import { PanGestureHandler } from 'react-native-gesture-handler'

const DragableField = ({ item, drag, isActive , section }) => {
    return (
        <View >
            <ScaleDecorator>
                <TouchableOpacity
                    onLongPress={drag}
                    disabled={isActive}>
                    <Field section={section} name={item.name} value={item.value} id={item.id} isActive={item.isActive}  />
                </TouchableOpacity>
            </ScaleDecorator>
        </View>
    )
}

export default React.memo(DragableField)