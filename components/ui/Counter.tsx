import { Icons } from '@/contants/Icons';
import React, { useState } from 'react';
import { View } from 'react-native';
import ButtonIcon from './ButtonIcon';
import Label from './Label';

const Counter = () => {
    const [count, setCount] = useState(1);
  return (
    <View>
        <ButtonIcon icon={Icons.Minus} />
      <Label>{count}</Label>
      <ButtonIcon icon={Icons.Plus} />
    </View>
  )
}

export default Counter