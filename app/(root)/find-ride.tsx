import RideLayout from "@/components/RideLayout";
import { useLocationStore } from "@/store";
import { Text, View } from "react-native";

const FindRide = () => {
  const { userAddress, destinationAddress, setUserLocation, setDestinationLocation } = useLocationStore();



  return (
    <RideLayout>
      <Text className="text-2xl font-JakartaSemiBold">Find Ride</Text>
    </RideLayout>
  )
}

export default FindRide;