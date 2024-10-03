import { Link } from "expo-router"
import { Text, View } from "react-native"

const HomePage = () => {
    return (
        <>
            <View>
                <Text>this is user home</Text>
                <Link href="/">Go to work</Link>
            </View>
        </>
    )
}

export default HomePage