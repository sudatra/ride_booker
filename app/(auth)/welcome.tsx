import CustomButton from "@/components/CustomButton";
import { onboarding } from "@/constants";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeSwipeIndex, setActiveSwipeIndex] = useState<number>(0);

  const isLastSlide = (activeSwipeIndex === onboarding.length - 1);

  const changeActiveSwipeIndex = (currentIndex: number) => {
    setActiveSwipeIndex(currentIndex);
  }

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity 
        className="w-full flex justify-end items-end p-5"
        onPress={() => {
          router.replace('/(auth)/sign-up')
        }}
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />}
        activeDot={<View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />}
        onIndexChanged={(index: number) => changeActiveSwipeIndex(index)}
      >
        {
          onboarding.map((item) => (
            <View 
              key={item.id}
              className="flex items-center justify-center p-5"
            >
              <Image 
                source={item.image}
                className="w-full h-[300px]"
                resizeMode="contain"
              />
              
              <View className="flex flex-row items-center justify-center w-full mt-10">
                <Text className="text-black text-3xl font-JakartaBold mx-10 text-center">{item.title}</Text>
              </View>

              <Text className="text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">{item.description}</Text>
            </View>
          ))
        }
      </Swiper>

      <CustomButton 
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() => isLastSlide ? router.replace('/(auth)/sign-up') : swiperRef.current?.scrollBy(1)}
        className="w-11/12 mt-10 mb-3"
      />
    </SafeAreaView>
  )
}

export default Welcome;