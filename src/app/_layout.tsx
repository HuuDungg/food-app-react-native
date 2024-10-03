import { Slot, Stack } from "expo-router"
import { Text, View } from "react-native"

const RootLayout = () => {
    return (
        <Stack initialRouteName="WelcomePage">
            <Stack.Screen name="index" options={{
                headerTitle: "Welcome page",
                headerShown: false
            }} />
            <Stack.Screen name="(tab)" options={{
                headerTitle: "HuuDung"
            }} />
        </Stack>
    )
}

export default RootLayout