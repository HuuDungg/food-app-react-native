import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { APP_COLOR } from "@/utils/constant";
import ShareButton from "@/components/button/share.button";
import bg from '@/assets/auth/welcome-background.png';
import fb from '@/assets/auth/facebook.png';
import gg from '@/assets/auth/google.png';
import { LinearGradient } from "expo-linear-gradient";
const styles = StyleSheet.create({
    //style of above screen
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
    welcomeText: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 20
    },
    heading: {
        fontSize: 40
    },
    body: {
        fontSize: 25,
        color: APP_COLOR.ORANGE,
        marginVertical: 11
    },
    footer: {

    },
    //style of blow screen
    btnContainer: {
        flex: 0.4,
        alignItems: 'center',
        alignSelf: 'stretch',
        gap: 30
    },
    btnContent: {
        padding: 20,
        borderRadius: 20,
        flexDirection: 'row',
        gap: 30
    }
})

const WelcomePage = () => {
    return (
        <ImageBackground
            style={{
                flex: 1
            }}
            source={bg}
        >
            <LinearGradient
                // Background Linear Gradient
                colors={['transparent', '#191B2F']}
                locations={[0.2, 0.8]}
                style={{
                    flex: 1
                }}
            >
                <View style={styles.container}>
                    <View style={styles.welcomeText}>
                        <Text style={styles.heading}>Welcome to</Text>
                        <Text style={styles.body}>HuuDung Food</Text>
                        <Text style={styles.footer}>Try to get MamTom everyday</Text>
                    </View>
                    <View style={styles.btnContainer}>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <View
                                style={{
                                    borderBottomColor: 'white',
                                    borderBottomWidth: 1,
                                    paddingHorizontal: 50
                                }}
                            />
                            <Text
                                style={{
                                    position: 'relative',
                                    top: 10,
                                    color: 'white',
                                    marginHorizontal: 10
                                }}
                            >Sign in with</Text>
                            <View
                                style={{
                                    borderBottomColor: 'white',
                                    borderBottomWidth: 1,
                                    paddingHorizontal: 50
                                }}
                            />
                        </View>
                        <View>
                            <View style={styles.btnContent}>
                                <ShareButton
                                    title="facebook"
                                    onPress={() => {
                                        alert("hihi")
                                    }}
                                    textStyle={{
                                        textTransform: 'uppercase'
                                    }}
                                    pressStyle={
                                        {
                                            alignSelf: 'flex-start'
                                        }
                                    }
                                    btnStyle={
                                        {
                                            justifyContent: 'center',
                                            borderRadius: 100,
                                            backgroundColor: 'white',
                                            borderColor: 'white',
                                            borderWidth: 1
                                        }
                                    }
                                    icons={
                                        <Image source={fb} />
                                    }
                                />
                                <ShareButton
                                    title="Google"
                                    onPress={() => {
                                        alert("hihi")
                                    }}
                                    textStyle={{
                                        textTransform: 'uppercase'
                                    }}
                                    pressStyle={
                                        {
                                            alignSelf: 'flex-start',

                                        }
                                    }
                                    btnStyle={
                                        {
                                            justifyContent: 'center',
                                            borderRadius: 100,
                                            backgroundColor: 'white',
                                            borderColor: 'white',
                                            borderWidth: 1

                                        }
                                    }
                                    icons={
                                        <Image source={gg} />
                                    }
                                />
                            </View>
                        </View>
                        <View
                            style={{
                                justifyContent: "center"
                            }}
                        >
                            <ShareButton
                                title="Start with your email"
                                onPress={() => {
                                    alert("hihi")
                                }}
                                textStyle={{
                                    textTransform: 'uppercase',
                                    paddingLeft: 30,
                                    paddingRight: 30,
                                    paddingVertical: 10,
                                    color: 'white'
                                }}
                                pressStyle={
                                    {
                                        alignSelf: 'stretch',
                                    }
                                }
                                btnStyle={
                                    {
                                        justifyContent: 'center',
                                        borderRadius: 100,
                                        backgroundColor: 'gray',
                                        borderWidth: 0
                                    }
                                }
                            />
                        </View>
                        <View>
                            <Text style={{
                                color: 'white'
                            }}>Aready have an account? Sign in </Text>
                        </View>
                    </View>
                </View>
            </ LinearGradient>
        </ImageBackground>
    )
}

export default WelcomePage