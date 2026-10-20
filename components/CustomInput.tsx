import { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { CustomInputProps } from '../type'

const CustomInput = ({
  placeholder = 'Enter Text',
  value,
  onChangeText,
  label,
  secureTextEntry = false,
  keyboardType = 'default'
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <View className='w-full'>
      <Text className='label'>{label}</Text>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        placeholderTextColor='#888'
        style={{
          borderRadius: 8,
          padding: 12,
          width: '100%',
          fontSize: 16,
          fontFamily: 'QuickSand-SemiBold',
          color: '#181C2E',
          borderBottomWidth: 1,
          borderBottomColor: isFocused ? '#FE8C00' : '#D1D5DB',
          lineHeight: 20
        }}
      />
    </View>
  )
}

export default CustomInput
