import { icons } from "@/constants"
import { DriverCardProps } from "@/types/type"
import { Image, Text, TouchableOpacity, View } from "react-native"

const DriverCard = ({ item, selected, setSelected }: DriverCardProps) => {
  return (
    <TouchableOpacity
      onPress={setSelected}
      className={`${selected === item.id ? "bg-general-600": "bg-white"} flex flex-row 
      items-center justify-between py-5 px-3 rounded-xl`}
    >
      <Image 
        source={{ uri: item.profile_image_url }}
        className="w-14 h-14 rounded-full"
      />

      <View className="flex flex-1 flex-col items-start justify-center mx-3">
        <View className="flex flex-row items-center justify-start mb-1">
          <Text className="text-lg font-JakartaMedium">{item.title || `${item.first_name} ${item.last_name}`}</Text>

          <View className="flex flex-row items-center space-x-1 ml-2">
            <Image 
              source={icons.star} 
              className="w-3.5 h-3.5"
            />

            <Text className="text-sm font-JakartaRegular">4</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default DriverCard