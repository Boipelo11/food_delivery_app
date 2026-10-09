import { Image, TouchableOpacity } from 'react-native'
import { images } from '../constants'

const CartButton = () => {
  const totalItems = 10

  return (
    <TouchableOpacity
      style={{
        width: 50,
        height: 50,
        backgroundColor: 'black',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onPress={() => {}}
    >
      <Image
        source={images.bag}
        className='size-5'
        style={{ width: 24, height: 24 }}
        resizeMode='contain'
      />
    </TouchableOpacity>
  )
}
export default CartButton
