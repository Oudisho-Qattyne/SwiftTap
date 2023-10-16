import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../AppState'


const useTheme = () => {
    const { dispatch } = useContext(AppContext)

    useEffect(() => {
        dispatch({type:'setLoading' , loading:true})
        axios({
            method:'get',
            url:'https://chaptap.byarcher.com/api/profile'
        }).then(res => {
            dispatch({type:'setState' , allState:res.data})
            dispatch({type:'setLoading' , loading:false})
        }).catch(err => console.log(err))
    },[])
}

export default useTheme