import { Link, router } from 'expo-router'
import { useState } from 'react'
import { Alert, Text, View } from 'react-native'
import CustomButton from '../../../components/CustomButton'
import CustomInput from '../../../components/CustomInput'

const Signin = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })

  const submit = async () => {
    if (!form.email || !form.password)
      return Alert.alert(
        'Error',
        'Please enter a valid email address and password.'
      )

    setIsSubmitting(true)

    try {
      Alert.alert('Success', 'User signed in successfully')
      router.replace('/')
    } catch (error: any) {
      Alert.alert('Error', 'error.message')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <View className='gap-10 bg-white rounded-lg p-5 mt-5'>
      <CustomInput
        placeholder='Enter your email'
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        label='Email'
        keyboardType='email-address'
      />
      <CustomInput
        placeholder='Password'
        value={form.password}
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, password: text }))
        }
        label='Email'
        secureTextEntry={true}
      />
      <CustomButton title='Sign In' isLoading={isSubmitting} onPress={submit} />
      <View className='flex justify-center mt-5 flex-row gap-5'>
        <Text className='base-regular text-gray-100'>
          Don't have an account yet?
        </Text>
        <Link href='/sign-up'>
          <Text className='base-bold text-primary'>Sign Up</Text>
        </Link>
      </View>
    </View>
  )
}

export default Signin
