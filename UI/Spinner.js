import { Text, View, StyleSheet } from 'react-native';
import React from 'react'

import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
    cancelAnimation,
    Easing,
    FadeIn,
    FadeOut,
} from 'react-native-reanimated';
import { useEffect } from 'react';

// const Loading = () => {
//   return (
//     <Animated.View entering={FadeIn} exiting={FadeOut} className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center">
//         <View className="absolute top-0 left-0 w-screen min-h-screen bg-black opacity-20">
//             </View>

//       <Text className=' relative text-6xl text-white text-center'>Loading</Text>
//     </Animated.View>
//   )
// }




const Spinner = () => {
    const rotation = useSharedValue(0);
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotateZ: `${rotation.value}deg`,
                },
            ],
        };
    }, [rotation.value]);

    useEffect(() => {
        rotation.value = withRepeat(
            withTiming(360, {
                duration: 1000,
                easing: Easing.linear,
            }),
            200
        );
        return () => cancelAnimation(rotation);
    }, []);

    return (
            <Animated.View style={[styles.spinner, animatedStyles]} />
    );
};
const styles = StyleSheet.create({
    spinner: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 7,
        borderTopColor: '#f5f5f5',
        borderRightColor: '#f5f5f5',
        borderBottomColor: '#f5f5f5',
        borderLeftColor: '#1776F2',
    },
});
export default Spinner;