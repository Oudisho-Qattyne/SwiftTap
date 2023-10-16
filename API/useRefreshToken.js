import swifttapAxios from "../axios/SwftTapAxios";
import * as SecureStore from 'expo-secure-store'

const useRefreshToken = async () => {

    try {
        const refresh_token = await SecureStore.getItemAsync('refresh_token');
        const access_token = await swifttapAxios(
            {
                method:'POST',
                url:'/refreshToken',
                headers:{
                    'Accept' : 'application/json'
                },
                params:{
                    access_token:access_token
                }
            }
        )
        await SecureStore.setItemAsync('access_token' , access_token)
    } catch (error) {
        //go to log in again
    }
}