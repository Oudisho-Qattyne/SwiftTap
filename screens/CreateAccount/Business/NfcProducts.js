import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../AppState'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'
import NFC from './../../../assets/SVGS/NFC.svg'
import Messages from './../../../assets/SVGS/Messages.svg'
import API from '../../../API/API'

const NfcProducts = () => {
    const { CreateAccountState, CreateAccountDispatch, UiEventsDispatch , journeyInputFields, journeyDispatch } = useContext(AppContext)
    const [nfcProducts, setNfcProducts] = useState([])
    const [info , setInfo] = useState({
        nfc_products:{
            ...journeyInputFields['nfc_products']
        }
    })
console.log(info);
    const addOrRemoveNfcProducts = (id) => {
        const prevNfcProducts = [...info.nfc_products.nfc_products.value]
        if (prevNfcProducts.find(id2 => id2 == id)) {
            const newNfcProducts = []
            for (let i = 0; i < prevNfcProducts.length; i++) {
                if (prevNfcProducts[i] != id) {
                    newNfcProducts.push(prevNfcProducts[i])
                }
            }
            setInfo( prev =>({
                ...prev,
                nfc_products:{
                    ...prev.nfc_products,
                    nfc_products:{
                        ...prev.nfc_products.nfc_products,
                        value:newNfcProducts,
                        error:null
                    }
                }
            }))
        }
        else {
            prevNfcProducts.push(id)
            setInfo( prev =>({
                ...prev,
                nfc_products:{
                    ...prev.nfc_products,
                    nfc_products:{
                        ...prev.nfc_products.nfc_products,
                        value:prevNfcProducts,
                        error:null
                    }
                }
            }))
        }
    }

    const sendInfo = () => {
        if(info.nfc_products.nfc_products.value.length!=0){
            journeyDispatch({function:'setSection' , section:info})
            CreateAccountDispatch({ type: 'nextPage' })
        }
        else{
            setInfo(prev => ({
                ...prev,
                nfc_products:{
                    ...prev.nfc_products,
                    nfc_products:{
                        ...prev.nfc_products.nfc_products,
                        error:'select nfc products'
                    }
                }
            }))
        }
    }

    const fetchNfcProducts = async () => {
        const { res, err } = await API({
            type: 'nfcProducts',
            payload: {
                CreateAccountDispatch: CreateAccountDispatch,
                UiEventsDispatch: UiEventsDispatch
            }
        })
        if (res?.status == 200) {
            setNfcProducts(res.data.data)
        }
        else {
            console.log(err); 
        }
    }

    useEffect(() => {
        fetchNfcProducts()
    }, [])

    return (
        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">
            <View className='p-6'>

                <View className='w-[300px] h-[213px] flex justify-center items-center '>
                    <Image className="absolute max-w-[137px] max-h-[150px] top-10 z-10" source={require('./../../../assets/Images/NfcMobiles.png')} />
                    <Image className="absolute -top-5 left-7 max-w-[93px] max-h-[102px]" source={require('./../../../assets/Images/NfcTag.png')} />
                    <View className="absolute top-3 right-12 p-2 rounded-[10px] justify-center items-center bg-black z-[11]">
                        <NFC />
                    </View>
                </View>
            </View>
            <Text className="w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[20px] pb-6" numberOfLines={2}>NFC Products have been used before In Your Company</Text>
            {
                info.nfc_products.nfc_products.error && 
                <View>
                    <Text className="text-left text-red-700">{info.nfc_products.nfc_products.error}</Text>
                </View>
            }
                <FlatList
                    style={{ width: '100%' }}
                    contentContainerStyle={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}
                    data={nfcProducts}
                    keyExtractor={item => item.id}
                    renderItem={item =>
                        <TouchableOpacity
                            onPress={() => addOrRemoveNfcProducts(item.item.id)}
                            className="relative w-[140px] h-[50px] border border-1 border-[#bfbfbf] rounded-[10px] flex justify-center items-center m-1"
                            style={{
                                borderColor: info.nfc_products.nfc_products.value.find(id => id == item.item.id) ? '#1776F2' : '#bfbfbf',
                                backgroundColor: info.nfc_products.nfc_products.value.find(id => id == item.item.id) ? '#1776F2' : '#ffffff',

                            }}
                        >
                            <Text className="text-black"
                                style={{
                                    color: info.nfc_products.nfc_products.value.find(id => id == item.item.id) ? '#ffffff' : '#000000'
                                }}
                            >{item.item.name}</Text>
                        </TouchableOpacity>
                    }
                />

            <TouchableOpacity onPress={() => sendInfo()} className="absolute w-[296px] h-[48px] bottom-40 rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">next</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default NfcProducts