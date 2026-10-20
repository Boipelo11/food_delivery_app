import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import { CustomButtonProps } from '../type'

const CustomButton = ({
  onPress,
  title = 'Click Me',
  style,
  textStyle,
  leftIcon,
  isLoading = false
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#FE8C00',
        borderRadius: 999,
        padding: 12,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onPress={onPress}
    >
      {leftIcon}

      <View className='flex-center flex-row'>
        {isLoading ? (
          <ActivityIndicator size='small' color='white' />
        ) : (
          <Text
            style={[
              {
                color: '#fafafa',
                fontSize: 16,
                fontWeight: '600'
              }
            ]}
          >
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  )
}
export default CustomButton
