import { useRef, useState } from "react";
import swifttapAxios from "../axios/SwftTapAxios";

const signUp = async ({info , setLoading , setError , setRes}) => {

    try {
        setLoading(true)
        const res = await swifttapAxios(
            {
                method:'POST',
                url:'/register',
                headers: {
                    'Accept': 'application/json'
                },

                params: {
                    'phone': info.phone,
                    'email':info.email,
                    'password': info.password,
                    'password_confirmation': info.password_confirmation,
                    'name': info.name,
                    'role': info.role,
                }
            }
        )
            setRes(res)
            setLoading(false)
    } catch (err) {
        setError(err)
       setLoading(false)

        
    }

}


export default signUp