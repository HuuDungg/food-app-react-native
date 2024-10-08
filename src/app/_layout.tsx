import { Slot, Stack } from "expo-router"
import { RootSiblingParent } from 'react-native-root-siblings';
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
    return (
        <SafeAreaView style={
            {
                flex: 1
            }
        }>
            <RootSiblingParent>
                <Stack initialRouteName="WelcomePage">
                    <Stack.Screen name="index" options={{
                        headerTitle: "Welcome page",
                        headerShown: false
                    }} />
                    <Stack.Screen name="(auth)/signup" options={{
                        headerTitle: "SignUp page",
                        headerShown: false
                    }} />
                    <Stack.Screen name="(tab)" options={{
                        headerTitle: "HuuDung3",
                        headerShown: false
                    }} />
                    <Stack.Screen name="(auth)/verify" options={{
                        headerTitle: "Verify code",
                    }} />
                    <Stack.Screen name="(auth)/login" options={{
                        headerTitle: "Login",
                        headerShown: false
                    }} />
                </Stack>
            </RootSiblingParent>
        </SafeAreaView >
    )
}

export default RootLayout