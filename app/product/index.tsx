import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const index = () => {
  const { title } = useLocalSearchParams()

  return (
    <>
      <Stack.Screen options={{ title: title as string || 'Product' }} />
      <View>
        <Text>index</Text>
      </View>
    </>
  )
}

export default index