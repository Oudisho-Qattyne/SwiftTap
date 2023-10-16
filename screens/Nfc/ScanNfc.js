import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import NfcManager, { NfcTech, Ndef } from 'react-native-nfc-manager';
NfcManager.start();
const ScanNfc = () => {
  const [scanning, setScanning] = useState(false)
  const [found, setFound] = useState(false)
  const [writing, setWriting] = useState(false)
  const [written, setWritten] = useState(false)
  const [message , setMessage] = useState(null)
  async function writeNdef({ type, value }) {
    let result = false;
    try {
      // STEP 1
      setWriting(true)
      setWritten(false)
      await NfcManager.requestTechnology(NfcTech.Ndef);

      const bytes = Ndef.encodeMessage([Ndef.textRecord('Hi')]);
      console.log(bytes);
      if (bytes) {
        await NfcManager.ndefHandler // STEP 2
          .writeNdefMessage(bytes); // STEP 3
        setWritten(true)
        setWriting(false)
        result = true;
      }
    } catch (ex) {
      setWritten(false)
      setWriting(false)
      console.warn(ex);
    } finally {
      // STEP 4
      setWriting(false)
      NfcManager.cancelTechnologyRequest();
    }

    return result;
  }


  async function readNdef() {
    try {
      // register for the NFC tag with NDEF in it
      setScanning(true)
      setFound(false)
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      setFound(true)
      console.log('Tag found', tag.ndefMessage);
      setMessage(Ndef.text.decodePayload(tag.ndefMessage[0].payload))
    } catch (ex) {
      setScanning(false)
      setFound(false)
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      setScanning(false)
      NfcManager.cancelTechnologyRequest();
    }
  }

  return (
    <View className='w-screen h-full flex justify-center items-center'>
      <TouchableOpacity className="w-[100px] h-[100px] rounded-full flex justify-center items-center bg-black" onPress={readNdef}>
        <Text className="text-white font-black">Scan a Tag</Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-[100px] h-[100px] rounded-full flex justify-center items-center bg-black" onPress={writeNdef}>
        <Text className="text-white font-black">write a Tag</Text>
      </TouchableOpacity>
      {scanning &&
        <Text>Scanning</Text>}
      {found &&
      <View> 
        <Text>Found</Text>
        <Text>{message}</Text>
        </View>
      }
      {writing &&
        <Text>writing</Text>
      }
      {written &&
        <Text>written</Text>
      }
    </View>
  )
}

export default ScanNfc