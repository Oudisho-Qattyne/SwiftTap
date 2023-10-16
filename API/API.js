import { useContext, useState } from "react";
import swifttapAxios from "../axios/SwftTapAxios";
import * as SecureStore from 'expo-secure-store';
import { AppContext } from "../AppState";
import Loading from "../UI/Loading";






const API = async ({ type, payload }) => {
  console.log(); ('API');


  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  const verify = async (code) => {
    console.log('verify');
    let response = null
    let err = null
    try {
      let access_token = await SecureStore.getItemAsync('accessToken');
      const res = await swifttapAxios({
        method: 'POST',
        url: '/verify',
        headers: {
          "Accept": 'application/json',
          'Authorization': `Bearer ${access_token}`
        },
        params: {
          'code': code
        }
      })
      response = res

      payload.UiEventsDispatch({ event: 'loading', value: false })
    }
    catch (error) {
      err = error
      payload.UiEventsDispatch({ event: 'loading', value: false })
    }
    return ({ err, response })

  }

  const resendCode = async () => {
    console.log('resendCode');
    let response = null
    let err = null
    try {
      let access_token = await SecureStore.getItemAsync('accessToken')
      const res = await swifttapAxios(
        {
          method: 'POST',
          url: '/resend-code',
          headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${access_token}`
          }
        }
      )
      response = res
      payload.UiEventsDispatch({ event: 'loading', value: false })
    }
    catch (error) {
      err = error
      payload.UiEventsDispatch({ event: 'loading', value: false })
    }
    return ({ err, response })
  }

  const refreshToken = async () => {
    console.log('refreshToken');
    try {
      let refresh_token = await SecureStore.getItemAsync('refreshToken');
      const res = await swifttapAxios({
        method: 'POST',
        url: '/refreshtoken',
        headers: {
          'Accept': 'application/json',
        },
        params: {
          'refresh_token': refresh_token
        }
      })
      await save('accessToken', res.data.access_token)
      await save('refreshToken', res.data.refresh_token)
      await save('expiresIn', JSON.stringify(parseInt(Date.now() / 1000) + res.data.expires_in - 60))
      // console.log(res.data);
      return (true)

    } catch (error) {
      // console.log(error.response.data);
      payload.CreateAccountDispatch({ type: 'setPage', page: 1 })
      payload.UiEventsDispatch({ event: 'loading', value: false })
      return (false)
    }
  }


  const industries = async () => {
    console.log('industries');
    try {
      payload.UiEventsDispatch({ event: 'loading', value: true })
      // let access_token = await SecureStore.getItemAsync('accessToken')
      const res = swifttapAxios({
        method: 'GET',
        url: '/api/v1/industries',
        headers: {
          "Accept": "application/json",
          // "Authorization": `Bearer ${access_token}`
        }
      })
      console.log(res.data);
      payload.UiEventsDispatch({ event: 'loading', value: false })

    } catch (error) {
      console.log(error);
      payload.UiEventsDispatch({ event: 'loading', value: false })

    }
  }

  payload.UiEventsDispatch({ event: 'loading', value: true })


  const expires_in = await SecureStore.getItemAsync('expiresIn');
  const now = parseInt(Date.now() / 1000)
  let refreshTokenDone = true
  if (now > expires_in) {

    // refreshTokenDone = await refreshToken()

  }

  if (refreshTokenDone) {
    switch (type) {
      case 'verify':
        return (
          await verify(payload.code)
        )
      case "resendCode":
        return (
          await resendCode()
        )
      case 'industries':
          return(
            await industries()
          )
        break
      default:
        break;
    }
  }

}

export default API