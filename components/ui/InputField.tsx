import { Colors } from '@/contants/Colors'
import { Icons } from '@/contants/Icons'
import { Sizes } from "@/contants/Sizes";
import { Image } from 'expo-image'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

interface InputFieldProps {
    placeholder: string
}

const InputField = (props: InputFieldProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={Icons.Search}
        style={{
          width: 20,
          height: 20,
          marginRight: 14,
          tintColor: Colors.gray,
        }}
      />
      <TextInput placeholder={props.placeholder} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.inputBackground,
    padding: 14,
    borderRadius: Sizes.borderRadius,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  input: {
    fontFamily: "SN-Regular",
    flex: 1,
  },
});

export default InputField