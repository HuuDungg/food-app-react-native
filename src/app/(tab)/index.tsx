import { Link } from "expo-router"
import { Text, View } from "react-native"

const HomeTab = () => {
    return (
        <View>
            <Text>this is home tab</Text>
            <Link href={'/(user)/home'}>home</Link>
        </View>
    )
}
export default HomeTab