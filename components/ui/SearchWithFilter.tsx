import { Icons } from '@/contants/Icons'
import React from 'react'
import { View } from 'react-native'
import ButtonIcon from './ButtonIcon'
import InputField from './InputField'

const SearchWithFilter = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
      <InputField placeholder='Search' />
      <ButtonIcon icon={Icons.Setting} />
    </View>
  )
}

export default SearchWithFilter