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
    let response = {}
    let err = {}
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
    let response = {}
    let err = {}
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
      await save('accessToken', res.data?.access_token)
      await save('refreshToken', res.data?.refresh_token)
      await save('expiresIn', JSON.stringify(parseInt(Date.now() / 1000) + res.data?.expires_in - 60))
      // console.log(res.data);
      return (true)

    } catch (error) {
      console.log(error.response.data);
      payload.CreateAccountDispatch({ type: 'setPage', page: 1 })
      payload.UiEventsDispatch({ event: 'logedIn', value: false })
      payload.UiEventsDispatch({ event: 'loading', value: false })
      return (false)
    }
  }


  const industries = async () => {
    console.log('industries');
    let res = {}
    let err = {}
    try {
      payload.UiEventsDispatch({ event: 'loading', value: true })
      let access_token = await SecureStore.getItemAsync('accessToken')
      const response = await swifttapAxios({
        method: 'GET',
        url: '/industries',
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${access_token}`
        }
      })
      // console.log(res.data.data);
      res = response.data.data


    } catch (error) {
      err = error
      // console.log(error);

    }

    payload.UiEventsDispatch({ event: 'loading', value: false })
    return ({ res, err })
  }


  const themes = async () => {
    console.log('themes');
    let res = {}
    let err = {}
    try {
      payload.UiEventsDispatch({ event: 'loading', value: true })
      let access_token = await SecureStore.getItemAsync('accessToken')
      const response = await swifttapAxios({
        method: 'GET',
        url: '/themes',
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${access_token}`
        },
        params: {
          page: payload.page,
          industry_id: payload.industry_id
        }
      })
      res = response


    } catch (error) {
      err = error
    }
    payload.UiEventsDispatch({ event: 'loading', value: false })
    return ({ res, err })
  }


  const sendInformations = async () => {
    console.log('send informations');
    let res = {}
    let err = {}
    const access_token = await SecureStore.getItemAsync('accessToken')
    let localUri = payload.image.assets[0].uri;
    let filename = localUri.split('/').pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    let formData = new FormData()
    formData.append('image', { uri: localUri, name: filename, type });
    try {
      const response = await swifttapAxios.post('/informations' , formData , {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'multipart/form-data'
        },
        params:{
          first_name: payload.first_name,
          last_name: payload.last_name,
          gender: payload.gender,
          birth_date: payload.birth_date,
          company_name: payload.company_name,
          work_title: payload.work_title,
          email: payload.email,
          phone: payload.phone,
          whatsapp: payload.whatsapp,
          telegram: payload.telegram,
          theme: payload.theme,
          terms: payload.terms,
          industry_id: payload.industry_id
        }
      }
      )
      res = response
    } catch (error) {
      err = error
    }

    payload.UiEventsDispatch({
      event: 'laoding',
      value: false
    })
    payload.UiEventsDispatch({ event: 'loading', value: false })

    return ({ res, err })
  }

  const profiles = async () => {
    console.log('profiles');
    let res = {}
    let err = {}
    const access_token = await SecureStore.getItemAsync('accessToken')
    try {
      const response = await swifttapAxios({
        method: 'GET',
        url: '/profiles',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${access_token}`,
        },
        params:{
          type_id:payload.type_id
        }
      })
      res = response
    } catch (error) {
      err = error
      console.log(error);
    }
    payload.UiEventsDispatch({ event: 'loading', value: false })

    return ({ res, err })
  }


  const profile = async () => {
    console.log('profile');
    let res = {}
    let err = {}
    const access_token = await SecureStore.getItemAsync('accessToken')
    try {
      const response = await swifttapAxios({
        method: 'GET',
        url: `/profiles/${payload.profile}`,
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${access_token}`,
        },
        params:{
          type_id:payload.type_id
        }
      })
      res = response
    } catch (error) 
    {
      err = error
    }
    payload.UiEventsDispatch({ event: 'loading', value: false })

    return ({ res, err })
  }

  payload.UiEventsDispatch({ event: 'loading', value: true })


  const expires_in = await SecureStore.getItemAsync('expiresIn');
  const now = parseInt(Date.now() / 1000)
  let refreshTokenDone = true
  if (now > expires_in) {

    refreshTokenDone = await refreshToken()

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
        return (
          await industries()
        )
        break
      case 'themes':
        return (
          await themes()
        )
      case 'sendInformations':
        return (
          await sendInformations()
        )
      case 'profiles':
        return (
          await profiles()
        )
      case 'profile':
        return (
          await profile()
        )
      default:
        break;
    }
  }

}

export default API