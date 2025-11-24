import { Colors } from '@/contants/Colors'
import { Sizes } from '@/contants/Sizes'
import React from 'react'
import { Text, View } from 'react-native'

const CartCard = () => {
  return (
    <View style={{backgroundColor: Colors.white, padding: 16, borderRadius: Sizes.borderRadius}}>
      <Text>CartCard</Text>
    </View>
  )
}

export default CartCard