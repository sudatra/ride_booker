import RideLayout from "@/components/RideLayout";
import { useDriverStore, useLocationStore } from "@/store";
import { useUser } from "@clerk/clerk-expo";
import { Text, View } from "react-native";

const BookRide = () => {
  const { user } = useUser();
  const { userAddress, destinationAddress } = useLocationStore();
  const { drivers, selectedDriver } = useDriverStore();

  const driverDetails = drivers?.filter((driver) => +driver.id! === selectedDriver)[0];

  return (
    <RideLayout title="Book Ride">
      <>
        <Text className="text-xl font-JakartaSemiBold mb-3">Ride Information</Text>
      </>
    </RideLayout>
  )
}

export default BookRide;