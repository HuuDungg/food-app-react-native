import ShareButton from "@/components/button/share.button"
import { Image, StyleSheet, Text, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import ShareInput from "@/components/input/share.input";
import { useState } from "react";
import { Link, router } from "expo-router";
import { APP_COLOR } from "@/utils/constant";
import fb from '@/assets/auth/facebook.png';
import gg from '@/assets/auth/google.png';
import { loginApi } from "@/utils/api";
import Toast from "react-native-root-toast";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30
    },
    btnContainer: {
        flex: 0.4,
        gap: 30
    },
    inputContainer: {
        flex: 0.6,
        gap: 30
    },
    loginContainer: {
        alignItems: "center",
        gap: 20
    },
    otherContainer: {
        gap: 30
    },
    socialBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 30
    }
})
const LoginPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handleLogin = async () => {
        try {
            setIsLoading(true);
            const res = await loginApi(email, password);
            if (res.statusCode === 201) {
                router.navigate({ pathname: '/(tab)/' })
                Toast.show('Login successfuly', {
                    duration: Toast.durations.LONG,
                    position: Toast.positions.BOTTOM,
                    shadow: true,
                    animation: true,
                    hideOnPress: true,
                    delay: 0,
                    backgroundColor: APP_COLOR.ORANGE,
                    opacity: 1
                });
            } else if (res.statusCode === 400) {
                router.navigate({ pathname: '/(auth)/verify', params: { mail: email } })
                Toast.show('Please check your email to verify', {
                    duration: Toast.durations.LONG,
                    position: Toast.positions.BOTTOM,
                    shadow: true,
                    animation: true,
                    hideOnPress: true,
                    delay: 0,
                    backgroundColor: APP_COLOR.ORANGE,
                    opacity: 1
                });
            }
            else {
                Toast.show(Array.isArray(res.message) ? res.message[0] : res.message, {
                    duration: Toast.durations.LONG,
                    position: Toast.positions.BOTTOM,
                    shadow: true,
                    animation: true,
                    hideOnPress: true,
                    delay: 0,
                    backgroundColor: APP_COLOR.ORANGE,
                    opacity: 1
                });
            }
            setIsLoading(false);
        } catch (error) {
            console.log("check error: ", error)
        }
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Ionicons
                        name="chevron-back"
                        size={24}
                        color="black"
                        style={{
                            borderWidth: 1,
                            alignSelf: 'flex-start',
                            borderRadius: 10,
                            padding: 7,
                            marginVertical: 20,
                            backgroundColor: 'white'
                        }}
                        onPress={() => {
                            router.navigate('/')
                        }}
                    />
                    <Text style={{
                        fontSize: 37,
                        color: 'Black'
                    }}>
                        Login
                    </Text>
                    <ShareInput
                        title="Email"
                        value={email}
                        setValue={setEmail}
                        keyboardType="email-address"
                    />
                    <ShareInput
                        title="Password"
                        value={password}
                        setValue={setPassword}
                        secureTextEntry={true}
                        keyboardType="visible-password"
                    />
                </View>
                <View style={styles.btnContainer}>
                    <View style={styles.loginContainer}>
                        <View>
                            <Text style={{
                                color: APP_COLOR.ORANGE
                            }}>Forgot password?</Text>
                        </View>

                        <View>
                            <ShareButton
                                onPress={() => {
                                    handleLogin();
                                }}
                                textStyle={{
                                    color: 'white'
                                }}
                                btnStyle={{
                                    paddingHorizontal: 90,
                                    paddingVertical: 20,
                                    borderWidth: 0
                                }}
                                title="Login"
                                loading={isLoading}
                            />
                        </View>
                        <View>
                            <Text>
                                Don't have an account {' '}
                                <Link
                                    style={{
                                        color: APP_COLOR.ORANGE,
                                        textDecorationLine: 'underline'
                                    }}
                                    href={'/(auth)/signup'}>Sign up</Link>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.otherContainer}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>
                            <View
                                style={{
                                    borderBottomColor: 'gray',
                                    borderBottomWidth: 1,
                                    paddingHorizontal: 50
                                }}
                            />
                            <Text
                                style={{
                                    position: 'relative',
                                    top: 10,
                                    color: 'gray',
                                    marginHorizontal: 10
                                }}
                            >Sign in with</Text>
                            <View
                                style={{
                                    borderBottomColor: 'gray',
                                    borderBottomWidth: 1,
                                    paddingHorizontal: 50
                                }}
                            />
                        </View>
                        <View style={styles.socialBtn}>
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
                </View>
            </View>
        </>
    )
}
export default LoginPage