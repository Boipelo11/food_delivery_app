import { router } from 'expo-router'
import { Button, Text, View } from 'react-native'

const Signin = () => {
  return (
    <View>
      <Text>sign-in</Text>
      <Button title='Sign Up' onPress={() => router.push('/sign-up')} />
    </View>
  )
}

export default Signin
