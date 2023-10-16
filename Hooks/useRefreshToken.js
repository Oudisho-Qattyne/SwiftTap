import swifttapAxios from "../axios/SwftTapAxios";
import * as SecureStore from 'expo-secure-store'
export default useRefreshToken = async () => {
    const refresh_token = await SecureStore.getItemAsync('refresh_token')
    console.log(refresh_token);
    try{
        const res = await swifttapAxios(
            {
                method:'POST',
                url:'/refreshtoken',
                headers:{
                    'Accept':'application/json'
                },
                params:{
                    'refresh_token':refresh_token
                }
            }
        )
        console.log(res);
    }
    catch(error){
        console.log(error);
    }
}